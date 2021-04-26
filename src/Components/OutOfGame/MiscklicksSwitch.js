import { Divider, FormControlLabel, Switch } from '@material-ui/core';

export default function MiscklicksSwitch({
  setMiscklicksEnabled,
  miscklicksEnabled
}) {
  return (
    <>
      <Divider />
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
      <Divider style={{ marginBottom: 8 }} />
    </>
  );
}
