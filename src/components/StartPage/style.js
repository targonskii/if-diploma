import { createUseStyles } from 'react-jss';
import theme from '../../theme';

const StartPageStyle = createUseStyles({
  wrapper: {
    margin: '30px auto',
    width: '1230px',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '27px',
    letterSpacing: '0em',
  },
  header: {
    width: '100%',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '64px',
    '& img': {
      width: '172px',
      height: '32px',
      display: 'block',
      marginRight: '96px',
    },
    '& label': {
      position: 'relative',
      '&:before': {
        position: 'absolute',
        content: 'url(/assets/search.svg)',
        width: '18px',
        height: '18px',
        top: '12px',
        left: '16px',
      },
    },
    '& input': {
      width: '500px',
      height: '48px',
      border: '2px solid',
      borderRadius: '8px',
      borderColor: theme.colors.generalRed,
      marginRight: '273px',
      paddingLeft: '50px',
      '&::placeholder': {
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '21px',
        color: theme.colors.secondaryGray,
      },

    },
    '& a': {
      color: theme.colors.gray,
      textDecoration: 'none',
      '&:last-child': {
        marginLeft: '48px',
      },
    },
  },
  main: {
    height: '494px',
    borderRadius: '8px',
    background: 'url(/assets/bg_bild_your_library.svg)',
    backgroundSize: 'cover',
    padding: '100px 0px 0px 80px',
    '& div': {
      fontSize: '28px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '38px',
      '&:first-child': {
        fontSize: '38px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '51px',
        marginBottom: '40px',
      },
    },
    '& button': {
      width: '185px',
      height: '48px',
      border: 'none',
      borderRadius: '8px',
      color: theme.colors.white,
      background: theme.colors.generalRed,
      marginTop: '40px',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: '27px',
    },
  },
});

export default StartPageStyle;
