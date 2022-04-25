import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function Comment(props) {
  return (
    <div className="comment">
      <div className="avatar-container">
        <img src={props.comment.avatar} className="avatar" alt="" />
        <h3>{props.comment.userName}</h3>
      </div>
      <h5>{props.comment.commentTitle}</h5>
      <p>{props.comment.message}</p>
      <p className="data"> {props.comment.date}</p>
      <button onClick={() => props.onDelete(props.comment.id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
}
