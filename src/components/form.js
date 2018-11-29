import React from 'react';

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);

        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input.dataset.parse;

            if (parserName) {
                const parser = inputParsers[parserName];
                const parsedValue = parser(data.get(name));
                data.set(name, parsedValue);
            }
        }

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }
    handleSubmit(event) {
        if (!event.target.checkValidity()) {
            this.setState({ displayErrors: true });
            return;
        }
        this.setState({ displayErrors: false });
    }
    render() {
        const { displayErrors } = this.state;
        return (
            <form
                onSubmit={this.handleSubmit}
                noValidate
                className={displayErrors ? 'displayErrors' : ''}
            >
                {/* ... */}
            </form>
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                {/*<label>*/}
                    {/*Name*/}
                {/*<input*/}
                    {/*name="Name"*/}
                    {/*type="text"*/}
                    {/*data-parse="uppercase"*/}
                {/*/></label>*/}

                <label>
                    Email
                <input name="email" type="email" />
                </label>

                <label>
                    Company (Select from dropdown)
                    <select name= "contact">
                        <option value="Company">Company</option>
                        <option value="Student PM">Student Product Manager</option>
                        <option value="Student Engineer">Student Engineer</option>
                        <option value="Student Designer">Student Designer</option>
                        <option value="Other">Other</option>

                    </select>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default MyForm;