import React from 'react'
import PropTypes from 'prop-types'
import pic01 from '../images/howitworks.png'
import pic02 from '../images/mahmoud_pic.jpg'
import pic03 from '../images/neha_pic.jpg'
import pic04 from '../images/conner_pic.jpg'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }
    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">How it works</h2>
          <span className="image main align-center" ><iframe  src="https://www.youtube.com/embed/4hrC_TlYJPQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></span>
          <p>Roadmap creates a seamless workflow for organisations, NGOs and Nonprofits to propose projects that will be scoped and modularized by aspiring student PMs. This is done by creating a channel by which student PMs and organizations can communicate effectively. Aspiring student PMs, would modularize ambiguities in proposals into measurable and structured tasks that technical leads and designers can undertake, thereby, absorbing the tacit constraints that come with outsourcing a project.
          </p>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Through a semi-structured workflow capable of real time adaptations, we reduce the uncertainty at all levels of collaboration. Once both parties are in harmony, the project can mobilize. After project completion, student PMs can showcase their work on the platform, get scored on performance, and build their reputation within the student PM ecosystem.
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <p>Looking to outsource projects? <a href="mailto:contact.roadmap@gmail.com?Subject=RoadMap Project Proposal" target="_top">Contact us!</a></p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The team</h2>
          {/*<Row>*/}
            {/*<Col className="col-3 col-sm-3">          <span className=""><img src={pic03} width={130} height={180} alt="Desi Girl" /></span>*/}
            {/*</Col>*/}
            {/*<Col className="col-6 col-sm-auto"><p><p>Neha Mittal (Product and Strategy Lead)</p>*/}
            {/*Neha's passion in Education Technology goes back to her undergraduate days when she founded a*/}
                {/*startup focused on bringing IT education to underprivileged children. She worked in the Learning*/}
                {/*platform space at the Chan Zuckerberg Initiative soon after which is where she identified*/}
                {/*the advantages of project based learning and the existing gaps between students and Nonprofits.*/}
          {/*</p></Col>*/}
          {/*</Row>*/}
          {/*<Row><Col className="col-6"> <span className=""><img src={pic02} width={160} height={150} alt="Hamsho" /></span></Col><Col className="col-6"><p><p>Mahmoud Hamsho (Tech and Design Lead)</p>*/}
            {/*Mahmoud's research interest includes machine learning ethics and cybersecurity. While in the Bay Area, Mahmoud has*/}
              {/*worked as a Data Scientist at a IoT security startup (Intertrust Technologies). As a researcher for the California Statewide Database,*/}
              {/*he is conducting user research on redistricting information accessibility and helping design models to lower the barrier to participating in California*/}
              {/*redistricting.*/}
          {/*</p></Col></Row>*/}


            <table align="center">
                <tbody>
                <tr>
                    <td> <span className=""><img src={pic03} width={130} height={180} alt="Desi Girl" /></span></td>
                    <td> <span className=""><img src={pic02} width={130} height={180} alt="Hamsho" /></span></td>
                    <td> <span className=""><img src={pic04} width={130} height={180} alt="Hunihan" /></span></td>

                </tr>

                <tr>
                <td><p><strong>Neha Mittal</strong></p>
                        <p>Neha's passion in Ed-Tech goes back to her college days when she founded a
                        startup focused on bringing IT education to underprivileged children. She worked in the Learning
                        platform space at the Chan Zuckerberg Initiative soon after where she identified
                        the advantages of project based learning and the existing gaps between students and Nonprofits.
                    </p></td>

                <td><p><strong>Mahmoud Hamsho</strong></p>
                       <p> Mahmoud's research interest includes machine learning ethics and cybersecurity. While in the Bay Area, Mahmoud has
                        worked as a Data Scientist at a IoT security startup (Intertrust Technologies). As a researcher for the California Statewide Database,
                        he is conducting user research on redistricting information accessibility and helping design models to lower the barrier to participating in California
                        redistricting.
                    </p>

                    </td>

                    <td><p><strong>Conner Hunihan</strong></p>
                       <p>As an Environmental Scientist undergraduate, Conner began his career studying systems on a global scale. However, it was his experience developing small business initiatives in the Peace Corps that showed him the power of user-centered design. He has since focused his career on the creation of user experiences, creating a storytelling platform for the Nueva School, improving student enrollment as a UX Designer at CalCentral, and reimagining big data experiences at Autodesk.
                    </p>

                    </td>
                </tr>
                </tbody>

            </table>


          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            {/*<div className="field half first">*/}
              {/*<label htmlFor="name">Name</label>*/}
              {/*<input type="text" name="name" id="name" />*/}
            {/*</div>*/}
            {/*<div className="field half first">*/}
              {/*<label htmlFor="email">Email</label>*/}
              {/*<input type="text" name="email" id="email" onChange={this.handleChange} />*/}
            {/*</div>*/}
            {/*<div className="field">*/}
              {/*<label htmlFor="message">Message</label>*/}
              {/*<textarea name="message" id="message" rows="4"></textarea>*/}
            {/*</div>*/}
            <ul className="actions">
              <li><a href="mailto:contact.roadmap@gmail.com?Subject=RoadMap Query">Write to us!</a></li>
              {/*<li><input type="reset" value="Reset" /></li>*/}
            </ul>
          </form>
          {/*<ul className="icons">*/}
            {/*<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>*/}
            {/*<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>*/}
            {/*<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>*/}
            {/*<li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>*/}
          {/*</ul>*/}
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