import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

const Table = (props) => {
  const _renderImage = (image) => {
    return (
      <Col key={image.id}>
        <img
          onClick={() => props.handleOpenModal(image)}
          src={image.url}
          className={image.className}
          alt={image.title}
        ></img>
      </Col>
    );
  }
  const _renderRow = (row, index) => {
    return (
      <Row key={index}>
        {row.map(image => _renderImage(image))}
      </Row>
    )
  }
  let data;

  if (props.rows) {
    data = props.rows.map((row, index) => _renderRow(row, index));
  } else {
    data = '';
  }

  return (
    <Container fluid>
      {data}
    </Container>
  )
};

export default Table;
