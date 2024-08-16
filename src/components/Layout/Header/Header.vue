<template>
  <header class="header flex">
    <div class="container-wr">
      <div class="group flex justify-between gap-2">
        <img
          src="@/assets/img/svg/logo.svg"
          alt="logo"
          class="logo cursor-pointer"
          @click="router.push('/')"
        >
        <nav class="menu flex gap-5">
          <a class="menu-item text-base/4 py-2 px-3.5 rounded-md cursor-pointer font-semibold"
           :class="{ 'active': isActive(item.link) }"
           @click="router.push('/' + item.link)"
           v-for="item in menu" :key="item.key">{{ item.name }}</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const menu = [
  { name: 'Главная', key: 'home', link: '' },
  { name: 'Блог', key: 'blog', link: 'blog' },
];

const isActive = (link) => {
  return route.path === `/${link}`;
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  padding: 0.9375rem 1.875rem;
  background-color: #000000;
  height: 3.875rem;

  .group {
    width: 100%;
    max-width: 25.5625rem;

    .menu {
      &-item {
        color: #F9F9F9;
        background: transparent;
        &.active {
          color: #3E97FF;
          background: #FFFFFF1A;
        }
      }
    }
  }
}
</style>