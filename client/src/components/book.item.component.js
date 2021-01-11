import { Component } from "react";
import { Link } from "react-router-dom";

class Book extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>{this.props.book.book_isbn}</td>
        <td>{this.props.book.book_name}</td>
        <td>{this.props.book.book_author}</td>
        <td>{this.props.book.book_price}</td>
        <td>
          <Link to={"/edit/" + this.props.book._id}>Edit</Link>
        </td>
      </tr>
    );
  }
}

export default Book;
