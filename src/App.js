import {useState,useEffect,useReducer, useCallback} from 'react';

import axios from 'axios';

import CommentBox from './CommentBox';
import styled from 'styled-components';

const baseURL = `https://zuri-bot.herokuapp.com/twitter/post-text`;
function App() {
  
  const[text,setText] = useState("")
  
  const [comment,setComment] = useState([]);

const sendMessage = () => {
 axios.post(baseURL,{
    "message":`${text}`
  }).then(res => console.log(res))
  .catch(err => console.log(err))

}

const handleInput = (evt) => {
  setText(evt.target.value);
}

const handleAddComment = () => {
  setComment([...comment,text]);
  sendMessage();
    setText("");
}


const handleFileAdd = (evt) => {
  const file = evt.target.files[0];
  console.log(file);

}

  return (
    <div className="App">
    
    <Wrapper>
      <div style={{display:"flex",flexDirection:"column"}}>
      {comment && comment.map((comment) => (
        <div>
        <p key={comment}>{comment}</p>
        </div>
      ))}
    <CommentBox handleInput={handleInput} 
    value={text} addComment={handleAddComment}
    onFileAdd = {handleFileAdd}/>
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
`


export default App;
