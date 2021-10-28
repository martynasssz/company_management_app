import axios from "axios";
import { ref } from 'vue';

export default function useCompanies() {
    //define methods and properties
    const companies = ref([]); //to make reactive variable
    
    //companies will be filled by this function
    const getCompanies = async () => {
        let response = await axios.get('api/companies') //get response from server
        companies.value = response.data.data;
    }

    return {
        //export into return
        companies,
        getCompanies
    }
}

