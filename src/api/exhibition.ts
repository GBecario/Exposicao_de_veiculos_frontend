import axios from "axios";
import { api } from "./api";

export const getAllExhibiton = async () => {
    try {
        const response = await api.get("/exhibition");
        console.log(response.data.content)
        return Array.isArray(response.data.content) ? response.data.content : [];
    } catch (error) {
        console.log("Erro ao buscar exposições: ", error);
    }
};

export const postExhibitionPag = async (page: number = 0, size: number = 50) => {
    try {
        const response = await api.get(`/exhibition?page=${page}&size=${size}`)
        const { content } = response.data
        return content;
    } catch (error) {
        console.log("Error fetching exhibition: ", error);
    }
}

export const postExhibition = async (exhibition: any) => {
    try {
        const response = await api.post("/exhibition", exhibition);
        return response.data;
    } catch (error) {
        console.log("Erro ao cadastrar exposição: ", error);
    }
};