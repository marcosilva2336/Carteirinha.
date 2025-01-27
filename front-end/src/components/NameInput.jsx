import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { CardContext } from '../context/CardContext';

const NameInput = () => {
  const { name, setName } = useContext(CardContext);

  return (
    <TextField
      label="Nome"
      variant="outlined"
      fullWidth
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default NameInput;
