import { createTheme } from '@mui/material';

const colors = {
  primary: {
    main: '#38BBFE',
    secondary: '#7DD3FF',
  },
  neutral: {
    neutral10: '#FFFFFF',
    neutral20: '#F5F5F6',
    neutral30: '#EEEEEF',
    neutral40: '#E1E2E3',
    neutral50: '#C3C4C7',
    neutral60: '#A0A2A6',
    neutral70: '#999CA2',
    neutral80: '#64686F',
    neutral90: '#434750',
    neutral100: '#0F141F',
  },
  danger: '#E55353',
  white: {
    main: '#F2F2F2',
  },
  black: {
    main: '#000',
  },
};

export const theme = createTheme({
  typography: {
    fontFamily: ['Poppins', 'serif'].join(','),
    button: {
      fontSize: 14,
      fontWeight: 600,
    },
  },
  palette: {
    ...colors,
  },
});

export const ModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#FFFFFF',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
  maxHeight: '80vh',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
};
