import { ChangeEvent } from 'react';
import { InvestmentInput } from '../util/investment'

interface UserInputProps {
  userInput: InvestmentInput;
  onChange: (inputIdentifier: keyof InvestmentInput, newValue: string) => void;
}

export default function UserInput({ onChange, userInput }: UserInputProps) {
  const handleInputChange = (
    identifier: keyof InvestmentInput,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    onChange(identifier, event.target.value);
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => handleInputChange('initialInvestment', event)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => handleInputChange('annualInvestment', event)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => handleInputChange('expectedReturn', event)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleInputChange('duration', event)}
          />
        </p>
      </div>
    </section>
  );
}