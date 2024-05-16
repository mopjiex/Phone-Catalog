<script setup lang="ts">

defineProps({
    numPhones: Function,
});
</script>

<template>
    <div class="flex justify-between items-end mb-5 max-sm:flex-col max-sm:items-center max-sm:gap-y-4">
        <h1 class="text-5xl text-[#828286] font-bold tracking-wide">Смартфоны</h1>
        <div class="text-lg text-[#0D5ADC] tracking-wide flex gap-x-2">
            <p class="">Отобразить товары:</p>
            <ul class="flex gap-x-2">
                <li class="transition-all duration-150 cursor-pointer h-[28px] lg:hover:border-b border-[#0D5ADC]"
                    @click="numPhones(num + 1)" v-for="num in 5" :key="num">
                    {{ num + 1 }}
                </li>
            </ul>
        </div>
    </div>
</template>