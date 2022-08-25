import image1 from '../../../assets/images/mulan.jpg';
import image2 from '../../../assets/images/raya.jpg';
import image3 from '../../../assets/images/unidos.jpg';

export const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="wrapper">
          <div className="slider-content">
            <div className="slide-container">
              <div className="slider-slide" id="image-1">
                <div className="image">
                  <img src={image1} alt="image slide" />
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

              <div className="slider-slide" id="image-2">
                <div className="image">
                  <img src={image2} alt="image slide" />
                </div>
              </div>

              <div className="slider-slide" id="image-3">
                <div className="image">
                  <img src={image3} alt="image slide" />
                </div>
              </div>
            </div>

            <div className="silder-bullet-list">
              <a className="bullet bullet-selected" href="#image-1"></a>
              <a className="bullet" href="#image-2"></a>
              <a className="bullet" href="#image-3"></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
