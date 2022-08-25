import { Route, Routes } from 'react-router-dom';
import { BlockMasterPage, LessRatedPage, TopRatedPage } from '../blockMaster';
import { Navbar } from '../ui/components/Navbar';

export const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<BlockMasterPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/less-rated" element={<LessRatedPage />} />
      </Routes>
    </>
  );
};
