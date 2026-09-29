import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput, { UserInputData } from './components/UserInput';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState<UserInputData>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier: keyof UserInputData, newValue: number) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;