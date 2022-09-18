
import { useState } from 'react';
import { Container, AppContainer, ButtonNextQuestion, TitleQuestion, InputResponse, ConfirmButton } from './styles';

const App = () => {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [calculoText, setCalculoText] = useState('Clique no botão para gerar uma questão de multiplicar');
  const [resposta, setResposta] = useState(0);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function montarCalculo() {
    const valor1 = getRandomInt(0, 10);
    const valor2 = getRandomInt(0, 10);
    const resultado = valor1 * valor2;

    setValor1(valor1);
    setValor2(valor2);
    setResultado(resultado);
    setCalculoText(`${valor1} x ${valor2}: `);
  }

  function confirmarResultado() {
    const respostaCorreta = resposta === resultado;

    if (respostaCorreta) {
      alert('CORRETO!!! Você acertou :D');
    } else {
      alert('Poxa, você errou... :(');
    }
  }

  return (
    <Container>
      <AppContainer>
        <ButtonNextQuestion onClick={montarCalculo}>Próxima pergunta</ButtonNextQuestion>

        <TitleQuestion>{calculoText}</TitleQuestion>
        
        <InputResponse type="text" onChange={e => setResposta(Number(e.target.value))} placeholder='Insira a resposta' />
        <ConfirmButton onClick={confirmarResultado}>Confirmar</ConfirmButton>
      </AppContainer>
    </Container>
  );
}

export default App;
