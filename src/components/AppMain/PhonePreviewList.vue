<script setup lang="ts">

interface Phone {
    image: string;
    name: string;
}

defineProps({
    dataPhones: {
        type: Array as () => Phone[],
        default: () => ([] as Phone[]),
    },
    activeIndex: {
        type: Number,
        default: 0,
    },
    numPhone: {
        type: Number,
        default: 0,
    },
    toggleActiveIndex: Function,
    swapPhone: Function,
    filtered: {
        type: Array as () => Phone[],
        default: () => ([] as Phone[]),
    },
});

const searchValue = defineModel('searchValue');
</script>

<template>
    <div class="flex flex-col items-center gap-y-2 relative w-[160px]" 
        v-for="(phone, phoneIdx) in dataPhones" 
        :key="phoneIdx"
    >
        <img class="w-10 h-10" :src="phone.image">
        <p>{{ phone.name }}</p>
        <img class="absolute right-0 top-[29%] translate-y-[-29%] cursor-pointer transition-all duration-200 hover:scale-125"
            :class="(activeIndex !== null && activeIndex === phoneIdx) ? 'rotate-180' : ''"
            src="/images/arrow.png" 
            @click="toggleActiveIndex(phoneIdx)"
            v-if="numPhone < 6"
        >
        <div class="absolute top-[70%] left-[-90%] w-[300px] border-2 bg-white z-10 
                    max-sm:w-[270px] max-sm:left-[-38%]" 
            v-if="activeIndex === phoneIdx"
        >
            <div class="p-2 flex justify-center" 
                v-if="dataPhones.length <= 2"
            >
                <input class="py-2 px-4 outline-none w-full border" 
                    type="text" placeholder="Поиск" 
                    v-model="searchValue"
                >
            </div>
            <div class="h-[170px] overflow-y-auto">
                <div class="p-2" 
                        v-for="(phone, phoneIdx) in filtered"
                        :key="phoneIdx"
                >
                    <div class="flex items-center gap-x-6">
                        <img class="cursor-pointer transition-all duration-200 hover:scale-125" 
                            src="/images/change.png" 
                            @click="swapPhone(phoneIdx)"
                        >
                        <img class="w-10 h-10" :src="phone.image">
                        <p>{{ phone.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>