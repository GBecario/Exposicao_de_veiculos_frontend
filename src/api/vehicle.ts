import axios from "axios";
import { api } from "./api";

export const postVehicle = async (vehicle: any) => {
    try {
        const response = await api.post("/vehicle", vehicle);
        return response.data;
    } catch (error) {
        console.log("Erro ao cadastrar veiculo: ", error);
    }
};

export const getAllVehicle = async () => {
    try {
        const response = await api.get("/vehicle");
        return Array.isArray(response.data.content) ? response.data.content : [];
    } catch (error) {
        console.log("Erro ao buscar veiculos", error);
    }
    
};