import { defineStore } from 'pinia';
import { ref } from 'vue';
import { phonesUrl } from '@/utils/phoneAPI';
import axios from 'axios';

interface Phone {
    name: string;
    image: string;
    manufacturer: string;
    releaseYear: string;
    diagonal: string;
    country: string;
    memory: string;
    screenRefreshRate: string;
    nfs: string;
    esim: string;
    wirelessCharging: string;
    cost: string;
};

export const usePhoneStore = defineStore('phone', () => {
    const dataPhones = ref<Phone[] | null>(null);
    const isLoadingPhones = ref<boolean>(true);
    const trimmedDataPhones = ref<Phone[]>([]);
    const numPhone = ref<number>(3);
    const searchValue = ref<string>('');

    const getPhones = async () => {
        try {
            isLoadingPhones.value = true;
            const { data } = await axios.get<Phone[]>(phonesUrl, {
                params: {
                    limit: numPhone.value,
                },
            });
            dataPhones.value = data;
        } catch (e) {
            console.log(e);
        } finally {
            isLoadingPhones.value = false;
        }
    };

    const getTrimmedPhones = async () => {
        try {
            const { data } = await axios.get<Phone[]>(phonesUrl);
            trimmedDataPhones.value = data.slice(numPhone.value);
        } catch (e) {
            console.log(e);
        }
    };

    return {
        dataPhones,
        isLoadingPhones,
        trimmedDataPhones,
        numPhone,
        searchValue,
        getPhones,
        getTrimmedPhones,
    };
});