import { useState } from "react";
import "./Form.css";

function Form() {
  const [searchTerm, setSearchTerm] = useState("");

  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => setBooks(data.items))
      .catch(() => console.log("fetch request failed"));
  };

  const returnedResults = books.map((result) => {
    return (
      <div key={result.volumeInfo.title}>
        <p className="bookResult">
          <h3>{result.volumeInfo.title}</h3>
          <h3>Author: {result.volumeInfo.authors[0]} </h3>
          <h4>Description: {result.volumeInfo.description}</h4>
          <a href={result.volumeInfo.infoLink}>Check It Out!</a>
        </p>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchBox"
          placeholder="Book Title"
          onChange={handleChange}
          value={searchTerm}
        ></input>
        <input type="submit" value="Search"></input>
      </form>
      {returnedResults}
    </div>
  );
}

export default Form;
