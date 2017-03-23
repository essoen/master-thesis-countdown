import React, { Component } from 'react';
import './App.css';

const endDate = new Date(2017, 5, 12, 23, 59, 59);
const absoluteEndDate = new Date(2017, 7, 1, 23, 59, 59);

const getTimeRemaining = (endDate) => {
  const t = Date.parse(endDate) - Date.parse(new Date());
  const seconds = Math.floor( (t/1000) % 60 );
  const minutes = Math.floor( (t/1000/60) % 60 );
  const hours = Math.floor( (t/(1000*60*60)) % 24 );
  const days = Math.floor( t/(1000*60*60*24) );
  return {
    days,
    hours,
    minutes,
    seconds
  };
}

const getDateAsString = date => {
    const {days, hours, minutes, seconds} = date;
    return `${days} ${days > 1 ? 'dager' : 'dag'} `
      + `${hours} ${hours > 1 ? 'timer' : 'time'} `
      + `${minutes} ${minutes > 1 ? 'minutter' : 'minutt'} `
      + `${seconds} ${seconds > 1 ? 'sekunder' : 'sekund'} `;
}


class App extends Component {

  state = {
    remainingTimeToDeliveryDate: null,
    remainigTimeToFinalDeadline: null
  };

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () => {
    let remainingTimeToDeliveryDate = getTimeRemaining(endDate);
    let remainigTimeToFinalDeadline = getTimeRemaining(absoluteEndDate);
    this.setState({remainingTimeToDeliveryDate, remainigTimeToFinalDeadline});
  }

  render() {
    if (!this.state.remainingTimeToDeliveryDate) return null;

    const remainingToDelivery = getDateAsString(this.state.remainingTimeToDeliveryDate);
    const remainingToFinalDeadline = getDateAsString(this.state.remainigTimeToFinalDeadline);


    return (
      <div className="react-count-down">
        <span className="date">
          {remainingToDelivery}
        </span>
        <p className="subtitle">til masteroppgaven <i>burde</i> leveres.</p>

        <p className="subsubtitle">
            ... men det er {remainingToFinalDeadline} til masteroppgaven <i>må</i> leveres.
        </p>
      </div>
    )
  };
}

export default App;
