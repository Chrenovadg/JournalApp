import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWidth = 240}) => {
  return (
    <AppBar 
    position='fixed'
    sx={{ 
        width: {sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
     }}
    >
        <Toolbar>
            <IconButton 
            color='inherit'
            edge='start'
            sx={{ mr:2, display: {sm: 'none'} }}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid container direction='row' justifyContent='space-between'>
                <Typography variant="h6" noWrap component='div'> JournalApp </Typography>
                <IconButton color="error" >
                    <LogoutOutlined/>
                </IconButton>
            </Grid> 

        </Toolbar>
    </AppBar>
  )
}

// en pantallas super pequeñas calculo del 100% disponible- el drawerWidth que son 240px
// solamente en pantallas muy peques ml va a ser igual a los 240 que estoy mandando con drawerWidth