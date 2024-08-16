<template>
  <div class="blog-item-stat flex items-center gap-2.5">
    <span>{{ formattedDate }}</span>
    <span>•</span>
    <span class="flex items-center gap-1"><i class="icon icon-time text-xl/5"></i>{{ timeSince }}</span>
    <span>•</span>
    <span class="comments flex items-center gap-1"><i class="icon icon-comments text-xl/5"></i>{{ formattedComments }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { format, formatDistanceToNow, parseISO, intervalToDuration } from 'date-fns';
import { ru } from 'date-fns/locale';

const props = defineProps({
  createdAt: { type: String, default: '' },
  comments: { type: Number, default: 0 }
});

// Функция для кастомизации вывода времени
const customTimeSince = (date) => {
  const duration = intervalToDuration({ start: date, end: new Date() });
  let result = '';
  if (duration.years > 0) {
    result = duration.years + ' год' + (duration.years > 1 ? 'а' : '');
  } else if (duration.months > 0) {
    result = duration.months + ' месяц' + (duration.months > 1 ? 'а' : '');
  } else if (duration.weeks > 0) {
    result = duration.weeks + ' недел' + (duration.weeks > 1 ? 'и' : 'я');
  } else if (duration.days > 0) {
    result = duration.days + ' день' + (duration.days > 1 ? 'я' : '');
  } else if (duration.hours > 0) {
    result = duration.hours + ' час' + (duration.hours > 1 ? 'а' : '');
  } else if (duration.minutes > 0) {
    result = duration.minutes + ' минут' + (duration.minutes > 1 ? 'ы' : 'а');
  } else {
    result = 'менее минуты';
  }
  return result;
};

const formatComments = (count) => {
  if (count === 0) {
    return '0 комментариев';
  } else if (count % 10 === 1 && count % 100 !== 11) {
    return count + ' комментарий';
  } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return count + ' комментария';
  } else {
    return count + ' комментариев';
  }
}

const formattedDate = computed(() => {
  if (!props.createdAt) return '';
  const date = parseISO(props.createdAt);
  return format(date, 'd MMM', { locale: ru });
});

const timeSince = computed(() => {
  if (!props.createdAt) return '';
  const date = parseISO(props.createdAt);
  return customTimeSince(date);
});

const formattedComments = computed(() => {
  return formatComments(props.comments);
});

</script>

<style lang="scss" scoped>
.blog-item-stat {
  color: #7E8299;
  font-size: 0.875rem;

  .comments {
    .icon {
      color: #050505;
    }
  }
}
</style>


