import React from 'react';

class ToggleGamesPlayed extends React.Component {
  checked = () => {
    return this.props.showGamesPlayed
      ? 'checked'
      : '';
  };

  label = () => {
    return this.props.showGamesPlayed
      ? 'Showing the Number of Games Played'
      : 'Hiding the Number of Games Played';
  };

  onChange = (event) => {
    this.props.toggleGamesPlayedHandler(event.target.checked);
  };

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            defaultChecked={this.props.showGamesPlayed}
            onChange={this.onChange}
          /> {this.label()}
        </label>
      </div>
    );
  };
};

export default ToggleGamesPlayed;