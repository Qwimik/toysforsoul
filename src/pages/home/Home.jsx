import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/gallery">Gallery</Link>
      </nav>
      <div>
        <h1>Toys</h1>
      </div>
    </>
  );
};

export default Home;
