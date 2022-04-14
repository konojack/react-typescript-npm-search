import React, { useState } from 'react';
import { useActions } from '../hooks/use-actions';
import { useSelector } from '../hooks/use-typed-selector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>('chuj');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useSelector(state => state.repositories);

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
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
