<script setup lang="ts">
import MobMenu from '@/components/AppHeader/MobMenu.vue';
</script>


<template>
    <div class="py-11 border-b border-[#A6A5A9]">
        <div class="container mx-auto px-2">
            <div class="flex justify-between items-center">
                <div class="text-lg text-[#0D5ADC] font-black tracking-wider">
                    <h2>Каталог</h2>
                </div>

                <div class="flex items-center gap-x-5 max-sm:hidden">
                    <ul class="flex gap-x-12 text-xs text-[#3B4157] font-black">
                        <li class="uppercase">Сравнение</li>
                        <li class="tracking-wide">Личный кабинет</li>
                    </ul>

                    <button>
                        <img src="/images/login.png">
                    </button>
                </div>

                <MobMenu/>
            </div>
        </div>
    </div>
</template>