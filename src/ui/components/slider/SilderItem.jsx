export const SilderItem = ({ id, image }) => {
  return (
    <>
      <div className="slider-slide" id={id}>
        <div className="image">
          <img src={image} alt="image slide" />
        </div>
        <div className="scroll-buttons">
          <button className="btn btn-yelow" aria-label="ver ahora">
            <i className="icon-play" aria-hidden="true"></i> VER AHORA
          </button>
          <br />
          <button className="btn btn-black" aria-label="ver despues">
            <i className="icon-plus" aria-hidden="true"></i> VER DESPUÉS
          </button>
        </div>
      </div>
    </>
  );
};
