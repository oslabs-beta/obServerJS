/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useContext } from 'react';
import { Modal, Container } from '@material-ui/core';
import { MainContainerContext } from '../../Global/context/MainContainerContext';
import * as actions from '../../Global/actionTypes';

const styles = {
  modal: {
    background: 'darkgray',
    height: '70%',
    width: '30%',
    display: 'flex',
    margin: 'auto',
    justifyContent: 'center',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '.3rem',
  },
  exit: {
    textAlign: 'right',
  },
  button: {
    width: '50%',
    margin: '1rem auto',
  },
};

const AddTestComponent = ({ showModal, closeModal }) => {
  const { dispatch } = useContext(MainContainerContext);

  const [url, setUrl] = React.useState('');
  const [method, setMethod] = React.useState('GET');
  const [bodyInput, setBodyInput] = React.useState();
  const [expectedResponse, setExpectedResponse] = React.useState();
  const [condition, setCondition] = React.useState('');

  const addTest = () => {
    dispatch({
      type: actions.ADD_TEST,
      payload: {
        url,
        method,
        body: bodyInput,
        expectedResponse,
        condition,
      },
    });
  };

  return (
    <Modal open={showModal} onClose={closeModal} style={styles.modal}>
      <Container style={styles.container}>
        <p style={styles.exit} onClick={closeModal}>
          X
        </p>

        <div style={styles.form} onSubmit={null}>
          <label>URL</label>
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          <label>Method</label>
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
          </select>
          <label>Body</label>
          <textarea type="text" cols={20} rows={5} value={bodyInput} onChange={(e) => setBodyInput(e.target.value)} />

          <select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option>To Equal</option>
            <option>To Contain</option>
            <option>To Be</option>
          </select>
          <textarea type="text" cols={20} rows={5} value={expectedResponse} onChange={(e) => setExpectedResponse(e.target.value)} />
          <button style={styles.button} onClick={addTest}>
            Add Test Component
          </button>
        </div>

        <h2 />
      </Container>
    </Modal>
  );
};

export default AddTestComponent;
