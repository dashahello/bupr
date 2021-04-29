import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default function DisplayInstructions() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Instructions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Set up the timer below, press "START THE GAME" and try to pop as
            many bubbles as possible (remember that every bubble has a lifetime
            of 1 second so it will disappear unless you click on it). Good luck
            :)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
