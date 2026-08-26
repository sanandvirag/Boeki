import './Team.css'
function Team() {
  return ( 
    <div className="container">
      <div className="row">
        <h4 className='mb-5 text-center'>People</h4>
        <div className="col text-center">
          <img src="/virag.jpeg" alt="" className='pfp-founder mb-3'/>
          <p>Virag Sanand</p>
          <p>Boeki Developer</p>
        </div>
        <div className="col">
          <p>I’m a developer passionate about building modern web applications and exploring the technology behind them. I enjoy turning ideas into practical products, with a focus on clean interfaces, intuitive user experiences, and well-structured code.</p>
          <br />
          <p>I believe the best way to learn is by building, breaking things, and figuring out how to make them better.</p>
          <br />
          <p>Connect with me on <a href="https://github.com/sanandvirag">GitHub</a> / <a href="https://www.linkedin.com/in/virag-sanand-a4ab78336/">LinkedIn</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;