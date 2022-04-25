import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Board = () => {
  const topic1Comments = JSON.parse(localStorage.getItem("topic1"));
  const topic2Comments = JSON.parse(localStorage.getItem("topic2"));
  const topic3Comments = JSON.parse(localStorage.getItem("topic3"));
  return (
    <>
      <main>
        <h3>Welcome at IT-Blog</h3>
        <table cellPadding="20" border="0">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <FontAwesomeIcon icon={faComments} /> JavaScript: Coding{" "}
              </td>
              <td> {topic1Comments ? topic1Comments.length : null} comments</td>

              <td className="td-avatar">
                <img
                  className="avatar-small"
                  src={
                    topic1Comments
                      ? topic1Comments[topic1Comments.length - 1].avatar
                      : null
                  }
                  alt=""
                />
              </td>
              <td>
                <strong>
                  {topic1Comments
                    ? topic1Comments[topic1Comments.length - 1].userName
                    : null}
                </strong>{" "}
                {topic1Comments
                  ? topic1Comments[topic1Comments.length - 1].date
                  : null}{" "}
                <br />
                <i>
                  {topic1Comments
                    ? topic1Comments[topic1Comments.length - 1].message
                        .split("")
                        .slice(0, 50)
                        .join("")
                    : null}
                  ...
                </i>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <FontAwesomeIcon icon={faComments} /> React: News und Tricks{" "}
              </td>
              <td> {topic2Comments ? topic2Comments.length : null} comments</td>
              <td className="td-avatar">
                <img
                  className="avatar-small"
                  src={
                    topic2Comments
                      ? topic2Comments[topic2Comments.length - 1].avatar
                      : null
                  }
                  alt=""
                />
              </td>

              <td>
                {" "}
                <strong>
                  {topic2Comments
                    ? topic2Comments[topic2Comments.length - 1].userName
                    : null}{" "}
                </strong>
                {topic2Comments
                  ? topic2Comments[topic2Comments.length - 1].date
                  : null}{" "}
                <br />
                <i>
                  {topic2Comments
                    ? topic2Comments[topic2Comments.length - 1].message
                        .split("")
                        .slice(0, 50)
                        .join("")
                    : null}{" "}
                  ...
                </i>
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faComments} /> CSS: Solides Styling{" "}
              </td>
              <td>
                {" "}
                {topic3Comments ? topic3Comments.length : null} commentes{" "}
              </td>
              <td className="td-avatar">
                <img
                  className="avatar-small"
                  src={
                    topic3Comments
                      ? topic3Comments[topic3Comments.length - 1].avatar
                      : null
                  }
                  alt=""
                />
              </td>
              <td>
                {" "}
                <strong>
                  {" "}
                  {topic3Comments
                    ? topic3Comments[topic3Comments.length - 1].userName
                    : null}
                </strong>{" "}
                {topic3Comments
                  ? topic3Comments[topic3Comments.length - 1].date
                  : null}{" "}
                <br />
                <i>
                  {topic3Comments
                    ? topic3Comments[topic3Comments.length - 1].message
                        .split("")
                        .slice(0, 50)
                        .join("")
                    : null}
                  ...{" "}
                </i>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>

        {/* <div className="parent">
          <div className="div1">
            <FontAwesomeIcon icon={faComments} /> JavaScript: Coding{" "}
          </div>
          <div className="div2">
            {topic1Comments ? topic1Comments.length : null} comments
          </div>
          <div className="div3">
            <p>
              <strong>
                {topic1Comments
                  ? topic1Comments[topic1Comments.length - 1].userName
                  : null}
                <strong />
              </strong>{" "}
              {topic1Comments
                ? topic1Comments[topic1Comments.length - 1].date
                : null}{" "}
            </p>
            <i>
              {topic1Comments
                ? topic1Comments[topic1Comments.length - 1].message
                    .split("")
                    .slice(0, 50)
                    .join("")
                : null}
              ...
            </i>
          </div>
          <div className="div4">
            <FontAwesomeIcon icon={faComments} /> React: News und Tricks{" "}
          </div>
          <div className="div5">
            {topic2Comments ? topic2Comments.length : null} comments
          </div>
          <div className="div6">
            <p>
              <strong>
                {topic2Comments
                  ? topic2Comments[topic2Comments.length - 1].userName
                  : null}{" "}
              </strong>
              {topic2Comments
                ? topic2Comments[topic2Comments.length - 1].date
                : null}{" "}
            </p>
            <i>
              {topic2Comments
                ? topic2Comments[topic2Comments.length - 1].message
                    .split("")
                    .slice(0, 50)
                    .join("")
                : null}{" "}
              ...
            </i>
          </div>
          <div className="div7">
            <FontAwesomeIcon icon={faComments} /> CSS: Solides Styling{" "}
          </div>
          <div className="div8">
            {topic3Comments ? topic3Comments.length : null} commentes{" "}
          </div>
          <div className="div9">
            <p>
              <strong>
                {" "}
                {topic3Comments
                  ? topic3Comments[topic3Comments.length - 1].userName
                  : null}
              </strong>{" "}
              {topic3Comments
                ? topic3Comments[topic3Comments.length - 1].date
                : null}{" "}
            </p>
            <p>
              {topic3Comments
                ? topic3Comments[topic3Comments.length - 1].message
                    .split("")
                    .slice(0, 50)
                    .join("")
                : null}
              ...
            </p>{" "}
          </div>
        </div> */}
      </main>
      <nav>
        <ul>
          <NavLink to="/t1">
            <li>JavaScript</li>
          </NavLink>
          <NavLink to="/t2">
            <li>React</li>
          </NavLink>
          <NavLink to="/t3">
            <li>CSS</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Board;
