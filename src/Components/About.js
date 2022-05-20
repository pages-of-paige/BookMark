import Footer from "./Footer";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>You can search for book titles and get linked directly to a webpage where it is available for sale.</p>
      <p>This app was created using <a href="https://developers.google.com/books/docs/overview">Google Books API.</a></p>
      <Footer />
    </div>
  );
}

export default About;