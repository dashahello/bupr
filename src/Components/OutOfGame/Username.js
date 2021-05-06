import { TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

export default function Username() {
  const [username, setUsername] = useState('User');

  function getUsername(evt) {
    setUsername(evt.target.value);
  }

  return (
    <>
      {/* <Typography>{username}</Typography> */}
      <TextField
        style={{ marginBottom: '10px' }}
        type="text"
        label="Name"
        variant="outlined"
        onChange={getUsername}
        placeholder="Randy Bobandy"
      />
    </>
  );
}
