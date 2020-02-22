import React from 'react';
import useLocalStorage from './../hooks/useLocalStorage';

const Toggle = () => {
  const [isStateful, setIsStateful] = useLocalStorage('isStateful', false);
  
  const handleClick = e => {
    e.preventDefault();
    setIsStateful(!isStateful);
  }

  return (
    <div>
      <button onClick={handleClick}>
        {isStateful ? "Stateless" : "Stateful"}
      </button>
    </div>
  );
}

export default Toggle;