import { useState, useEffect } from "react";
import notesAPI from "../api/notesAPI";
import SubjectsList from "../components/SubjectsList";

export default function HomePage() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const getSubjects = async () => {
      const data = await notesAPI.fetchSubjects();
      if (data) {
        setSubjects(data);
      }
    };

    getSubjects();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <SubjectsList subjects={subjects} />
      </nav>
    </div>
  );
}
