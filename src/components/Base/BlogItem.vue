<template>
  <div class="blog-item flex flex-col gap-2.5">
    <img :src="`src/assets/img/blog-items/${blog.img}.png`" alt="" class="cursor-pointer" @click="$emit('openBlog', blog)">
    <BlogItemStat :created-at="blog.createdAt" :comments="blog.comments.length" />
    <h3 class="title text-xl/5">{{ blog.title }}</h3>
    <h5 class="description text-base/4">{{ blog.description }}</h5>
    <UiListTags class="gap-2.5 mt-auto" :tags="blog.tags" :tag-class="'text-sm'"/>
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
.blog-item {
  img {
    width: 100%;
    min-width: 325px;
  }
}
</style>
