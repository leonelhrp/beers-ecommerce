import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  product: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  productMedia: {
    paddingTop: '100%',
    backgroundSize: 'contain',
  },
  productContent: {
    flexGrow: 1,
  },
}));

export default useStyles;