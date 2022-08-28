import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <FontAwesomeIcon
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        icon={faCheck}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <FontAwesomeIcon
        className='Icon Icon-delete'
        onClick={props.onDelete}
        icon={faXmark}
      />
    </li>
  );
}
export { TodoItem };
