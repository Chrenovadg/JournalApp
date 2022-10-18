import { Link as RouterLink } from 'react-router-dom'; // alias routerlink para link porque hay 2 importaciones con los mismos nombres
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
  return (
    <AuthLayout title='Login'>
          <form action="">
            <Grid container>

                <Grid item xs={12} sx={{ mt:2 }}>
                    <TextField 
                    label="Correo" 
                    type="email" 
                    placeholder="correo@google.com"
                    fullWidth // que tome todo el ancho posible
                    />
                </Grid>
                <Grid item xs={12} sx={{ mt:2 }}>
                    <TextField 
                    label="Contraseña" 
                    type="password" 
                    placeholder="Contraseña"
                    fullWidth
                    />
                </Grid>

                <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}> 
                  <Grid item xs={12} sm={ 6 }>
                    <Button variant='contained' fullWidth>
                      Login
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={ 6 }>
                    <Button variant='contained' fullWidth>
                      <Google/>
                        <Typography sx={{ml:1}}> Google </Typography>
                    </Button>
                  </Grid>
                </Grid>

                <Grid container direction='row' justifyContent='end'>
                  <Link component={ RouterLink } color='inherit' to="/auth/register">
                    Crear una cuenta
                  </Link>
                </Grid>
            </Grid>
          </form>
    </AuthLayout>

  )
}

// * quiero que el fondo tenga un color primario y tener una cajita para el form
// * style es como style extended nos permite trabajar con propiedades solo que con sx tenemos acceso al tema
//    que definimos con nuestro themeProvider
// 100vh = todo el tamaño que tengo disponible del view hight
// p = padding , pb = padding bottom y asi ..
// mb = margin bottom  <Button variant='contained'> apariencia del boton de login mt = margin top
//  <Button fullWidth> full se ajusta al tamaño total del padre ej: Grid item xs={12} pantallas peques 12 columnas
// si queremos tamaños mas grandes sm(no tan peques) md xl 
// <Link color='inherit' color heredado