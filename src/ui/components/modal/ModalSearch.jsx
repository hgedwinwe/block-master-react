import { useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../blockMaster';
import { useMovie, useUiStore } from '../../../hooks';
import { Search } from '../navbar/Search';

export const ModalSearch = () => {
  const { searchModalOpen, closeModalSearch } = useUiStore();
  const { clearMovie } = useMovie();
  const navigate = useNavigate();

  const closeSearch = () => {
    closeModalSearch();
    clearMovie();
    navigate('/');
  };

  return (
    <>
      {/* <div className="modalSearch"> */}
      <div className={`modalSearch ${!searchModalOpen ? 'show-modal' : ''}`}>
        <div className="wrapper">
          <div className="modalSearch-content">
            <div className="ms-header">
              <span onClick={closeSearch} className="btn-back">
                <i className="icon-back"></i>
              </span>
              <div className="search-content">
                <Search />
              </div>
            </div>
            <div className="ms-body">
              <SearchPage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
