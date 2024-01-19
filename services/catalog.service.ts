import axios from "axios";
import { ICategory } from "../interfaces/category.interface";
const API_URL = 'https://retailapi.ru/api'

axios.defaults.baseURL = API_URL

export const CatalogService = {

    async getAllCategories(){
        const {data} = await axios.get<ICategory[]>('/categories/')
        return data
    },

}