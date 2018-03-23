import React from 'react';

const Courses = ({ courses }) => {  
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