const Weekdays = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

function Agenda(props){
  return (
    <div className="m-3 w-25 mx-auto">
      <h2>Agenda</h2>
      <ul className="list-group">
        {Weekdays.map((day) => 
        <li className="list-group-item px-2" key={day}>
            {props.jour === day ? <b>{day}</b> : day }
        </li>
        )}
      </ul>
    </div>
  )
}

export default Agenda;