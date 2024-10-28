import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputevents = (event) => {
    const { name, value } = event.target;
    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}. My message is ${data.msg}`)
  };

  return (
    <>
      <div className="my-3">
        <h1 className="text-center" style={{ color: "green" }}>
          Contact Us
        </h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputevents}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={inputevents}
                  placeholder="Phone number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputevents}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputevents}
                ></textarea>
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-outline-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
