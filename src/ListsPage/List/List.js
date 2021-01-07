import './List.css';

function List(props) {
  return (
    <li className="list">
      <div className="list-details">
        <h3 className="list-title">{props.list.title}</h3>
        <p className="list-creator">{props.listUser.user_name}</p>
        <p className="list-type">{props.list.type}</p>
      </div>
      <div className="list-buttons">
        <button type="button">View</button>
        <button type="button">Start Game</button>
      </div>
    </li>
  )
}

export default List;