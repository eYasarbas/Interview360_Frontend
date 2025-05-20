import { Grid, ThemeProvider, Container } from '@mui/material';
import CategorySidebar from './components/CategorySidebar';
import PostList from './components/PostList';
import GuideSidebar from './components/GuideSidebar';
import Header from './components/Header';
import { theme } from './theme/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid
          container
          spacing={4}
          sx={{
            minHeight: 'calc(100vh - 64px)',
            alignItems: 'flex-start',
          }}
        >
          <Grid item xs={12} md={3}>
            <CategorySidebar />
          </Grid>
          <Grid item xs={12} md={6}>
            <PostList />
          </Grid>
          <Grid item xs={12} md={3}>
            <GuideSidebar />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
