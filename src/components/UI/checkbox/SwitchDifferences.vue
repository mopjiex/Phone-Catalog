<script setup lang="ts">
  type SwitchState = boolean;

  const switchValue = defineModel<SwitchState>('switch', {default: false});
  
</script>

<template>
  <label class="flex items-center gap-x-3.5 cursor-pointer select-none w-[330px] max-sm:w-[220px]">
    <input class="w-6 h-6" type="checkbox" v-model="switchValue">
    <span class="text-lg text-[#0D5ADC]">Показать различия</span>
  </label>
</template>