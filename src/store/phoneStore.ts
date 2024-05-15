import { defineStore } from 'pinia'
import {ref} from 'vue';
import axios from 'axios';
export const usePhoneStore = defineStore('phone', () => {
    const dataPhones = ref(null);
    const isLoadingPhones = ref(true);
    const allDataPhones = ref([]);
    const numPhone = ref(3);
    const searchValue = ref('');
    const getPhones = async() => {
        try {
            isLoadingPhones.value = true;
            const {data} = await axios.get(`https://e2233a89b8ce7902.mokky.dev/phones`, {
                params: {
                    limit: numPhone.value,
                }
            });
            dataPhones.value = data;
        } catch(e) {
            console.log(e);
        } finally {
            isLoadingPhones.value = false;
        }
    }

    const getAllPhones = async() => {
        try {
            const {data} = await axios.get(`https://e2233a89b8ce7902.mokky.dev/phones`);
            allDataPhones.value = data.slice(numPhone.value);
           
        } catch(e) {
            console.log(e);
        }
    }


    return {
        dataPhones, isLoadingPhones, allDataPhones, numPhone, searchValue,
        getPhones, getAllPhones
    };
})