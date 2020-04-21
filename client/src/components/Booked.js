import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";

const Book = (props) => (
  <Fragment>
    <div className="row  mt-5">
      <div className="col">
        BookingId: {props.book._id}
        <h2>
          Date Booked:<Moment>{props.book.createdAt}</Moment>
          <br />
        </h2>
      </div>
    </div>
  </Fragment>
);

class Booked extends Component {
  constructor(props) {
    super(props);

    this.state = { booked: [], user: "" };
    this.user = this.user.bind(this);
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

  bookList() {
    return this.state.booked.map((currentbook) => {
      return (
        <Book
          book={currentbook}
          key={currentbook._id}
          user={this.user(currentbook.user)}
        />
      );
    });
  }

  render() {
    return <div className="container">{this.bookList()}</div>;
  }
}
export default Booked;
