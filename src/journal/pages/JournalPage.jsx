// import { MailOutline } from "@mui/icons-material"

import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography> Magna ea esse elit eu voluptate. Pariatur irure ad do laboris pariatur irure ex adipisicing et non veniam magna dolor excepteur. 
        Ea culpa commodo et reprehenderit in anim do velit do pariatur magna irure non sit officia eiusmod. Laborum proident enim ad deserunt et cillum 
        culpa aliqua aliqua proident labore aliqua eiusmod quis. Sint qui excepteur proident excepteur.
      </Typography> */}

      <NothingSelectedView/>
      {/* <NoteView/> */}
      
      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover':{ backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}


// ejemplo icono de email : <MailOutline/>
// abrir lorem ipsum: ctrl + shift + p
// <NothingSelectedView/> cuando no hay una nota seleccionada voy a mostrar este componente
// hover significa cuando el mouse este encima 