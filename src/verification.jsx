import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Verification({ onVerify }) {
  const [srns, setSrns] = useState('');

  const handleVerification = () => {
    if (srns.startsWith("PES") && srns.length === 13 && srns.includes("UG")) {
      onVerify();
    } else {
      alert('Please provide a valid SRN');
    }
  };

  return (
    <PageContainer>
      <VerificationContainer>
        <Title>The first step is student verification. This is simply to verify and confirm that you are a student of PES University.</Title>
        <Input
          type="text"
          placeholder="Enter your SRN (Case-sensitive)"
          value={srns}
          onChange={(e) => setSrns(e.target.value)}
        />
        <Button onClick={handleVerification}>Verify</Button>
      </VerificationContainer>
    </PageContainer>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; // Ensure it takes full viewport height
  background: #f0f0f0; // Light background color for the full page
  padding: 20px;
  box-sizing: border-box;
`;

const VerificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #FF6F00, #003366);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 4.5s ease-in-out;
  width: 100%;
  max-width: 600px; // Maximum width to keep it manageable
  margin: 0 auto;
  min-height: 300px; // Ensure a minimum height for proper spacing
  box-sizing: border-box; // Include padding and border in the element's total width and height

  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
    min-height: 250px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;

  &:focus {
    border-color: #333;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

export default Verification;
