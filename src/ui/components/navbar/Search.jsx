import { useLocation, useNavigate } from 'react-router-dom';
import { useForm, useMovie } from '../../../hooks';
import queryString from 'query-string';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchMovie } = useMovie();

  const { search } = location;

  const { q = '' } = queryString.parse(search);

  const { searchText, onInputChange } = useForm({
    searchText: q,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (searchText === '') return;

    searchMovie(searchText);
    navigate(`/search?q=${searchText}`);
  };

  return (
    <>
      <div className="search" aria-label="buscador">
        <form onSubmit={handleSubmit}>
          <div className="input-search">
            <input
              type="text"
              placeholder="Buscar tu pelicula favorita"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
            />
            <span onClick={handleSubmit}>
              <i className="icon-search" aria-hidden="true"></i>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
