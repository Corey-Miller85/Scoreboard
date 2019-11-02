const players = [
	{
		name: "Corey",
    score: 50,
    id: 1
	},
	{
		name: "Bob",
    score: 65,
    id: 2
	},
	{
		name: "Laura",
    score: 85,
    id: 3
	},
	{
		name: "Mary",
    score: 44,
    id: 4
	},
	{
		name: "Trish",
    score: 90,
    id: 5
	},
	{
		name: "Jason",
    score: 23,
    id: 6
	}
];

const Header = props => {
	console.log(props);
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="stats">Players: {props.totalPlayers}</span>
		</header>
	);
};

const Player = props => {
	return (
		<div className="player">
			<span className="player-name">{props.name}</span>
			<Counter score={props.score} />
		</div>
	);
};

const Counter = props => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">{props.score}</span>
			<button className="counter-action increment"> + </button>
		</div>
	);
};

const App = props => {
	return (
		<div className="scoreboard">
			<Header title="Scoreboard" totalPlayers={props.intialPlayers.length} />

			{/* PLAYERS LIST */}
			{props.intialPlayers.map(player => (
				<Player 
        name={player.name} 
        score={player.score}
        key={player.id.toString()} 
        />
			))}
		</div>
	);
};

ReactDOM.render(
	<App intialPlayers={players} />,
	document.getElementById("root")
);
