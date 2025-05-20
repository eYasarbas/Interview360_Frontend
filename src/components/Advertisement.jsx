import { Box, Paper, Typography } from '@mui/material';

const Advertisement = ({ size = '300x250' }) => {
  const [width, height] = size.split('x').map(Number);

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'grey.200',
        overflow: 'hidden',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          color: 'text.secondary',
          mb: 1,
        }}
      >
        <span style={{ fontSize: '1.2rem' }}>📢</span>
        <Typography variant="caption" sx={{ fontWeight: 500 }}>
          Advertisement
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          minHeight: height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.50',
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'grey.200',
        }}
      >
        <Typography variant="caption" color="text.secondary">
          {width}x{height}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Advertisement; 