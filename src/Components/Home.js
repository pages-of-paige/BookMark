import Footer from "./Footer";
import Form from "./Form/Form"

export default function Home() {
  return (
    <div>
      <div>
        <img src="https://i.imgur.com/KITvw8s.jpg" />
        <h1 className="appName">BookMark</h1>
       </div>
     <Form />
     <Footer />
    </div>
  );
}
