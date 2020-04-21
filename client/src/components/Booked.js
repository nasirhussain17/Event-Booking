import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

const Book = (props) => (
  <Fragment>
    <div className="row  mt-5">
      <div className="col">
        <h3>Event Name:{props.event.title}</h3>
        <h4>Booked by:{props.user.name}</h4>
        BookingId: {props.book._id}
        <h4>
          Date Booked:<Moment>{props.book.createdAt}</Moment>
          <br />
        </h4>
      </div>
    </div>
  </Fragment>
);

class Booked extends Component {
  constructor(props) {
    super(props);

    this.state = { booked: [], user: "", event: "" };
    this.user = this.user.bind(this);
    this.event = this.event.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/booking")
      .then((response) => {
        this.setState({ booked: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  user(id) {
    axios.get(`http://localhost:5000/api/auth/${id}`).then((res) => {
      this.setState({ user: res.data });
    });
  }
  event(id) {
    axios.get(`http://localhost:5000/event/${id}`).then((res) => {
      this.setState({ event: res.data });
    });
  }

  bookList() {
    return this.state.booked.map((currentbook) => {
      this.user(currentbook.user);
      this.event(currentbook.event);
      return (
        <Book
          book={currentbook}
          key={currentbook._id}
          user={this.state.user}
          event={this.state.event}
        />
      );
    });
  }

  render() {
    return <div className="container">{this.bookList()}</div>;
  }
}
export default Booked;
