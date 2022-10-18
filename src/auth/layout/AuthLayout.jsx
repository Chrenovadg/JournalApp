// su contenido va a ser lo que se que quiero reutilizar
import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
        <Grid   
            container
            spacing={0}         
            direction="column"  
            alignItems="center"
            justifyContent="center"
            sx ={{ minHeight: '100vh', backgroundColor:'primary.main', padding: 4}} 
        >

        <Grid item 
            className='box-shadow'
            xs={3} // en pantallas medianas va a tener 3 posiciones
            sx={{ 
                width: {sm: 450 }, // esto se aplica solo en medianaspx
                backgroundColor: 'white', 
                p:3, 
                borderRadius: 2 
                }}>
             <Typography variant="h5" sx={{ mb:1 }}> {title} </Typography> 
                    {children}
        </Grid>
    </Grid>
  )
}

// todas las paginas a las cuales le ponga este authLayout van a traer esos grid y sus hijos van a estar abajo
// <Typography variant="h5" sx={{ mb:1 }}> Login </Typography> este texto va a ir como prop como argumento a nuestro authlayout