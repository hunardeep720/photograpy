import React from "react";

function Contact() {
  return (
    <div className="max-w-[1240px] m-auto p-4">
      <h1 className="font-bold text-center text-2xl p-4">Let's work together</h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input className="border shadow-lg p-3" type="text" placeholder="Name" />
          <input className="border shadow-lg p-3" type="email" placeholder="Email" required />
        </div>
        <div>
          <input className="border shadow-lg p-3 w-full my-2" type="text" placeholder="Subject" />
          <textarea className="border shadow-lg p-3 w-full" placeholder="Message" rows="10"></textarea>
          <button className="border shadow-lg p-3 w-full">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
