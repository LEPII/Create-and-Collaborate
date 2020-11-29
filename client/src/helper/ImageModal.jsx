import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Carousel } from 'react-bootstrap';
import Backdrop from '@material-ui/core/Backdrop';
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
  const [images, setImages] = useState([]);

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
        setImages(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <button className="signup" type="button" onClick={handleOpen}>
        Images
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
        <div className={classes.paper}>
          <Carousel fade>
            {images?.map((image) => {
              return (
                <Carousel.Item>
                  <img src={image.image} alt={image.caption} />
                </Carousel.Item>
              );
            })}
          </Carousel>

          {/* <img src={images.image} /> */}
        </div>
      </Modal>
    </div>
  );
}
