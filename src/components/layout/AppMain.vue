<script setup lang="ts">
import {ref, onMounted, watch, computed} from 'vue';
import { usePhoneStore } from '@/store/phoneStore';
import { properties } from '@/utils/phoneAttributes';

import ComparisonPropertyList from '@/components/AppMain/ComparisonPropertyList.vue';
import PhoneDisplayQuantity from '@/components/AppMain/PhoneDisplayQuantity.vue';
import PhonePreviewList from '@/components/AppMain/PhonePreviewList.vue';
import SwitchDifferences from '@/components/UI/checkbox/SwitchDifferences.vue';

const phoneStore = usePhoneStore();

const switchValue = ref<boolean | null>(null);
const activeIndex = ref<number | null>(null);

const setNumPhones = async (index: number): Promise<void> => {
  phoneStore.numPhone = index;
  activeIndex.value = null;
  await phoneStore.getPhones();
  await phoneStore.getTrimmedPhones();
};

const toggleActiveIndex = (index: number): void => {
    if(activeIndex.value === null) {
        activeIndex.value = index;
    } else {
        activeIndex.value = null;
        phoneStore.searchValue = '';
    }
}

interface Phone {
    name: string;
}

const filteredPhones = computed(() =>
    phoneStore.trimmedDataPhones.filter((phone: Phone) =>
    phone.name.toLowerCase().includes(phoneStore.searchValue.toLowerCase()))
);

const swapPhone = (currentIndex: number): void => {
    let activePhone = phoneStore.dataPhones.items[activeIndex.value];
    phoneStore.dataPhones.items[activeIndex.value] = phoneStore.trimmedDataPhones[currentIndex];
    phoneStore.trimmedDataPhones[currentIndex] = activePhone;
}

onMounted(() => {
    phoneStore.getPhones();
    phoneStore.getTrimmedPhones();
});
</script>


<template>
    <div class="pt-16 max-sm:pt-4">
        <div class="container mx-auto px-2">
            <div class="main-content max-sm:relative">
                <PhoneDisplayQuantity :numPhones="setNumPhones"/>

                <div class="flex justify-between mb-20 gap-x-20
                            max-sm:flex-col max-sm:items-center max-sm:gap-y-2 max-sm:mb-6"
                >
                    <SwitchDifferences v-model:switch="switchValue"/>

                    <div class="flex w-full justify-between flex-wrap gap-y-4
                                max-sm:flex-col max-sm:items-center max-sm:gap-y-2 max-sm:mb-6"  
                        v-if="!phoneStore.isLoadingPhones"
                    >
                        <PhonePreviewList 
                            :dataPhones="phoneStore.dataPhones.items"
                            :allDataPhones="phoneStore.allDataPhones"
                            :activeIndex="activeIndex"
                            :numPhone="phoneStore.numPhone"
                            :toggleActiveIndex="toggleActiveIndex"
                            :swapPhone="swapPhone"
                            :filtered="filteredPhones"
                            v-model:searchValue="phoneStore.searchValue" 
                        />
                    </div>
                    <div v-else>
                        <span>Загрузка...</span>
                    </div>
                </div>     
            </div>
        </div>
    </div>
        <div class="bg-[#F4F9FC] z-0">
            <div class="container mx-auto px-2">
                <div class="content border-t border-[#CDCFD2] pb-28 max-sm:pb-10">
                    <div v-if="!phoneStore.isLoadingPhones">
                        <ComparisonPropertyList 
                            :properties="properties" 
                            :dataPhones="phoneStore.dataPhones.items" 
                            :showDifferences="switchValue"
                        />
                    </div>
                   
                    <div v-else>
                        <span>Загрузка...</span>
                    </div>
                </div>
            </div>
        </div>   
</template>