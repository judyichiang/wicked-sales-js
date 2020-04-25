import React from 'react';

export default class Disclaimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalAccept: false,
      checkBoxPrompt: false
    };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this);
  }

  handleAccept() {
    this.setState({
      modalAccept: !this.state.modalAccept
    });
  }

  handleCloseButton() {
    event.preventDefault();
    if (this.state.modalAccept) {
      this.props.setModalView();
      return;
    }
    this.setState({
      checkBoxPrompt: true
    });
  }

  isModalVisible() {
    return this.props.modalView ? '' : 'hidden';
  }

  isCheckPromptVisible() {
    return this.state.checkBoxPrompt ? '' : 'hidden';
  }

  promptVisual() {
    if (this.state.modalAccept) {
      return (
        <>
          <i className="fas fa-check" />
          <small className="go">Please proceed!</small>
        </>
      );
    } else {
      return (
        <>
          <i className="fas fa-times" />
          <small>Please indicate that you accept the Terms and Conditions!</small>
        </>
      );
    }
  }

  render() {

    const modalView = this.isModalVisible();
    const checkBoxPrompt = this.isCheckPromptVisible();
    return (
      <div className={`${modalView} disclaimer container-fluid`}>
        <div className="disclaimer-message">
          <div className="contents">
            <p>Contents</p>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="accept" onClick={this.handleAccept} />
            <label htmlFor="accept" className="form-check-label check-text">I accept that this website is for demonstration purposes only and no real purchases will be made. </label>
          </div>
          <div className={`d-flex ${checkBoxPrompt}`}>
            {this.promptVisual()}
          </div>
          <button type="button" className="btn btn-secondary exit-modal" data-dismiss="modal" aria-label="Close" onClick={this.handleCloseButton}>Accept</button>
        </div>

      </div>
      // -------------------
    );
  }

}
