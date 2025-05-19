import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const guides = [
  { icon: '📝', title: 'Başarılı Mülakat Stratejileri' },
  { icon: '📚', title: 'Sık Sorulan Sorular' },
  { icon: '🛠️', title: 'Teknik Mülakatlara Hazırlık' },
  { icon: '💬', title: 'Soft Skill Sorularına Cevaplar' },
  { icon: '📈', title: '2025 Mülakat Trendleri' },
  { icon: '🧑‍💻', title: 'Frontend Developer Yol Haritası' },
  { icon: '🔥', title: 'Data Analyst Yol Haritası' },
];

const SidebarRight = () => (
  <Box sx={{ p: 2, bgcolor: '#fff', borderRadius: 3, boxShadow: 1 }}>
    <Typography
      variant="h6"
      sx={{ color: '#222', fontWeight: 'bold', mb: 1, display: 'flex', alignItems: 'center' }}
    >
      <span style={{ marginRight: 6 }}>📚</span> Rehberler ve Makaleler
    </Typography>
    <List dense disablePadding>
      {guides.map((guide) => (
        <ListItem key={guide.title} sx={{ pl: 2, py: 0.5 }} disableGutters>
          <ListItemText
            primary={<span><span style={{ marginRight: 6 }}>{guide.icon}</span><span style={{color:'#222'}}>{guide.title}</span></span>}
            primaryTypographyProps={{ fontSize: 15 }}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default SidebarRight; 