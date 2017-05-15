var PLAYERS = [
  {
    id: 1,
    name: "Jim Hoskins",
    score: 32
  },
  {
    id: 2,
    name: "Andrew Chalkey",
    score: 59
  },
  {
    id: 3,
    name: "Simoin Disco",
    score: 32
  },
];

function Header(props) {
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

function Counter(props) {
  return(
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

Counter.PropTypes = {
  score: React.PropTypes.number.isRequired
}

function Player(props) {
  return(
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>

      <div className="player-score">
        <Counter score={props.score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

var Application = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired
    })).isRequired,
  },

  getDefaultProps: function() {
    return {
      title: 'Scoreboard',
    }
  },

  getInitialState: function() {
    return{
      players: this.props.initialPlayers,
    };
  },

  render: function() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} />

        <div className="players">
          {this.state.players.map(function(player) {
            return <Player name={player.name} score={player.score} key={player.id} />
          })}
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('container'));