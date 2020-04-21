import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      token: "",
    };
  }

  guestLinks = (
    <ul>
      <li>
        <Link to="/booked">Booked</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  render() {
    return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">Event Booking</Link>
        </h1>
        <Fragment>{this.guestLinks}</Fragment>
      </nav>
    );
  }
}

export default Navbar;

// const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
//   const authLinks = (
//     <ul>
//       <li>
//         <Link to="/profiles">Developers</Link>
//       </li>
//       <li>
//         <Link to="/posts">Posts</Link>
//       </li>
//       <li>
//         <Link to="/dashboard">
//           <i className="fas fa-user" />{" "}
//           <span className="hide-sm">Dashboard</span>
//         </Link>
//       </li>
//       <li>
//         <a onClick={logout} href="#!">
//           <i className="fas fa-sign-out-alt" />{" "}
//           <span className="hide-sm">Logout</span>
//         </a>
//       </li>
//     </ul>
//   );

//   const guestLinks = (
//     <ul>
//       <li>
//         <Link to="/profiles">Developers</Link>
//       </li>
//       <li>
//         <Link to="/register">Register</Link>
//       </li>
//       <li>
//         <Link to="/login">Login</Link>
//       </li>
//     </ul>
//   );

//   return (
//     <nav className="navbar bg-dark">
//       <h1>
//         <Link to="/">Event Booking</Link>
//       </h1>
//       {!loading && (
//         <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
//       )}
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Navbar);
