import { createTheme } from '@mui/material/styles';

// PROFESSIONAL DESIGN SYSTEM THEME
export const theme = createTheme({
  palette: {
    primary: {
      main: '#2563eb', // Ana mavi
      light: '#3b82f6',
      dark: '#1d4ed8',
      gradient: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
    },
    secondary: {
      main: '#6366f1', // Mor tonu
      light: '#818cf8',
      dark: '#4f46e5',
    },
    background: {
      default: '#f8fafc',
      paper: '#fff',
    },
    text: {
      primary: '#1e293b',
      secondary: '#64748b',
      disabled: '#94a3b8',
    },
    grey: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    error: { main: '#ef4444' },
    warning: { main: '#f59e42' },
    success: { main: '#22c55e' },
    info: { main: '#0ea5e9' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    '0 2px 6px rgba(0, 0, 0, 0.05)',
    '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  ],
  components: {
    // BUTTON VARIANTS
    MuiButton: {
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
            color: 'white',
            fontWeight: 600,
            '&:hover': {
              background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)',
              transform: 'translateY(-1px)',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            },
          },
        },
        {
          props: { variant: 'icon' },
          style: {
            minWidth: 'auto',
            padding: '8px',
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(37, 99, 235, 0.04)',
          },
        },
      },
    },
    // CARD & PAPER
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #e0e0e0',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
          backgroundColor: '#fff',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          border: '1px solid #e0e0e0',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
          backgroundColor: '#fff',
        },
      },
    },
    // CHIP
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
        },
      },
    },
    // AVATAR
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32,
          fontSize: '0.875rem',
        },
      },
    },
    // BADGE
    MuiBadge: {
      styleOverrides: {
        badge: {
          borderRadius: 4,
          padding: '0 4px',
          minWidth: 20,
          height: 20,
        },
      },
    },
  },
}); 