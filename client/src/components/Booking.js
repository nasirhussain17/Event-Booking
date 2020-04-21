import React, { Component } from "react";

export class Booking extends Component {
  render() {
    return (
      <div className="container">
        <form className="form">
          <div class="form-group">
            <label for="exampleFormControlSelect1">Number of Tickets</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </form>
        Total Price : 0
        <button className="btn btn-primary ml-5">Proceed To Pay</button>
      </div>
    );
  }
}

export default Booking;
