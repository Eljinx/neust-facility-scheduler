import React from 'react';
import './book.css';

function Book() {
  return (
    <section id="book"> {/* Wrap the Book component in a section with id */}
      <div className='book'>
        <h1>STEP BY STEP BOOKING GUIDE</h1>
        <div className="step-container">
          <div className="step-card">
            <h2>Step 1</h2>
            <p>Register, You can connect either your Facebook or Google.</p>
            <button>Register Now!</button>
          </div>
          <div className="step-card">
            <h2>Step 2</h2>
            <p>Verify your Account with a link sent to your contact number or email.</p>
          </div>
          <div className="step-card">
            <h2>Step 3</h2>
            <p>Login using your credentials.</p>
            <button>Login Now!</button>
          </div>
          <div className="step-card">
            <h2>Step 4</h2>
            <p>Choose the establishment you want to book, date and time, and payment method (if applicable).</p>
          </div>
          <div className="step-card">
            <h2>Step 5</h2>
            <p>Confirm your order and check the receipt sent to your email.</p>
          </div>
        </div>

        <div className="extra-large-card">
          <div className="extra-card">
            <h2>LOREM IPSUM</h2>
            <p>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Sed ac ipsum vel ipsum malesuada congue.
              Nulla facilisi. Integer nec urna vitae
              purus aliquam eleifend. Sed consequat,
              odio ac fermentum lacinia, metus ipsum
              lobortis eros, nec cursus sapien justo
              vitae tortor. Phasellus ut nulla vestibulum,
              luctus dui nec, faucibus mi. Sed tristique
              velit non turpis ultrices, ac accumsan ex
              vestibulum. Sed euismod erat at fermentum
              vehicula. Sed id justo pretium, ultrices
              nunc ut, fringilla lectus. Nunc at massa at mi
              malesuada elementum. Sed eget interdum velit.
              Maecenas vel velit hendrerit, convallis sem sit
              amet, pulvinar libero. Donec vitae sollicitudin nisl.
              Suspendisse vel justo quis arcu accumsan faucibus. Sed
              eget vestibulum lectus. Maecenas sit amet purus nec purus sollicitudin accumsan.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
