import { FormControlLabel, Switch } from '@material-ui/core';

export default function MiscklicksSwitch({
  setMiscklicksEnabled,
  miscklicksEnabled
}) {
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={miscklicksEnabled === true}
            onChange={() =>
              setMiscklicksEnabled(miscklicksEnabled ? false : true)
            }
            name="checkedB"
          />
        }
        label="Miscklicks enabled"
      />
    </>
  );
}
