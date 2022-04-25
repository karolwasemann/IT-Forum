import { CommentsContext } from "../context/CommentsContext";
import { useContext, useEffect } from "react";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { v4 as uuid } from "uuid";

export default function Topic2() {
  const [comments, setComments] = useContext(CommentsContext);
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

  const commentsData = [
    {
      userName: "Maximilian",
      date: date,
      id: uuid(),
      commentTitle: "Hoisting",
      message:
        "Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (script or function). Be carefull that only declaration gets hoisted NOT the initialitations",
      type: "topic1",
      avatar:
        "https://gravatar.com/avatar/70fa624ea685bf5a3e50ccdbf813d43e?s=400&d=robohash&r=x",
    },
    {
      userName: "Xenia",
      date: date,
      id: uuid(),
      commentTitle: "Closures",
      message:
        "A closure gives you access to an outer functions scope from an inner function",
      type: "topic1",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Mike",
      date: date,
      id: uuid(),
      commentTitle: "Callbacks",
      message:
        "A callback function is a function passed into another function '\\n' as an argument, which is then invoked inside the outer function '\\n' to complete some kind of routine or action.",
      type: "topic1",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Julian",
      date: date,
      id: uuid(),
      commentTitle: "Promises",
      message:
        "A Promise is a JavaScript object '\\n' that links producing code and consuming code",
      type: "topic1",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Sandy",
      date: date,
      id: uuid(),
      commentTitle: "V6 Router",
      message:
        "And the React Router version 6, the latest release is finally here! It first launched in an alpha version in early 2021 and is now in a stable release. It has created a lot of buzz in the React community after its release",
      type: "topic2",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Killy",
      date: date,
      id: uuid(),
      commentTitle: "UseState",
      message:
        "The React useState Hook allows us to track state in a function component. State generally refers to data or properites that need to be tracking in an application.",
      type: "topic1",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Emilia",
      date: date,
      id: uuid(),
      commentTitle: "React Promise",
      message:
        "A Promise object is simply a wrapper around a value that may or may not be known when the object is instantiated and provides a method for handling the value after it is known (also known as resolved ) or is unavailable for a failure reason (we'll refer to this as rejected ).",
      type: "topic2",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Louis",
      date: date,
      id: uuid(),
      commentTitle: "redux",
      message:
        "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. ",
      type: "topic2",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Kenny",
      date: date,
      id: uuid(),
      commentTitle: "React reducer",
      message:
        "Reducer function. The reducer is a pure function that accepts 2 parameters: the current state and an action object. Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.",
      type: "topic2",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Sandy",
      date: date,
      id: uuid(),
      commentTitle: "the useState hook",
      message:
        "The useState hook allows us to use state in our functional components. A useState hook takes the initial value of our state as the only argument, and it returns an array of two elements. The first element is our state variable and the second element is a function in which we can use the update the value of the state variable",
      type: "topic2",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Luica",
      date: date,
      id: uuid(),
      commentTitle: "keyframes",
      message:
        "The @keyframes CSS at-rule controls the intermediate steps in a CSS animation sequence by defining styles for keyframes (or waypoints) along the animation sequence. This gives more control over the intermediate steps of the animation sequence than transitions.",
      type: "topic3",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Inga",
      date: date,
      id: uuid(),
      commentTitle: "flexbox",
      message:
        "CSS Flexible Box Layout, commonly known as Flexbox, is a CSS 3 web layout model. It is in the W3C's candidate recommendation stage. The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size.",
      type: "topic3",
    },
    {
      userName: "Killian",
      date: date,
      id: uuid(),
      commentTitle: "grid",
      message:
        "In Cascading Style Sheets, CSS grid layout or CSS grid creates complex responsive web design grid layouts more easily and consistently across browsers. Historically, there have been other methods for controlling web page layout methods, such as tables, floats, and more recently, CSS Flexible Box Layout.",
      type: "topic3",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
    {
      userName: "Tobi",
      date: date,
      id: uuid(),
      commentTitle: "grid",
      message: "",
      type: "topic3",
    },
    {
      userName: "Sally",
      date: date,
      id: uuid(),
      commentTitle:
        "What is the difference between Spread and Blur radius properties?",
      message:
        "The blur radius (optional) - if set to 0 the shadow will be sharp, the higher the number, the more blurred it will be. The spread radius (optional) - positive values increase the size of the shadow, negative values decrease the size. Default is 0 (the shadow is same size as blur).",
      type: "topic3",
      avatar:
        "https://gravatar.com/avatar/075015e2f99d4bec43d68b2ec520d7c7?s=400&d=robohash&r=x",
    },
  ];
  // API
  useEffect(() => {
    const getComments = async () => {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await resp.json();
      const users = data.slice(3, 6);
      const commentsApi = users.map((user) => {
        return {
          userName: user.username,
          commentTitle: user.company.name,
          message: `${user.company.catchPhrase} lorIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.em `,
          type: "topic2",
          id: uuid(),
          date: date,
          avatar:
            "https://gravatar.com/avatar/6666135aa1f3c4580d2c594c762d5d87?s=400&d=robohash&r=x",
        };
      });
      let topic2Comments = JSON.parse(localStorage.getItem("topic2")) || [];
      if (topic2Comments.length === 0) {
        topic2Comments.push(
          ...commentsData.filter((com) => com.type === "topic2")
        );
        topic2Comments.push(...commentsApi);
        localStorage.setItem("topic2", JSON.stringify(topic2Comments));
      }
    };
    getComments();
    const getStored = () => {
      const storedComments = JSON.parse(localStorage.getItem("topic2"));
      if (storedComments === null) return;
      setComments(storedComments);
    };
    getStored();
  }, []);

  const onDelete = (id) => {
    const _comments = JSON.parse(localStorage.getItem("topic2")).filter(
      (comment) => comment.id !== id
    );
    localStorage.setItem("topic2", JSON.stringify(_comments));
    setComments([..._comments]);
  };
  return (
    <div className="topic-container">
      <h2>Welcome at Topic React!!</h2>
      <div className="comments">
        {comments
          .filter((topicComment) => topicComment.type === "topic2")
          .map((comment) => {
            return (
              <Comment key={comment.id} comment={comment} onDelete={onDelete} />
            );
          })}
      </div>
      <AddComment type={"topic2"} />
    </div>
  );
}
