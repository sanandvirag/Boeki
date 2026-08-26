import './SupportPortal.css'

function SupportPortal() {
  return (
    <div className="container-fluid support-portal p-5">
      <div className='btn-heading'>
        <span className='heading'>Support Portal</span>
        <button className='btn btn-success'>My ticket</button>
      </div>
      <form class="d-flex" role="search">
        <input class="form-control search-bar" type="search" placeholder="Eg: How do I open my account, How do I activate F&O, How do I reset my password..." aria-label="Search"/>
      </form>
    </div>
  );
}

export default SupportPortal;