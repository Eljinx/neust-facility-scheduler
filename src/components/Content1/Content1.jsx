import './content1.css'; // Import your CSS file for styling
import { MdDoubleArrow } from "react-icons/md";

function Content1() {
  return (
    <section id="content1"> {/* Wrap the Content1 component in a section with id */}
      <div className="content1">
        <div className="text-container">
          <p>NEUST FACILITY SCHEDULER</p>
          <h1>BOOK YOUR FACILITY</h1>
        </div>

        <div className="about">
            <h1>ABOUT US</h1>
            <p>Welcome to NEUST Facility Scheduler: A booking system in Cabanatuan City. Our Campus has a wide
              selection of facilities that are available for public reservations. Whether you are a student,
              faculty member, or outside customer seeking an ideal location for your event, We got you covered.
            </p>

            <div className="button_container">
              <h1>OUR TEAM<MdDoubleArrow /></h1>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Content1;
