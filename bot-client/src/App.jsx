import { useState, useEffect, useReducer, useCallback } from 'react';
import axios from 'axios';

import CommentBox from './CommentBox';
import styled from 'styled-components';

const baseURL = `https://zuri-bot.herokuapp.com/twitter/post-text`;
const mediaRL = `https://zuri-bot.herokuapp.com/twitter/post-media`;
function App() {
  const [text, setText] = useState('');
  const [type, setType] = useState('text');
  const [imageText, setImageText] = useState(null);
  const [comment, setComment] = useState([]);
  const [response, setResponse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const sendMessage = () => {
    axios
      .post(
        baseURL,
        {
          message: text,
        },
        config
      )
      .then((res) => {
        // setResponse([...response,response.data.message])
        console.log(res.data.message);
        setResponse([...response, res.data.message]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const sendImage = () => {};

  const handleInput = (evt) => {
    setText(evt.target.value);
  };

  const handleAddComment = () => {
    setComment([...comment, text]);
    // sendMessage();
    console.log('Holla');
    setText('');
  };

  const imageSelectHandler = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();

    formData.append('media', file);
    axios
      .post(mediaRL, formData, {
        headers: {
          accept: 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${file._boundary}`,
        },
      })
      .then((response) => {
        console.log('image sent', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const fileSendHandler = () => {
    console.log('a file was sent');
  };

  return (
    <div className="App">
      <Wrapper>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {comment &&
              comment.map((comment) => (
                <SenderFlag key={comment}>{comment}</SenderFlag>
              ))}
            <div
              style={{
                alignSelf: 'flex-end',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {loading === false &&
                response.map((response) => (
                  <SuccessFlag>{response}</SuccessFlag>
                ))}
              {/* {response ?? <SuccessFlag>Message sent successfully</SuccessFlag>:
          <ErrorFlag>Message sending failed</ErrorFlag>
          } */}
            </div>
            <p
              style={{
                marginLeft: 'auto',
                marginTop: '20px',
                marginBottom: '20px',
              }}
            >
              <a href="https://zuri-bot.herokuapp.com/twitter/login">
                Follow this link to log in to Twitter so you can start using
                this app
              </a>
            </p>
          </div>
          <CommentBox
            type={type}
            handleInput={handleInput}
            value={text}
            addComment={handleAddComment}
            onFileSend={fileSendHandler}
            onImageSelect={imageSelectHandler}
          />
        </div>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: 80vh;
  align-items: flex-end;
  width: 100%;
  justify-content: center;
`;
const SenderFlag = styled.span`
  margin-top: 4px;
  border-radius: 3px;
  background: hsla(161, 99%, 77%, 1);
  padding: 4px 6px;
  width: fit-content; ;
`;
const SuccessFlag = styled(SenderFlag)`
  background: hsla(161, 100%, 36%, 1);
`;
const ErrorFlag = styled(SenderFlag)`
  background: hsla(360, 98%, 60%, 1);
`;
export default App;
