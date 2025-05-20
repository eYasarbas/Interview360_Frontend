import { Box, Typography, List, ListItem, ListItemText, Paper, Tooltip } from '@mui/material';
import { useState, useEffect } from 'react';
import { guides } from '../data/guides';
import Advertisement from './Advertisement';

const GuideSidebar = () => {
  const [guidesData, setGuidesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş API çağrısı
    const fetchGuides = async () => {
      try {
        // Gerçek API çağrısı yerine mock data kullanıyoruz
        await new Promise(resolve => setTimeout(resolve, 500)); // Yükleme efekti için
        setGuidesData(guides);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  if (loading) {
    return (
      <Paper elevation={2} sx={{ p: { xs: 2, md: 3 }, mb: 3, bgcolor: 'background.paper', border: '1px solid', borderColor: 'grey.200', borderRadius: 3, boxShadow: 2 }}>
        <Typography>Loading...</Typography>
      </Paper>
    );
  }

  return (
    <Paper elevation={2} sx={{ p: { xs: 2, md: 3 }, mb: 3, bgcolor: 'background.paper', border: '1px solid', borderColor: 'grey.200', borderRadius: 3, boxShadow: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ width: 4, height: 28, bgcolor: 'primary.main', borderRadius: 2, mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 17, color: 'text.primary' }}>
          Guides & Articles
        </Typography>
      </Box>
      <List dense disablePadding>
        {guidesData.map((guide) => (
          <Tooltip
            key={guide.id}
            title={`Click to read more about ${guide.title}`}
            placement="left"
            arrow
          >
            <ListItem
              sx={{
                pl: 2,
                py: 1,
                mb: 0.5,
                cursor: 'pointer',
                borderRadius: 1,
                transition: 'background 0.2s',
                '&:hover': {
                  bgcolor: 'grey.50',
                },
              }}
              disableGutters
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: 8 }}>{guide.icon}</span>
                    <Typography
                      sx={{
                        color: 'text.primary',
                        fontSize: 15,
                        fontWeight: 500,
                      }}
                    >
                      {guide.title}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          </Tooltip>
        ))}
      </List>

      <Advertisement size="300x600" />
    </Paper>
  );
};

export default GuideSidebar; 