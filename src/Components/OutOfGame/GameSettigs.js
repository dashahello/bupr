import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ThemeSwitch from './ThemeSwitch';
import MiscklicksSwitch from './MiscklicksSwitch';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '10px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function GameSettings({
  themeToUse,
  setThemeToUse,
  miscklicksEnabled,
  miscklicks
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ThemeSwitch setThemeToUse={setThemeToUse} themeToUse={themeToUse} />
          <MiscklicksSwitch
            miscklicksEnabled={miscklicksEnabled}
            miscklicks={miscklicks}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}