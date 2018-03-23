import * as React from 'react';
import { Entry } from 'contentful';

interface Course {
  title: string;
};

const Courses: React.SFC<{ courses: Entry<Course>[] }> = ({ courses }) => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.sys.id}>{course.fields.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
