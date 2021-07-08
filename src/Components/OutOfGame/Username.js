import { TextField, Typography } from '@material-ui/core';

export default function Username({ username, setUsername }) {
  function handleChange(evt) {
    setUsername(evt.target.value);
    //localStorage.setItem('user', username);
  }
  return (
    <>
      <TextField
        style={{ marginBottom: '10px' }}
        type="text"
        label="Name"
        variant="outlined"
        value={username}
        onChange={handleChange}
        placeholder="Randy Bobandy"
      />
    </>
  );
}
//(evt) => setUsername(evt.target.value)
