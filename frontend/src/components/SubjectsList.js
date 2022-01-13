import { Link } from "react-router-dom";

export default function SubjectsList(props) {
  const renderSubjects = () => {
    if (!props.subjects) {
      return null;
    }

    return props.subjects.map((subject, index) => {
      return (
        <li key={index}>
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/subjects/${subject.id}`}
          >
            {subject.title}
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{renderSubjects()}</ul>
    </div>
  );
}
