import { Box, Typography, List, ListItem, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { categories } from '../data/categories';
import Advertisement from './Advertisement';

const CategorySidebar = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simüle edilmiş API çağrısı
    const fetchCategories = async () => {
      try {
        // Gerçek API çağrısı yerine mock data kullanıyoruz
        await new Promise(resolve => setTimeout(resolve, 500)); // Yükleme efekti için
        setCategoriesData(categories);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };

    fetchCategories();
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
          Categories
        </Typography>
      </Box>
      {categoriesData.map((cat) => (
        <Box key={cat.id} sx={{ mb: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              display: 'flex',
              alignItems: 'center',
              mb: 1.5,
              fontSize: 15,
            }}
          >
            <span style={{ marginRight: 8 }}>{cat.icon}</span> {cat.title}
          </Typography>
          <List dense disablePadding>
            {cat.items.map(item => (
              <ListItem
                key={item.id}
                sx={{
                  pl: 3,
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
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 15, color: 'text.primary' }}>{item.name}</Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: 'grey.400',
                      fontWeight: 500,
                      bgcolor: 'grey.100',
                      px: 1,
                      py: 0.25,
                      borderRadius: 1,
                    }}
                  >
                    {item.count}
                  </Typography>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}

      <Advertisement />
    </Paper>
  );
};

export default CategorySidebar; 