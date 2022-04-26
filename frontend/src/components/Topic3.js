import { CommentsContext } from "../context/CommentsContext";
import { useContext, useEffect } from "react";
import AddComment from "./AddComment";
import axios from "axios";
import Comment from "./Comment";
export default function Topic1() {
  const [comments, setComments] = useContext(CommentsContext);
  //Date format
  const current = new Date();
  const date = `${(current.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${current
    .getDate()
    .toString()
    .padStart(2, "0")}/${current
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${current
    .getHours()
    .toString()
    .padStart(2, "0")}:${current
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${current.getSeconds().toString().padStart(2, "0")}`;

  // Data comments

  useEffect(() => {
    const getCommentsApi = async () => {
      const resp = await axios.get("http://localhost:4000");
      console.log(resp.data);

      setComments(resp.data);
    };
    getCommentsApi();
  }, []);

  const onDelete = async (id) => {
    const res = await axios.delete("http://localhost:4000", {
      data: { id: id },
    });
  };

  const onEdit = async (id) => {
    const res = await axios.put("http://localhost:4000", {
      data: { id: id },
    });
  };

  return (
    <div className="topic-container">
      <h2>Welcome at JavaScript!!</h2>
      <div className="comments">
        {comments
          .filter((topicComment) => topicComment.type === "topic3")
          .map((comment) => {
            return (
              <Comment
                key={comment.id}
                comment={comment}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })}
      </div>
      <AddComment type={"topic3"} />
    </div>
  );
}
