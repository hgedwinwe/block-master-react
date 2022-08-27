export const SilderItem = ({ id, image }) => {
  return (
    <>
      <div className="slider-slide" id={id}>
        <div className="image">
          <img src={image} alt="image slide" />
        </div>
        <div className="scroll-buttons">
          <button className="btn btn-yelow">
            <i className="icon-play"></i> VER AHORA
          </button>
          <br />
          <button className="btn btn-black">
            <i className="icon-plus"></i> VER DESPUÉS
          </button>
        </div>
      </div>
    </>
  );
};
