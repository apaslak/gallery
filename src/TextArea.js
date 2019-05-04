import React, { Component } from 'react';

const localStorage = window.localStorage;

class TextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const description = localStorage.getItem(`id-${this.props.imageId}`) || '';
    this.setState({ description: description });
  }

  handleChange(event) {
    const description = event.target.value;
    this.setState({ description: description });
    localStorage.setItem(`id-${this.props.imageId}`, description)
  }

  render() {
    const { description } = this.state;

    return (
      <div>
        <label>
          Description:
          <textarea value={description} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default TextArea;
