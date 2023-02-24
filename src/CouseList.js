import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import EnquireModal from './EnquireModal';

export default function CouseList() {
  const [items, setitems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3010/courses')
      .then(response => response.json())
      .then(json => setitems(json))
  }, 
[]
);
  return (
    items.map(item => {
       return (
            <Card key={item.id} sx={{ maxWidth: 345, float:'left', margin:'20px' }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {item.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <EnquireModal cid={item.id} cname={item.title}></EnquireModal>
      </CardActions>
    </Card>
        )
        
     })
    
  );
}