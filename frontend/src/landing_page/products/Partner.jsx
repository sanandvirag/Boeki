import './Partner.css'

function Partner({img_link , description}) {
  return (
    <div className='container mb-5'>
      <img src={img_link} alt="" className='partner-img mb-3'/>
      <p className='small-text ms-5 me-5'>{description}</p>
    </div>
  );
}

export default Partner;