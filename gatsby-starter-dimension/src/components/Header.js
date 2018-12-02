import React from 'react'
import PropTypes from 'prop-types'
import Form_info from '../components/Form'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-puzzle-piece"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>ROADMAP</h1>
                <h5>Hasslefree Project Outsourcing.</h5>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>How it works</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact us</a></li>
            </ul>
        </nav>

        <div className="container">
        <Form_info>
            Please fill out
        </Form_info>

        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
