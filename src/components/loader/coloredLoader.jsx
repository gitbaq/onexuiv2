import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress } from '@material-ui/core'
import { colors } from '../../theme';

const useStyles = makeStyles(theme => ({
  colorPrimary: {
    backgroundColor: colors.red,//'#69FABD',
  },
  barColorPrimary: {
    backgroundColor: colors.darkBlue,//'#56dea5',
  }
}));

export default function ColoredLoader(props) {
  const classes = useStyles();
  let divPosition = props.position ? props.position : 'absolute';
  return (
    <div style={{ position: divPosition, left: '0px', right: '0px', top: '0px' }}>
      <LinearProgress {...props} classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }} />
    </div>
  )
}
