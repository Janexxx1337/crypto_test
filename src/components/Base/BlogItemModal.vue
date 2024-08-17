<template>
  <div class="blog-item-modal flex fixed top-0 left-0 w-full h-full z-40" @click="$emit('close')">
    <div class="wrapper h-full mx-auto flex overflow-auto py-4 px-2.5">
      <div class="main flex flex-col gap-2.5 bg-white rounded-xl p-4 my-auto relative shadow-2xl" @click.stop>
        <i class="icon icon-cross-x absolute top-4 right-4 text-xl cursor-pointer font-semibold" @click="$emit('close')"></i>
        <h3 class="title text-2xl/6 font-semibold">{{ blog.title }}</h3>
        <div class="content flex flex-col">
          <BlogItemStat :created-at="blog.createdAt" :comments="blog.comments" />
          <img :src="`src/assets/img/blog-items/${blog.img}.png`" alt="" @click="$emit('openBlog', blog)">
          <p class="text text-base/[25px] font-medium">{{ blog.text }}</p>
        </div>
        <UiListTags class="gap-2.5 mt-auto" :tags="blog.tags" :tag-class="'text-sm'"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UiListTags from '@/components/Base/UiListTags.vue';
import BlogItemStat from '@/components/Base/BlogItemStat.vue';

const props = defineProps({
  blog: { type: Object }
});
</script>

<style lang="scss" scoped>
.blog-item-modal {
  background-color: #0000004D;
  .main {
    max-width: 39.375rem;
  }
  .content {
    gap: 0.9375rem;
  }
}
</style>
