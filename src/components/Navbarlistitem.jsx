import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';


const Navbarlistitem = ({open, icon, label, onClick}) => {
    
  return (


    <div>
        <List onClick={onClick}>
          
          <ListItem disablePadding sx={{ display: 'block' }} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
      
      </List>
    </div>
  )
}

export default Navbarlistitem