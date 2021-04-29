import { Typography } from '@material-ui/core';

export default function DisplayMiscklicks({ miscklicksEnabled, miscklicks }) {
  if (miscklicks !== null) {
    return <Typography variant="h5">{`Misclicks: ${miscklicks}`}</Typography>;
  } else {
    return null;
  }
}
