import React, { Component, Fragment } from 'react';
import Table from './Table';
import Dialog from './Dialog';
import TextArea from './TextArea';

const IMAGE_API = 'https://jsonplaceholder.typicode.com/photos';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [],
      showModal: false,
      selectedImage: {},
      isLoading: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(image) {
    this.setState({ showModal: true, selectedImage: image });
  }

  handleCloseModal() {
    this.setState({ showModal: false, selectedImage: {} });
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(IMAGE_API)
      .then(response => response.json())
      .then(images => {
        this.setState({
          rows: [
            images.slice(0, 5),
            images.slice(5, 10),
            images.slice(10, 15),
            images.slice(15, 20),
            images.slice(20, 25)
          ],
          isLoading: false
        })
      });
  }

  render() {
    const { rows, showModal, selectedImage, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <Fragment>
        {
          showModal && <Dialog
            isOpen={showModal}
          >
            <button onClick={this.handleCloseModal} className='float-right'>Close Modal</button>
            <Fragment>
              <h2>{selectedImage.title}</h2>
              <img src={selectedImage.url} alt={selectedImage.title}></img>
              <TextArea imageId={selectedImage.id} />
            </Fragment>
          </Dialog>
        }
        <Table
          rows={rows}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
        />
      </Fragment>
    );
  }
}

export default App;
