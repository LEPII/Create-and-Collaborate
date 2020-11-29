import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/AppContext';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function Messengerl() {
  const { setLoading } = useContext(AppContext);
  const classes = useStyles();
  const history = useHistory();
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(null);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`/message/${id}`, formData);
      await history.push(`/messages/${id}`);
      setLoading(false);
    } catch (error) {
      console.log('Login Error: ' + error);
    }
    setOpen(false);
  };

  return (
    <div>
      <button className="signup" type="button" onClick={handleOpen}>
        Message
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <form onSubmit={handleMessage}>
          <div className="messageForm">
            <input
              className="message"
              htmlFor="text"
              id="message"
              type="text"
              placeholder="Tell me how you really feel.."
              name="text"
              onChange={handleChange}
            />
          </div>
        </form>
      </Modal>
    </div>
  );
}
