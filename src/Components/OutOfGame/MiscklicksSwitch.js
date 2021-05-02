import { FormControlLabel, Switch } from '@material-ui/core';

export default function MiscklicksSwitch({
  setMiscklicksEnabled,
  miscklicksEnabled
}) {
  function handleChange() {
    setMiscklicksEnabled(miscklicksEnabled ? false : true);
  }

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={miscklicksEnabled === true}
            onChange={handleChange}
            name="checkedB"
          />
        }
        label="Miscklicks enabled"
      />
    </>
  );
}
