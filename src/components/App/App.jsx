import { Route, Routes } from 'react-router-dom';

import Gallery from 'pages/gallery/Gallery';
import Home from 'pages/home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
