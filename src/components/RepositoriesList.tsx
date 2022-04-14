import React, { useState } from 'react';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('chuj');

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          value={term}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTerm(e.target.value)
          }
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
