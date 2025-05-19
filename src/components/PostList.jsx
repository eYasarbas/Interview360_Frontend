import { Box, Paper, Typography, Chip, Stack, Divider, IconButton, Tooltip } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const dummyPosts = [
  {
    id: 1,
    title: 'Google - Frontend Developer Mülakatı',
    user: 'techguru',
    tags: ['FrontendDeveloper', 'Google', 'Zorluk: Orta', '2025', 'Olumlu'],
    content: 'Teknik bilgi derinlemesine sorgulandı. Interviewer oldukça yapıcıydı ve süreç dostane geçti.',
    likes: 12,
    commentsCount: 4,
    comments: [
      { id: 1, user: 'developer123', text: 'Harika bir deneyim olmuş!' },
      { id: 2, user: 'frontenddev', text: 'Teknik sorular nasıldı detay verebilir misin?' }
    ]
  }
];

const PostList = () => (
  <Box>
    {dummyPosts.map(post => (
      <Paper key={post.id} sx={{ p: 2, mb: 3, borderRadius: 3, boxShadow: 1, background: '#fafdff' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" sx={{ color: '#1976d2', fontWeight: 700 }}>
            {post.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#888' }}>@{post.user}</Typography>
        </Box>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          {post.tags.map(tag => <Chip key={tag} label={tag} size="small" />)}
        </Stack>
        <Typography variant="body1" sx={{ mb: 2, color: '#444' }}>{post.content}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', color: '#888', fontSize: 15, mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <ThumbUpAltOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} /> {post.likes} Beğeni
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <ChatBubbleOutlineOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} /> {post.commentsCount} Yorum
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <ShareOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} /> Paylaş
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BookmarkBorderOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} /> Kaydet
          </Box>
        </Box>
        <Divider sx={{ mb: 1 }} />
        {post.comments.map(comment => (
          <Box key={comment.id} sx={{ bgcolor: '#f5f7fa', p: 1.2, mb: 1, borderRadius: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#1976d2', fontWeight: 600, fontSize: 15 }}>
              @{comment.user}
            </Typography>
            <Typography variant="body2" sx={{ color: '#444', mb: 0.5 }}>{comment.text}</Typography>
            <Box sx={{ display: 'flex', gap: 2, fontSize: 13, color: '#888' }}>
              <span style={{ cursor: 'pointer' }}>Beğen</span>
              <span style={{ cursor: 'pointer' }}>Yanıtla</span>
            </Box>
          </Box>
        ))}
      </Paper>
    ))}
  </Box>
);

export default PostList; 