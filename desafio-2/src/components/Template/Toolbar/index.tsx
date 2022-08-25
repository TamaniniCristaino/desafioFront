import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import TemplateContext from 'context/TemplateContext';

const useStyles = makeStyles({
  root: {
    background: `linear-gradient(90.04deg, #0C1A2D 5.98%, rgba(12, 26, 45, 0.78) 52.83%, rgba(12, 26, 45, 0.78) 95.94%)`,
    color: 'white',
    height: 48,
  },
});

export default function PToolbar() {
  const classes = useStyles();
  const ctx = useContext(TemplateContext);

  return (
      <AppBar position="relative">
        <Toolbar classes={{
          root: classes.root
        }}>
          <IconButton>
            <MenuIcon style={{ color: '#fff' }}/>
          </IconButton>
          <Box style={{
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }} >
            <Typography>{}</Typography>
          </Box>
        </Toolbar>
      </AppBar>
  );
}
