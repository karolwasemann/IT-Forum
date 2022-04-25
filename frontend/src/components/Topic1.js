import { CommentsContext } from "../context/CommentsContext";
import { useContext, useEffect } from "react";
import AddComment from "./AddComment";
import axios from "axios";
import Comment from "./Comment";
import { v4 as uuid } from "uuid";
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
  }, [CommentsContext]);

  // API
  // useEffect(() => {
  //   const getComments = async () => {
  //     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await resp.json();
  //     const users = data.slice(0, 3);
  //     const commentsApi = users.map((user) => {
  //       return {
  //         userName: user.username,
  //         commentTitle: user.company.name,
  //         message: `${user.company.catchPhrase} lorIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.em `,
  //         type: "topic1",
  //         id: uuid(),
  //         date: date,
  //         avatar:
  //           "https://gravatar.com/avatar/8501bfd17440f2032140bced0e9f661e?s=400&d=robohash&r=x",
  //       };
  //     });

  //LocalStorage
  //   let topic1Comments = JSON.parse(localStorage.getItem("topic1")) || [];
  //   if (topic1Comments.length === 0) {
  //     topic1Comments.push(
  //       ...commentsData.filter((com) => com.type === "topic1")
  //     );
  //     topic1Comments.push(...commentsApi);
  //     localStorage.setItem("topic1", JSON.stringify(topic1Comments));
  //   }
  // };
  // getComments();

  //   const getStored = () => {
  //     const storedComments = JSON.parse(localStorage.getItem("topic1"));
  //     if (storedComments === null) return;
  //     setComments(storedComments);
  //   };
  //   getStored();
  // }, []);

  const onDelete = async (id) => {
    console.log(id);
    const res = await axios.delete("http://localhost:4000", {
      data: { id: id },
    });
  };

  const onEdit = async (e) => {
    // console.log(id);
    console.log(e);
    // const res = await axios.put("http://localhost:4000", {
    //   data: { id: id },
    // });
  };

  return (
    <div className="topic-container">
      <h2>Welcome at JavaScript!!</h2>
      <div className="comments">
        {comments
          .filter((topicComment) => topicComment.type === "topic1")
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
      <AddComment type={"topic1"} />
    </div>
  );
}
