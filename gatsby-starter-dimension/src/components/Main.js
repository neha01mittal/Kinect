import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/howitworks.png'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">How it works</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>The Kinect system aims to create a seamless workflow for organisations, NGOs and Nonprofits to propose projects that will be scoped and modularized by aspiring student product/project management (PM). This is done by creating a channel by which student PMs and organizations can communicate effectively. Aspiring student PMs, would modularize ambiguities in proposals into measurable and structured tasks that technical leads and designers can undertake, thereby, absorbing the tacit constraints that come with outsourcing a project.
          </p>
          <p>Before scoping and modularization can be achieved by student PMs, the Kinect system aims to align student and organization expectations. Through increasing transparency from both parties, we reduce the uncertainty at all levels of collaboration. Once both parties are in harmony, the project can mobilize. After project completion, student PMs can showcase their work on the platform, get scored on performance, and build their reputation within the student PM ecosystem.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Current Projects Go here</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
            <p><p>Neha Mittal  (Product and Strategy Lead)</p>
              Neha is a second year student pursuing Master of Information Management and Systems with a focus on product management and data science. Her passion in Education Technology goes back to her undergraduate days when she founded a startup focused on bringing IT education to underprivileged children in India and Cambodia. She worked as a Product Engineering Intern in the Learning platform team at the Chan Zuckerberg Initiative this summer which is where she became aware of the advantages of project based learning and the existing gaps between students and Nonprofits. Before pursuing her masters, she worked as a Software Engineer at Goldman Sachs where she architected a business process modeling solution to automate complex workflows across diverse teams. Her experience as a cross functional analyst comes handy in tackling a multiple stakeholder market solution. She has also worked as the Product Lead in an IOT startup and shipped the first product for optimizing energy consumption in hotels. Her experience at the forefront of product related decision making would go a long way in executing Kinect’s execution plan strategically. Her technical expertise as a full stack engineer will further facilitate building the technical platform for exchange of information.
          </p><p><p>Mahmoud Hamsho (Tech and Design Lead)</p>
              Mahmoud is a Master of Information Management and Systems student focusing on data science (‘19). His research interest includes machine learning ethics and cybersecurity. While in the Bay Area, Mahmoud has worked as a Data Scientist Intern at a IoT security startup (Intertrust Technologies). There he helped develop a deep learning model to detect anomalies in wind turbines and produce power generation forecasting. Currently as a researcher for the California Statewide Database, he is conducting user research on redistricting information accessibility and helping design models to lower the barrier to participating in California redistricting.
              Mahmoud’s experience in designing experiments will be crucial in running studies to validate if the designed system adds value to the current process of outsourcing projects. His research in ethics, cybersecurity and social sciences will further help investigate solutions to creating a platform that provides a safe mode of communication between all stakeholders.
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main