import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cart: {
    display: 'flex',
    marginBottom: '1em'
  },
  cartDetails: {
    flex: 1,
  },
  cartMedia: {
    width: 160,
    backgroundSize: 'contain',
  },
});

export default useStyles;