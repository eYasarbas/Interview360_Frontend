import { Grid } from '@mui/material';
import SidebarLeft from './components/SidebarLeft';
import PostList from './components/PostList';
import SidebarRight from './components/SidebarRight';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Grid
        container
        spacing={3}
        alignItems="flex-start"
        sx={{ background: '#f7f9fb', minHeight: '100vh', py: 0, px: 4,}}
      >
        <Grid item xs={12} md={3}>
          <SidebarLeft />
        </Grid>
        <Grid item xs={12} md={6}>
          <PostList />
        </Grid>
        <Grid item xs={12} md={3}>
          <SidebarRight />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
