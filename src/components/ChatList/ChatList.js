import { List, ListItem } from "@mui/material";
import ListItemText from '@mui/material/ListItemText';


export function ChatList({  chatList }) {
  return (
    <List sx={{ width: '100%', maxWidth: 100, position: "fixed", top:150, left: 10, m: 1 }}>
      {chatList.map(({ name, id }) => (
        <ListItem key={id} button> <ListItemText primary={name} /> </ListItem>
      ))}
    </List>
  );
}