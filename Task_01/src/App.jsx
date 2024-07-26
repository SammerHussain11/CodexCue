import React, { useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f9fc 0%, #e9f2f9 100%);
  font-family: "Poppins", sans-serif;
`;

const Card = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff, #f0f4f8);
  border-radius: 30px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(0, 0, 0, 0.08);
  padding: 60px;
  text-align: center;
  width: 480px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(45deg, #1a237e, #3949ab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CounterValue = styled.div`
  font-size: 96px;
  font-weight: 700;
  color: #3498db;
  margin: 30px 0;
  text-shadow: 2px 2px 8px rgba(52, 152, 219, 0.3);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Button = styled(motion.button)`
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: white;
  border: none;
  border-radius: 50px;
  padding: 18px 36px;
  font-size: 20px;
  font-weight: 600;
  margin: 0 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);

  &:hover {
    background: linear-gradient(45deg, #2980b9, #3498db);
    box-shadow: 0 15px 30px rgba(52, 152, 219, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <AppContainer>
      <Card
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Title>Counter App</Title>
        <CounterValue>{count}</CounterValue>
        <ButtonContainer>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={decreaseCount}
            disabled={count === 0}
          >
            Decrease
          </Button>
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={increaseCount}
          >
            Increase
          </Button>
        </ButtonContainer>
      </Card>
    </AppContainer>
  );
}

export default App;
