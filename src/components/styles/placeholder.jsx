import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  helloThereStyle: {
    fontStyle: 'oblique',
    textAlign: 'center',
    color: 'purple'
  },

  second: {
    fontStyle: 'oblique',
    textAlign: 'center',
    color: 'red'
  },
  
  typography_style: {
      flex: 1
  },

  snowflake: {
      padding: '3%'
  },

  center_flex: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  }
})

export default useStyles;