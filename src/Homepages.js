import React from 'react';
import mypic from './mydice.jpg';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1000px;
  height: 100vh;
  padding: 20px;
  text-align: center;
`;

const Homepages = ({ changer }) => {
  return (
    <Cont>
      <h1>DICE GAME...</h1>    
      <img src={mypic} alt="dice" style={{ width: '300px', height: 'auto', marginBottom: '20px' }} />
      <Button onClick={changer}>START</Button>
    </Cont>
  );
}

export default Homepages;