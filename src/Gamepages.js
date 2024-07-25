import React, { useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background-color: ${props => props.selected ? '#ff5722' : '#333'};
  border: 2px solid ${props => props.selected ? '#ff5722' : '#666'};
  padding: 8px;
  color: white;
  height: 50px;
  width: 50px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, transform 0.2s;
  font-size: 20px;
  font-weight: bold;
  border-radius: 6px;
  box-shadow: ${props => props.selected ? '0 4px 8px rgba(255, 87, 34, 0.5)' : '0 4px 8px rgba(0, 0, 0, 0.3)'};

  &:hover {
    background-color: ${props => props.selected ? '#e64a19' : '#555'};
    transform: scale(1.05);
  }
`;

const Con1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, #e0f7fa, #b9fbc0);
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  text-align: center;

  h1 {
    font-size: 36px;
    margin: 0;
    color: #333;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  p {
    font-size: 18px;
    margin: 0;
    color: #666;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  background-color: #ff5722;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-weight: bold;

  &:hover {
    background-color: #e64a19;
    transform: scale(1.03);
  }

  &:active {
    background-color: #d84315;
  }
`;

const ResetButton = styled(Button)`
  background-color: #03a9f4;

  &:hover {
    background-color: #0288d1;
  }

  &:active {
    background-color: #0277bd;
  }
`;

const RulesButton = styled(Button)`
  background-color: #4caf50;

  &:hover {
    background-color: #388e3c;
  }

  &:active {
    background-color: #2c6b2f;
  }
`;

const Modal = styled.div`
  display: ${props => props.open ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 6px;
  width: 80%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  h2 {
    margin-top: 0;
    font-size: 24px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  button {
    background-color: #ff5722;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  
    &:hover {
      background-color: #e64a19;
    }
  
    &:active {
      background-color: #d84315;
    }
  }
`;

const Message = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.success ? '#388e3c' : '#d32f2f'};
  transition: opacity 0.3s;
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.2);
`;

const Instructions = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  font-weight: bold;
`;

const Gamepages = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [message, setMessage] = useState('');
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (selectedNumber === null) {
      setMessage('Please select a number before rolling the dice.');
      return;
    }

    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);

    if (newValue === selectedNumber) {
      setTotalScore(totalScore + newValue);
      setMessage('You won! The dice value matches your selected number.');
    } else {
      setTotalScore(totalScore - selectedNumber);
      setMessage('You lost. The dice value did not match your selected number.');
    }

    // Reset selected number after rolling the dice
    setSelectedNumber(null);
  };

  const handleBoxClick = (number) => {
    setSelectedNumber(number);
    setMessage(''); // Clear message when a new number is selected
  };

  const resetGame = () => {
    setTotalScore(0);
    setSelectedNumber(null);
    setDiceValue(null);
    setMessage('');
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <Con1>
      <ScoreContainer>
        <h1>{totalScore}</h1>
        <p>Total Score</p>
      </ScoreContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box
              key={num}
              selected={selectedNumber === num}
              onClick={() => handleBoxClick(num)}
              aria-label={`Select number ${num}`}
            >
              {num}
            </Box>
          ))}
        </div>
        <Instructions>Select a number</Instructions>
      </div>
      <Button onClick={rollDice} aria-label="Roll the dice">Go</Button>
      <ResetButton onClick={resetGame} aria-label="Reset game">Reset</ResetButton>
      <RulesButton onClick={toggleRules} aria-label="View game rules">Rules</RulesButton>
      {diceValue !== null && (
        <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Dice Value: {diceValue}</p>
        </div>
      )}
      {message && (
        <Message success={message.includes('won')}>
          {message}
        </Message>
      )}
      <Modal open={showRules}>
        <ModalContent>
          <h2>Game Rules</h2>
          <p>1. Select a number from 1 to 6 by clicking on one of the boxes.</p>
          <p>2. Click the "Go" button to roll the dice.</p>
          <p>3. If the dice value matches your selected number, you earn points equal to the dice value.</p>
          <p>4. If the dice value does not match, you lose points equal to your selected number.</p>
          <p>5. Click "Reset" to start the game again with a score of 0.</p>
          <button onClick={toggleRules}>Close</button>
        </ModalContent>
      </Modal>
    </Con1>
  );
}

export default Gamepages;
