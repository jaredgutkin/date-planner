import {useState} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function CalendarComponent() {

    const [dateState, setDateState] = useState(new Date())

    const changeDate = (e) => {
        setDateState(e)
    }
  return (
    <>
    <div className="container-fluid">
      <div className="favorite-header">
        <h2>Calendar</h2>
      </div>
    </div>
    <div className="calendar-main">
      <div className="card">
        <div className="calendar-card-body">
          <>
          <Calendar
          value={dateState}
          onChange={changeDate}
          className="calendar-body"
          />
          </>
        </div>
      </div>
    </div>
    </>
  )
}

