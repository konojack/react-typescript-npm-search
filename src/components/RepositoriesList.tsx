import React, { useState } from 'react';
import { useActions } from '../hooks/use-actions';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('chuj');
  const { searchRepositories } = useActions();

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
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
