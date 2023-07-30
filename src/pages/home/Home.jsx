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
    </>
  );
};

export default Home;
