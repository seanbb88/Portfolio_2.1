import React, { Component } from "react";
import "./Contact.css";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: ''
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    let value = e.target.value;
    const email = e.target.email;

    this.setState({
      [email]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();


  }

  render() {
    return (

      <div className="contact-div">
        <div className="form-div">
          <form
            className="contact-form"
            id="contact-form"
            onSubmit={this.handleSubmit}
            method="POST">
            <h4 className="contact-header">Go ahead...<br></br>Send a message!</h4>
            <div className="email-div">
              <label className="contact-form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="message-div">
              <label className="contact-form-label">Message</label>
              <textarea className="form-control" rows="5" id="message" />
            </div>
            <button className="submit-btn" type="submit">Submit</button>

          </form>
        </div>

      </div>
      // <div className="container-fluid contact-form">
      //   <div className="row">
      //     <div className="col-md col-centered">
      //       <form
      //         className="contact-form-form"
      //         id="contact-form"
      //         onSubmit={this.handleSubmit.bind(this)}
      //         method="POST"
      //       >
      //         <h4 className="contact-h4 text-center">Send a message to the fUsebx team</h4>
      //         <br />

      //         <div className="form-group">
      //           <label className="contact-form-label" for="exampleInputEmail1">Email address</label>
      //           <input
      //             type="email"
      //             className="form-control"
      //             id="email"
      //             aria-describedby="emailHelp"
      //           />
      //         </div>
      //         <div className="form-group">
      //           <label className="contact-form-label" for="message">Message</label>
      //           <textarea className="form-control" rows="5" id="message" />
      //         </div>
      //         <button type="submit" > </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Contact;