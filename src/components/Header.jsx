import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar, Menu, MenuItem, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const menuItems = [
  { label: 'Profilim' },
  { label: 'Paylaşımlarım' },
  { label: 'Ayarlar' },
  { label: 'Çıkış Yap' },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="inherit" elevation={1} sx={{ mb: 3 }}>
      <Toolbar>
        {/* Sol: Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#1976d2' }}>
          Mülakat360
        </Typography>
        {/* Orta: Aksiyon Butonları */}
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2, mr: 2 }}>
          <Button startIcon={<AddIcon />} variant="contained" color="primary" sx={{ fontWeight: 600 }}>
            Yeni Paylaşım
          </Button>
          <Button startIcon={<PersonAddAltIcon />} variant="outlined" color="primary" sx={{ fontWeight: 600 }}>
            Bize Katılın
          </Button>
        </Box>
        {/* Sağ: Profil Alanı */}
        <IconButton onClick={handleMenu} size="large" sx={{ ml: 1 }}>
          <Avatar sx={{ bgcolor: '#1976d2' }}>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.label} onClick={handleClose}>{item.label}</MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header; 