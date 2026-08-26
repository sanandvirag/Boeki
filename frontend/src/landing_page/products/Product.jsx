function Product({ img_link, product, descrption, linkNum, links }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img src={img_link} alt={product} />
        </div>
        <div className="col">
          <h3>{product}</h3>
          <p>{descrption}</p>
          {linkNum == 2 ? (
            <p>
              <a href="">{links[0]}</a>{" "}
              <a href="" className="ms-5">{links[1]}</a>
            </p>
          ) : (
            <p><a href="">{links[0]}</a></p>
          )}
          <a href="">
            <img
              style={{ width: "22%", height: "2.5rem", marginRight: "2rem", marginTop: "2rem" }}
              src="/appstoreBadge.svg"
              alt="App Store"
            />
          </a>
          <a href="">
            <img
              style={{ width: "22%", height: "2.5rem", marginRight: "2rem", marginTop: "2rem" }}
              src="/googlePlayBadge.svg"
              alt="Google Play"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;