import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

const Event = (props) => (
  <Fragment>
    <div className="row  mt-5">
      <div className="col">
        <h2>
          {props.event.title}
          <br />
        </h2>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h5>
          <p className="ml-2">Description:{props.event.description} </p>
        </h5>
      </div>
    </div>

    <h4>
      Ticket Price:Rs {props.event.price}
      {"   "}
      <Moment>{props.event.date}</Moment>
    </h4>
    <Link to={`/event/${props.event._id}`}>
      <button className="btn btn-primary">Book Ticket</button>
    </Link>
  </Fragment>
);

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = { events: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/event/")
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  eventList() {
    return this.state.events.map((currentevent) => {
      return <Event event={currentevent} key={currentevent._id} />;
    });
  }

  render() {
    return <div className="container">{this.eventList()}</div>;
  }
}
export default Events;
