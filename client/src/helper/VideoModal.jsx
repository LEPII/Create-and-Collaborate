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
  const [videos, setVideos] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`/gallery/videos/${id}`, { withCredentials: true })
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setVideos]);

  console.log(videos);

  return (
    <div>
      <button className="signup" type="button" onClick={handleOpen}>
        Videos
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
          <Carousel fade id="carouselInterval">
            {videos?.map((video) => {
              return (
                <Carousel.Item data-interval="5000">
                  <video
                    autoPlay
                    loop
                    style={{
                      width: '40vw',
                      height: '50vh',
                      objectFit: 'fill'
                    }}
                  >
                    <source src={video.video} type="video/mp4" />
                  </video>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </Modal>
    </div>
  );
}
