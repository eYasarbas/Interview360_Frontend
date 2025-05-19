import { Box, Typography, List, ListItem } from '@mui/material';

const categories = [
  {
    icon: '🏢',
    title: 'Popüler Şirketler',
    color: '#2196f3',
    items: [
      { name: 'Google', count: 120 },
      { name: 'Amazon', count: 87 },
      { name: 'Microsoft', count: 60 },
    ],
  },
  {
    icon: '👨‍💻',
    title: 'Pozisyonlar',
    color: '#1976d2',
    items: [
      { name: 'Frontend Developer', count: 65 },
      { name: 'Data Analyst', count: 40 },
    ],
  },
  {
    icon: '❓',
    title: 'Genel Sorular',
    color: '#1976d2',
    items: [
      { name: 'Mülakat Tüyoları', count: 15 },
    ],
  },
  {
    icon: '📈',
    title: 'Trendler',
    color: '#1976d2',
    items: [
      { name: '2025 Mülakat Trendleri', count: 10 },
    ],
  },
];

const SidebarLeft = () => (
  <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 3, boxShadow: 1 }}>
    <Typography variant="h6" color="primary" gutterBottom>
      Kategoriler
    </Typography>
    {categories.map((cat) => (
      <Box key={cat.title} sx={{ mb: 2 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 'bold', color: '#222', display: 'flex', alignItems: 'center', mb: 0.5 }}
        >
          <span style={{ marginRight: 6 }}>{cat.icon}</span> {cat.title}
        </Typography>
        <List dense disablePadding>
          {cat.items.map(item => (
            <ListItem key={item.name} sx={{ pl: 3, py: 0.2 }} disableGutters>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={{ fontSize: 15, color: '#222' }}>{item.name}</Typography>
                <Typography sx={{ fontSize: 15, color: '#222', fontWeight: 500 }}>({item.count})</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    ))}
  </Box>
);

export default SidebarLeft; 