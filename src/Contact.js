import React from 'react';
import swal from 'sweetalert2';
import './Styles/Contact.css';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:"",
      email:"",
      message:""
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }

  componentDidMount(){
    this.emailjs = window.emailjs;
  }
  handleName(e){
    this.setState({ name: e.target.value});
  }
  handleEmail(e){
    this.setState({ email: e.target.value});
  }
  handleMessage(e){
    this.setState({ message: e.target.value});
  }
  sendEmail(e){
    e.preventDefault();
    document.getElementById('contactForm').reset();
    var service_id = 'gmail';
    var template_id = 'website_email';
    var template_params = {
    name: this.state.name,
    email: this.state.email,
    message: this.state.message
    };
    this.emailjs.send(service_id,template_id,template_params)
    .then(function(response) {
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
      console.log("FAILED. error=", err);
    });
    swal({
      title: 'SENT',
      text: 'Thank you! I\'ll be in touch shortly.',
      imageUrl: 'https://cdn.dribbble.com/users/784413/screenshots/3818347/mail.gif',
      imageAlt: 'Custom image',
    })
  }
  
  render(){
    return(
      <div id="contact"> 
        <h1> Contact </h1>
        <form id="contactForm">
          <div className="form-group">
            <div className="input-group">
              <input onInput={this.handleName} type="text" className="form-control" id="inputName" placeholder="Name"/>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon">@</div>
              <input onInput={this.handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
          </div>
          <textarea onInput={this.handleMessage} className="form-control" placeholder="Enter message here..."/>
          <button style={{marginTop:'15px'}}onClick={this.sendEmail} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Contact;