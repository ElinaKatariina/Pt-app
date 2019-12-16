import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
 
function TrCalendar() {

const localizer = momentLocalizer(moment) 
var event = [];

const[training, setTraining] = useState([]);

useEffect( () => {
    fetchTrainings()
}, [])

function fetchTrainings() { 
    fetch("https://customerrest.herokuapp.com/gettrainings")
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData)
        let content = responseData.map(training => {
            var date = training.date
            return {...training, date: date}
        })
        return setTraining(content)
    })
}

    event = training.map(training => { 
                                        
        var title = training.activity
        var startTime = moment.utc(training.date)._d
        var endTime = moment.utc(training.date).add(training.duration, "minutes")._d
        return {title: title, start: startTime, end: endTime}
    })

console.log(event)
return (
    <div>
      <Calendar
        style = {{ height: 800, padding: 80 }}
        localizer={localizer}
        events= {event}
        startAccessor="start"
        endAccessor="end"
     />
    </div>
)
}

export default TrCalendar;
