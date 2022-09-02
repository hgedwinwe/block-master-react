import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {
  BlockMasterPage,
  LessRatedPage,
  SearchPage,
  TopRatedPage,
} from '../blockMaster';
import { startLoadinCovers, startLoadinMovies } from '../store';
import { Navbar, Slider } from '../ui';

export const AppRouter = () => {
  const dispatch = useDispatch();
  dispatch(startLoadinMovies());
  dispatch(startLoadinCovers());

  return (
    <>
      <Navbar />
      <Slider />

      <Routes>
        <Route path="/" element={<BlockMasterPage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/less-rated" element={<LessRatedPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
};
