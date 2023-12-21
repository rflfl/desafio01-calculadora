import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row } from "./styles"
import { useState } from "react"
const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${number}${prev === '0' ? '' : prev}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    } else {
      const sum =  Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    } else {
      const subt =  Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(subt))
      setOperation('')
    }
  }

  const handleMultiplicationNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    } else {
      const mult =  Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setOperation('')
    }
  }
  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
    } else {
      const div =  Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(div))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleMinusNumbers()
          break;
        case '*':
          handleMultiplicationNumbers()
          break;
        case '/':
          handleDivisionNumbers()
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onCLick={handleMultiplicationNumbers} />
          <Button label="/" onCLick={handleDivisionNumbers} />
          <Button label="C" onCLick={() => handleOnClear()} />
          <Button label="X" onCLick={() => handleAddNumber('X')} />
        </Row>
        <Row>
          <Button label="7" onCLick={() => handleAddNumber('7')} />
          <Button label="8" onCLick={() => handleAddNumber('8')} />
          <Button label="9" onCLick={() => handleAddNumber('9')} />
          <Button label="-" onCLick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onCLick={() => handleAddNumber('4')} />
          <Button label="5" onCLick={() => handleAddNumber('5')} />
          <Button label="6" onCLick={() => handleAddNumber('6')} />
          <Button label="+" onCLick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onCLick={() => handleAddNumber('1')} />
          <Button label="2" onCLick={() => handleAddNumber('2')} />
          <Button label="3" onCLick={() => handleAddNumber('3')} />
          <Button label="=" onCLick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;