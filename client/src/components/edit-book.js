import axios from "axios";
import React from "react";

class EditBook extends React.Component {
  state = {
    book_isbn: "",
    book_name: "",
    book_author: "",
    book_price: 0,
  };
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  async componentDidMount() {
    const res = await axios.get(
      "http://localhost:3001/books/" + this.props.match.params.id
    );

    console.log(res.data);
    this.setState({
      book_isbn: res.data.book_isbn,
      book_name: res.data.book_name,
      book_author: res.data.book_author,
      book_price: res.data.book_price,
    });
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
      book_isbn: this.state.book_isbn,
      book_name: this.state.book_name,
      book_author: this.state.book_author,
      book_price: this.state.book_price,
    };

    const res = await axios.post(
      `http://localhost:3001/books/update/${this.props.match.params.id}`,
      newBook
    );
    console.log(res);

    this.props.history.push("/");
  }
  render() {
    return (
      <>
        <h3 align="center">Update Book</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>ISBN: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.book_isbn}
              onChange={this.onChangeISBN.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.book_name}
              onChange={this.onChangeName.bind(this)}
            />
          </div>
          <div className="form-group">
            <label>Book Author: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.book_author}
              onChange={this.onChangeAuthor.bind(this)}
            />
          </div>

          <div className="form-group">
            <label>Book Price: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.book_price}
              onChange={this.onChangePrice.bind(this)}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update Book"
              className="btn btn-primary"
            />
          </div>
        </form>
      </>
    );
  }
}

export default EditBook;
