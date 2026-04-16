import {Avatar, Typography} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from 'react';
import axios from "axios";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import { useNavigate } from 'react-router-dom';
import { DialogContent, TextField } from '@mui/material';

const API_URL = import.meta.env.VITE_API_URL;

export default function LoginButton({setIsAuthenticated}) {
    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = async () => {
        try {
            const params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);

            const response = await axios.post(`${API_URL}/auth/token`, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
            
            localStorage.setItem('token', response.data.access_token);
            setIsAuthenticated(true);
            handleClose();
            navigate('/'); // Redirect to home page after successful login
        } catch (err) {
            //console.error(err);
            setError('Invalid username or password');
        }
    };

    return (
    <React.Fragment>
        <Button className="login-button" variant="contained" onClick={handleClickOpen} sx={{height: "55px"} }>
            Iniciar sesión
        </Button>
        <Dialog 
            open={open} 
            onClose={handleClose}
            PaperProps={{
                component: "form",
                onSubmit: async (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    console.log(formJson);
                    await handleLogin(formJson);
                    //handleClose();
                },
            }}
        >
            <Avatar
                sx={{
                    mx: "auto",
                    bgcolor: "primary.main",
                    textAlign: "center",
                    mb: 0,
                    mt: 3,
                }}
            >
                <LockOutlinedIcon />
            </Avatar>
            <DialogTitle>Iniciar sesión</DialogTitle>
            <DialogContent>
                {error && <Typography color="error">{error}</Typography>}
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="username"
                    name="username"
                    label="Nombre de usuario"
                    type="text"
                    fullWidth
                    sx={{ mb: 2, mt: 2 }}
                    defaultValue={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                    fullWidth
                    defaultValue={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Aceptar</Button>
            </DialogActions>
            
        </Dialog>
    </React.Fragment>
    );
}