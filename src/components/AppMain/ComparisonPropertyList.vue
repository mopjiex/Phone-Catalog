<script setup lang="ts">
interface Property {
    key: string;
    title: string;
}

interface Phone {
    name: string;
    image: string;
}

const props = defineProps({
    properties: {
        type: Array as () => Property[],
        default: () => ([] as Property[]),
    },
    dataPhones: {
        type: Array as () => Phone[],
        default: () => ([] as Phone[]),
    },
    showDifferences: {
        type: Boolean,
        default: false,
    },
});

const hasDifference = (key: string) => {
    const uniqueValues = new Set(props.dataPhones.map(item => item[key]));
    return uniqueValues.size > 1;
};
</script>

<template>
    <div v-for="property in props.properties">
        <div class="w-full py-8 border-b border-[#CDCFD2] text-lg font-medium flex justify-between items-center gap-x-20 
                    max-sm:flex-col max-sm:text-center max-sm:gap-y-4" 
                    v-if="!props.showDifferences || hasDifference(property.key)"
        >
            <h2 class="w-[295px] uppercase text-[#A4A9B9] leading-5"> 
                {{ property.title }}
            </h2>
            <div class="w-full flex justify-between 
                        max-sm:flex-col max-sm:items-center max-sm:gap-y-4"
            >
                <div class="flex flex-col items-center" v-for="item in props.dataPhones">
                    <h2 class="hidden max-sm:block">{{ item.name }}</h2>
                    <img 
                        class="w-6 h-6"
                        src="/images/true.png"
                        v-if="item[property.key] === '1'" 
                    />
                    <img 
                        class="w-6 h-6" 
                        src="/images/false.png"
                        v-else-if="item[property.key] === '0'"
                    />
                    <h2 class="max-lg:text-sm max-sm:text-lg" v-else>
                        {{ item[property.key] }} 
                        <span v-if="property.title === 'Стоимость'">₽</span>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>
