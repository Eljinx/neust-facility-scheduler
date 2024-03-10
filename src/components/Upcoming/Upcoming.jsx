import './upcoming.css';

function Upcoming() {
  return (
    <section id="upcoming"> {/* Wrap the Upcoming component in a section with id */}
      <div className='upcoming'>
          <h1 className='upcoming-h1'>UPCOMING EVENTS</h1>
          <div className="events-list">
            <div className="event">
                <h1>Jan 15</h1>
                <p>8:42 am</p>
                <p>@Gymnasium</p>
            </div>
            <div className="event">
                <h1>Feb 5</h1>
                <p>10:30 am</p>
                <p>@University Pool</p>
            </div>
            <div className="event">
                <h1>Mar 10</h1>
                <p>5:00 pm</p>
                <p>@Guest Lobby</p>
            </div>
            <div className="event">
                <h1>Apr 22</h1>
                <p>8:00 pm</p>
                <p>@Courtyard</p>
            </div>
          </div>
          <button className="view-full-schedule-btn">View Full Schedule</button>
      </div>
    </section>
  );
}

export default Upcoming;
