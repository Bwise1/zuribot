import { useState } from 'react';
import styled from 'styled-components';
import UnstyledButton from './UnstyledButton';
const CommentBox = ({ value, handleInput, addComment, onImageSelect }) => {
  const [type, setType] = useState('text');

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type={type}
          placeholder="Send a message"
          value={value}
          onChange={type === 'file' ? onImageSelect : handleInput}
          onKeyDown={(e) => e.key === 'Enter' && addComment()}
        />
        <div
          style={{
            display: 'flex',
            gap: '8px',
            position: 'absolute',
            top: '35%',
            right: '10px',
          }}
        >
          <UnstyledButton
            onClick={
              type === 'text' ? () => setType('file') : () => setType('text')
            }
          >
            <img src="/comments/clip.svg" alt="" />
          </UnstyledButton>
          <UnstyledButton onClick={addComment}>
            <img src="/comments/send.svg" alt="" />
          </UnstyledButton>
        </div>
      </InputWrapper>
      {/* <SendWrapper>
                <div style={{display:"flex"}}>
                <div style={{display:"flex",gap:"11px",alignItems:"center"}}>
               <img src="/comments/lightning.svg" alt="" />
               <img src="/comments/border.svg" alt="" />
               <img src="/comments/bold.svg" alt="" />
               </div>
               <div style={{display:"flex",gap:"19px",marginLeft:"22px",alignItems:"center"}}>
               <img src="/comments/italic.svg" alt="" />
               <img src="/comments/link.svg" alt="" />
               <img src="/comments/list.svg" alt="" />
               </div>
               </div>
               <div style={{display:"flex",gap:"15px",marginLeft:"auto"}}>
               <img src="/comments/at-sign.svg" alt="" />
               <UnstyledButton onClick={addComment}><img src="/comments/clip.svg" alt="" /></UnstyledButton>
               <img src="/comments/Shape.svg" alt="" />
               <img src="/comments/bigborder.svg" alt="" />
               <img src="/comments/dropdown.svg" alt="" />
               </div>
               
              
            </SendWrapper> */}
    </Wrapper>
  );
};
export default CommentBox;

const Wrapper = styled.div`
  border: 1px solid #ebebeb;
  border-radius: 3px;
  /* display: flex;
flex-direction: column; */
  background-color: white;
`;
const InputWrapper = styled.section`
  /* padding-left: 8px;
padding-top: 8px;
padding-bottom: 8px; */
  position: relative;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  /* display: flex;
flex-direction: column; */
  background-color: white;
  width: 700px;
  border-bottom: 1px solid hsl(160, 100%, 86%);
`;
const SendWrapper = styled.section`
  padding: 10px 18px 15px 18px;
  display: flex;
  gap: 120px;
  align-items: center;
  padding-right: 18px;
  gap: 4px;
`;
const Input = styled.input`
  display: block;
  border: none;
  padding: 18px 0 18px 12px;
  background-color: inherit;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-weight: 400;
    color: hsla(0, 0%, 75%, 1);
    font-size: ${15 / 16}rem;
  }
`;
const SendButton = styled.button`
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background-color: hsl(160, 100%, 26%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
`;
