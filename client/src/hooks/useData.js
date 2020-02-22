import React, { useState } from 'react';
import axios from 'axios';

// A custom hook to consume and store the custom rankings in state
const useData = (defaultValue) => {
  const [data, setAPIData] = useState(defaultValue);
  const setData = (apiURL) => {
      // Get data from the API
    axios.get(apiURL)
    .then(res => {
      console.log(res)
      setAPIData(res.data);
    })
    .catch(err => console.error(err))
  }
  // Returns the variable and custom setter
  return [data, setData];
}

export default useData;
