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
    console.log(this.state.name, this.state.email, this.state.message);
    document.getElementById('contactForm').reset();
    // swal ('Thank you!', 'Ill be in touch', 'success');
    // swal({
    //   title: 'SENT',
    //   text: 'Thank you! I\'ll be in touch shortly.',
    //   imageUrl: 'https://cdn.dribbble.com/users/29051/screenshots/3346063/header-sparkle-gif.gif',
    //   imageAlt: 'Custom image',
    //   background: '#fcf7f2'
    // })
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
        <h5> Contact </h5>
        <form id="contactForm">
          <div className="form-group">
            <label>Name</label>
            <input onInput={this.handleName} type="text" className="form-control" id="inputName" placeholder="Name"/>
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input onInput={this.handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <textarea onInput={this.handleMessage} className="form-control"/>
          <button onClick={this.sendEmail} className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Contact;