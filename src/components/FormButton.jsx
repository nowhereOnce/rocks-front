import * as React from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import CustomDialog from "./CustomDialog";
import { handleRequestError } from '../utils/requestErrorHandler';

const API_URL = import.meta.env.VITE_API_URL;

export default function FormButton({ reload }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //handleSubmit: Makes a POST request to the API to create a new rock in the DB.
    const handleSubmit = async (formJson) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${API_URL}/samples/`, formJson, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            console.log("Registro exitoso:", response.data);
            await reload(); // Recargar datos
        } catch (error) {
            //console.error("Error en la solicitud:", error);
            handleRequestError(error);
        }
    };

    return (
    <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen} sx={{height: "55px"}}>
            Agregar Muestra
        </Button>
        <CustomDialog open={open} handleClose={handleClose} handleSubmit={handleSubmit} />
    </React.Fragment>
    );
}
