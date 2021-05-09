import { TextField, Typography } from '@material-ui/core';
//import { useState } from 'react';

export default function Username({ username, setUsername, getUsername }) {
  return (
    <>
      <Typography username={username}>{username}</Typography>
      <TextField
        style={{ marginBottom: '10px' }}
        type="text"
        label="Name"
        variant="outlined"
        onChange={getUsername}
        placeholder="Randy Bobandy"
        setUserName={setUsername}
      />
    </>
  );
}