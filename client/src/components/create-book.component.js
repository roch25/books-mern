import { Component } from "react";
import axios from "axios";

class CreateBook extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      book_isbn: 0,
      book_name: "",
      book_author: "",
      book_price: 0,
    };

    this.onChangeISBN = this.onChangeISBN.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeISBN(e) {
    this.setState({
      book_isbn: e.target.value,
    });
  }

  onChangeName(e) {
    this.setState({
      book_name: e.target.value,
    });
  }

  onChangeAuthor(e) {
    this.setState({
      book_author: e.target.value,
    });
  }

  onChangePrice(e) {
    this.setState({
      book_price: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`, this.state);

    const newBook = {
      book_isbnn: this.state.book_isbn,
      book_name: this.state.book_name,
      book_author: this.state.book_author,
      book_price: this.state.book_price,
    };

    const res = await axios.post("http://localhost:3001/books/add", newBook);
    console.log(res);

    this.setState({
      book_isbn: 0,
      book_name: "",
      book_author: "",
      book_price: 0,
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h5>Add New Book</h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>ISBN: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.isbn}
              onChange={this.onChangeISBN}
            />
          </div>
          <div className="form-group">
            <label>Book Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.book_name}
              onChange={this.onChangeName}
            />
          </div>

          <div className="form-group">
            <label>Book Author: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.book_author}
              onChange={this.onChangeAuthor}
            />
          </div>

          <div className="form-group">
            <label>Book Price: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.book_price}
              onChange={this.onChangePrice}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBook;
