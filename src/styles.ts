import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;

  font-family: Arial, Helvetica, sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: black;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;

  height: 500px;
  width: 50%;

  border: 1px solid black;
  border-radius: 20px;

  @media(max-width: 600px) {
    width: 90%;
  }
`;

export const ButtonNextQuestion = styled.button`
  width: 200px;
  height: 60px;

  background-color: black;
  color: white;
  border: none;

  font-size: 18px;

  cursor: pointer;

  border-radius: 10px;
`;

export const TitleQuestion = styled.h1`
  text-align: center;
`;

export const InputResponse = styled.input`
  width: 200px;
  height: 30px;

  margin-bottom: 20px;

  border: 1px solid black;
  border-radius: 10px;
`;

export const ConfirmButton = styled.button`
  width: 200px;
  height: 30px;

  cursor: pointer;
  background-color: black;
  border: none;

  border-radius: 10px;

  color: white;
  font-size: 16px;
`;