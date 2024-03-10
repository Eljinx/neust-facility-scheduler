import './faculties.css';
import LOBBY from '../../assets/images/lobby.jpg';
import MEETING from '../../assets/images/meeting.jpg';
import OFFICE from '../../assets/images/office.jpg';
import THEATRE from '../../assets/images/theatre.jpg';

function Faculties() {
  return (
    <section id="faculties"> {/* Wrap the Faculties component in a section with id */}
      <div className='faculties'>
        <h1 className='title'>FACULTIES & <span style={{ color: '#E75639' }}>ESTABLISHMENTS</span></h1>
        <ul className="faculty-list">
          <li className="faculty-item">
            <img src={LOBBY} alt="Faculty 1" />
            <div>
              <h2>THE LOBBY</h2>
              <button>Book Now</button>
            </div>
          </li>
          <li className="faculty-item">
            <img src={MEETING} alt="Faculty 2" />
            <div>
              <h2>MEETING ROOM</h2>
              <button>Book Now</button>
            </div>
          </li>
          <li className="faculty-item">
            <img src={OFFICE} alt="Faculty 3" />
            <div>
              <h2>OFFICE</h2>
              <button>Book Now</button>
            </div>
          </li>
          <li className="faculty-item">
            <img src={THEATRE} alt="Faculty 4" />
            <div>
              <h2>AMPHI THEATRE</h2>
              <button>Book Now</button>
            </div>
          </li>
          <li className="faculty-item">
            <img src={OFFICE} alt="Faculty 4" />
            <div>
              <h2>AMPHI THEATRE</h2>
              <button>Book Now</button>
            </div>
          </li>
          <li className="faculty-item">
            <img src={MEETING} alt="Faculty 4" />
            <div>
              <h2>AMPHI THEATRE</h2>
              <button>Book Now</button>
            </div>
          </li>
          <li className="faculty-item">
            <img src={LOBBY} alt="Faculty 4" />
            <div>
              <h2>AMPHI THEATRE</h2>
              <button>Book Now</button>
            </div>
          </li>
          <li className="faculty-item">
            <img src={THEATRE} alt="Faculty 4" />
            <div>
              <h2>AMPHI THEATRE</h2>
              <button>Book Now</button>
            </div>
          </li>
          {/* Add more faculty entries as needed */}
        </ul>
      </div>
    </section>
  );
}

export default Faculties;
