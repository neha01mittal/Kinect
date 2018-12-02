import React from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

const inputParsers = {
    date(input) {
        const [month, day, year] = input.split('/');
        return `${year}-${month}-${day}`;
    },
    uppercase(input) {
        return input.toUpperCase();
    },
    number(input) {
        return parseFloat(input);
    },
};

class MyForm extends React.Component {
    constructor() {
        super();
        this.state = {email: '', designation: '', confirm: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    handleSelectionChange(event) {
        console.log(event.target.value);
        this.setState({designation: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let handle = this;
        fetch('https://kinect-21e49.firebaseio.com/roadmap/v1/contacts.json', {
            method: 'POST',
            body: JSON.stringify({email: this.state.email, designation: this.state.designation}),
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log('Created Gist:', data);
            handle.setState({confirm: 'Thank you for signing up. We will be in touch soon :)'});
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table align="center">
                    <tbody>

                    <tr>
                        <td>
                            <input name="email" type="email" placeholder="EMAIL" value={this.state.value}
                                   onChange={this.handleChange}/>
                        </td>
                        <td><label>
                            I want to ...</label></td>
                        <td>
                            <select name="contact" onChange={this.handleSelectionChange}>
                                <option value="Company">Outsource a project</option>
                                <option value="PM">Manage a project</option>
                                <option value="Freelancer">Freelance a project</option>
                                <option value="Other">Other</option>

                            </select>
                        </td>
                        <td><Button>Sign me up!</Button></td>
                    </tr>
                    <tr>
                        <td>
                            <p>{this.state.confirm}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        );
    }
}

export default MyForm;