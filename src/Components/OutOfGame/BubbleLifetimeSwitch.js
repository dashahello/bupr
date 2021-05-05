import { FormControlLabel, Switch } from '@material-ui/core';

export default function BubbleLifetimeSwitch({
  bubbleLifetime,
  setBubbleLifetime
}) {
  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={bubbleLifetime === true}
            onChange={() => setBubbleLifetime(bubbleLifetime ? false : true)}
            name="checkedC"
          />
        }
        label="Bubble lifetime enabled"
      />
    </>
  );
}
