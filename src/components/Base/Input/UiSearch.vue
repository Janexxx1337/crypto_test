<template>
  <div class="search px-2.5 flex gap-2.5 w-full items-center rounded-md h-10">
    <i class="icon icon-search text-sm"></i>
    <input class="w-full bg-transparent" type="text" v-model="value" placeholder="Поиск">
    <i class="icon icon-cross-x text-sm cursor-pointer" v-show="value !== ''" @click="value = ''"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>

<style lang="scss" scoped>
.search {
  background-color: #F9F9F9;

  input {
    &::placeholder {
      color: #D8D8E5;
    }
    &:focus-visible {
      outline: 0;
    }
  }
}
</style>
