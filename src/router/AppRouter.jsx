import { Route, Routes } from 'react-router-dom';
import { BlockMasterPage, LessRatedPage, TopRatedPage } from '../blockMaster';
import { Navbar, Slider } from '../ui';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Slider />

      <Routes>
        <Route path="/" element={<BlockMasterPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/less-rated" element={<LessRatedPage />} />
      </Routes>
    </>
  );
};
