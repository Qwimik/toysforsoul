import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
      <div>Gallery</div>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/gallery">Gallery</Link>
      </nav>
    </>
  );
};

export default Gallery;
