import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Comment(props) {


  return (
    <div className="comment">
      <div className="avatar-container">
        <img src={props.comment.avatar} className="avatar" alt="" />
        <h3>{props.comment.name}</h3>
      </div>
      <h5>{props.comment.title}</h5>
      <p>{props.comment.message}</p>
      <p className="data"> {props.comment.date}</p>
      <button onClick={() => props.onDelete(props.comment.id)}> Edit
        </button>
      <button onClick={() => props.onEdit(props.comment.id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}
