import React ,{useEffect }from "react";
import { useNavigate } from 'react-router-dom';
import Lorby from '../../media/Lorby-img.jpg';
import './WelcomePage.css';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function WelcomePage({ currentUser, logout }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);


    return(
        <>
        <div className="container">
            <div className="welcome-page d-f">
                <div>
                    <h1 className="f-w-500 welcome-title" >Добро пожаловать!</h1>
                    <h2 className="f-w-400">Lorby - твой личный репетитор</h2>
                </div>
                <img src={Lorby} alt="#" />
                <p className="exit-button"
                    onClick={handleOpen}
                >
                    Выйти
                </p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modal">
                <div>
                    <h3>Выйти?</h3>
                    <p>Точно выйти?</p>
                    <button onClick={handleClose}>Отмена</button>
                    <button onClick={logout}>Выйти</button>
                </div>
                </Box>
            </Modal>
        </div>
        </>
    )
}

export default WelcomePage