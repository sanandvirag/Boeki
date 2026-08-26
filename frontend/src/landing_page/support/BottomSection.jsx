import QuickLinks from "./QuickLinks";
import Announcements from "./Announcements";

function BottomSection() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <QuickLinks></QuickLinks>
          </div>
          <div className="col">
            <Announcements></Announcements>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomSection;