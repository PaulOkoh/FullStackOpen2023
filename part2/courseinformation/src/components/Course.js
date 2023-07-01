const Header = ({ name }) => <h2>{name}</h2>;

const Total = ({ parts }) => (
  <p><b> total of {parts.reduce((a, c) => a + c.exercises, 0)} exercises </b></p>
);

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

const Course = ({ courses }) => {
  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <div>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};
export default Course