export default function Slide({photo,active,title,text}) {
  return (
    <>
      <div className={`carousel-item  sliderImg ${active}`} >
        <img src={photo} className="d-block w-100 sliderImg" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>{title}</h5>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
