import { Typography } from '@material-ui/core';

export default function DisplayMiscklicks({ miscklicksEnabled, miscklicks }) {
  return miscklicksEnabled ? (
    <Typography variant="h5">{`Misclicks: ${miscklicks}`}</Typography>
  ) : null;
}
