
import { useRef, useState } from 'react';
import {FormHandles} from '@unform/core';
import { Form } from '@unform/web';
import { 
  Container, 
  AppContainer, 
  ButtonNextQuestion, 
  TitleQuestion, 
  InputResponse, 
  ConfirmButton 
} from './styles';

const App = () => {
  const formRef = useRef<FormHandles>(null);

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);
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
  }

  function confirmarResultado() {
    const respostaCorreta = resposta === resultado;

    if (respostaCorreta) {
      alert('Obaaa! Você acertou :D');
      montarCalculo();
    } else {
      alert('Poxa. Você errou... :(');
    }
  }

  return (
    <Container>
      <AppContainer>
        <ButtonNextQuestion onClick={montarCalculo}>Próxima pergunta</ButtonNextQuestion>

        <TitleQuestion>{valor1} x {valor2}:</TitleQuestion>
        
        <Form className='form' ref={formRef} onSubmit={confirmarResultado}>
          <InputResponse type="text" onChange={e => setResposta(Number(e.target.value))} placeholder='Insira a resposta' />
          <ConfirmButton type='submit'>Confirmar</ConfirmButton>
        </Form>
      </AppContainer>
    </Container>
  );
}

export default App;
