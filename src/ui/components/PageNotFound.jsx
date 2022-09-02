import searchingImg from '../../assets/images/Searching.svg';

export const PageNotFound = ({ resut = '' }) => {
  return (
    <>
      <div className="page-notFound">
        <div className="wrapper">
          <div className="pnf-content">
            <div className="image">
              <img src={searchingImg} alt="" />
            </div>
            <p>No se encontraron resultados para "{resut}"</p>
          </div>
        </div>
      </div>
    </>
  );
};
