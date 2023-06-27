import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const handleRandomQuote = () => {
    const updatedIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(updatedIndex);
  };

  const handleVoteClick = () => {
    const copyVote = [...votes];
    copyVote[selected]++;
    setVotes(copyVote);
  };

  const maxVote = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>
        {anecdotes[selected]}
        <br />
        has {votes[selected]} votes
      </p>
      <Button handleClick={handleVoteClick} text="Vote" />
      <Button handleClick={handleRandomQuote} text="Next Anecdote" />
      <h2>Anecdote with most Votes</h2>
      <p>
        {anecdotes[maxVote]}
        <br />
        has {votes[maxVote]} votes
      </p>
    </div>
  );
};

export default App;
