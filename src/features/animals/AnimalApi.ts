import {Animal} from "./Animal";
import axios, {AxiosResponse} from "axios";

export const fetchAnimals = (): Promise<Animal[]> => {
    return axios.get(``)
        .then((result: AxiosResponse<Animal[]>) => {
            return result.data;
        }).catch((error) => {
            return Promise.reject(error);
        })
}