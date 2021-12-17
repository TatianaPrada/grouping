import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import subDays from "date-fns/subDays";

const EventDetail = (props) => {
  
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.event.start.toLocaleDateString()} -{" "}
            {subDays(props.event.end, 1).toLocaleDateString()}
          </Typography>
          <Typography variant="h5" component="div">
            {props.event.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.event.extendedProps.user}
          </Typography>
          <Typography variant="body2">
            {props.event.extendedProps.summary}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup
            size="large"
            variant="text"
            aria-label="large button group"
          >
            <Button onClick={props.deleteClick}>Delete</Button>
            <Button onClick={props.approveClick}>Approve</Button>
            <Button onClick={props.denyClick}>Denied</Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </div>
  );
};

export default EventDetail;