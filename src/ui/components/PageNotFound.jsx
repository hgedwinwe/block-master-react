import searchingImg from './../../../public/searching.svg';

export const PageNotFound = ({ resut = '' }) => {
  return (
    <>
      <div className="page-notFound" aria-label="page not found">
        <div className="wrapper">
          <div className="pnf-content">
            <div className="image">
              <img
                src="https://raw.githubusercontent.com/edgon85/block-master/0d01866aaaedd6d6879925a4553ff66397de7288/docs/searching.svg"
                alt="no image"
              />
            </div>
            <p>No se encontraron resultados para "{resut}"</p>
          </div>
        </div>
      </div>
    </>
  );
};
