import React, { useState } from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import "./TimeOffForm.css"
import { Button, Grid, MenuItem, Select, TextField } from "@mui/material";
import { createTimeOff } from "../../services/timeOff";

const TimeOffForm = () => {
  const [dates, setDates] = useState([null, null]);
  const [summary, setSummary] = useState("");
  const [type, setType] = useState("Holidays");

  function isValidForm() {
    return dates && dates[0] && dates[1] ? true : false;
  }

  function onSubmit() {
    if (isValidForm()) {
      const timeOff = {
        startDate: dates[0],
        endDate: dates[1],
        summary: summary,
        type: type,
      };
      createTimeOff(timeOff);
    }
  }

  return (
    <div className="TimeOffForm">
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <DatePicker
            dates={dates}
            setDates={setDates}
            startText="Start"
            endText="End"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            item
            name="summary"
            id="summary"
            label="summary"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            multiline
            rows={4}
            placeholder="Write your comment"
          />
        </Grid>

        <Grid item xs={12}>
          <Select
            item
            id="time-off"
            value={type}
            label="Type"
            onChange={(event) => setType(event.target.value)}
          >
            <MenuItem value="Holidays">Holidays</MenuItem>
            <MenuItem value="Illness">Illness</MenuItem>
            <MenuItem value="Maternity / Paternity">
              Maternity / Paternity
            </MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            className="button_submit"
            type="submit"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TimeOffForm;
