import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({ // tiene un tema por defecto pero sobreescribimos con lo que queremos de apariencia
    palette:{
        primary:{
            main: '#262254'
        },
        secondary:{
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
})