import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-white p-4 text-center ">
      Custom Event Calender - ©Lohith Marneni Copyright {new Date().getFullYear()}
    </div>
  );
}

export default Footer;