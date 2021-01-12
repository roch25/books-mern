import { Component } from "react";
import Book from "./book.item.component";
import axios from "axios";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:3001/books");
    this.setState({ books: res.data });
    console.log(res);
  }

  render() {
    return (
      <>
        <h3 style={{ marginTop: 10 }}>Book List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Name</th>
              <th>Author(s)</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book, i) => (
              <Book book={book} key={i} />
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default BookList;
