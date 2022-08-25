import { Route, Routes } from 'react-router-dom';
import { BlockMasterPage, LessRatedPage, TopRatedPage } from '../blockMaster';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<BlockMasterPage />} />
      <Route path="/top-rated" element={<TopRatedPage />} />
      <Route path="/less-rated" element={<LessRatedPage />} />
    </Routes>
  );
};
