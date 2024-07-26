import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { postExhibition } from "../api/exhibition";

const RegisterVehicle = () => {
    const [formData, setFormData] = useState({
        title: "",
        vehicle: "",
        description: ""
    });

    const history = useHistory();

    const styles: {[key: string]: React.CSSProperties} = {
        container: {
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
        },
        formContainer: {
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#dedcb0"
        },
        label: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.12rem",
            fontWeight: "bold",
            border: "1px",
            borderColor: "black",
            color: "black"
        }
    }

    const fetchExhibition = async () => {
        const exhibitionObj = {
            title: formData.title,
            vehicle: formData.vehicle,
            description: formData.description
        };

        try {
            const response = await postExhibition(exhibitionObj);
            console.log(response.data);
            history.push("/");
            return response;
        } catch (error) {
            console.log("Error fetching exhibition", error);
        }
    };

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchExhibition();
        console.log(formData);
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 
                    className="h2"
                    tabIndex={0}
                    aria-label="Cadastro de exposição"
                >
                    CADASTRO DE EXIBIÇÃO
                </h2>
                <div>
                    <form 
                        className="form"
                        onSubmit={handleSubmit}
                        
                    >
                        <label 
                            htmlFor="title"
                            style={styles.label}
                            tabIndex={0}
                        >Título
                            <input 
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="input"
                                tabIndex={0}
                                required
                            />
                        </label>
                        <label 
                            htmlFor="vehicleName"
                            style={styles.label}
                            tabIndex={0}
                        >Nome do veículo
                            <input 
                                type="text"
                                name="vehicle"
                                value={formData.vehicle}
                                onChange={handleChange}
                                className="input"
                                tabIndex={0}
                                required 
                            />
                        </label>
                        <label
                            htmlFor="description"
                            style={styles.label}
                            tabIndex={0}
                        >Descrição da exposição
                            <textarea 
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="textarea"
                                tabIndex={0}
                                required
                            />
                        </label>
                        <div>
                            <button 
                                type="submit"
                                className="btn-submit"
                                tabIndex={0}
                                aria-label="Botão"
                            >Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterVehicle;