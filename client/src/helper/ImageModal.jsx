import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

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

export default function ImageModal() {
  const classes = useStyles();
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`/gallery/images/${id}`, { withCredentials: true })
      .then((response) => {
        setImage(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setImage]);
  console.log(image.image);

  return (
    <div>
      <button className="signup" type="button" onClick={handleOpen}>
        Images
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {image ??
              image.map((img) => {
                return <img src={image.image} alt="user-gallery" />;
              })}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
