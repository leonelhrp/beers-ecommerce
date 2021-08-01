import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    fontSize: '1.5em',
    fontWeight: 'bold'
  },
  linkedinButton: {
    backgroundColor: '#be1e4e',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#be1e4e'
    },
    fontSize: '1.2em',
  },
}));

export default useStyles;
