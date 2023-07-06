// import Person from "./components/Person";
// const Persons = ({ persons, filterFor }) => {
//   return (
//     <div>
//       {persons
//         .filter((person) => person.name.toLowerCase().includes(filterFor))
//         .map((person) => (
//           <Person key={person.name} person={person} />
//         ))}
//     </div>
//   );
// };

// export default Persons;
import Person from "./components/Person"

const Persons = ({ persons, filterFor }) => {
  return (
    <div>
      {persons
        .filter((person) => person.name.toLowerCase().includes(filterFor))
        .map((person) => (
          <Person key={person.name} person={person} />
        ))}
    </div>
  );
};

export default Persons
