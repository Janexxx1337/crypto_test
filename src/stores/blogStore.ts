import { defineStore } from 'pinia'

export const useBlogStore = defineStore('counter', {
  state: () => ({
    blogs: [
      {
        img: 'blog1',
        createdAt: '2023-04-09T12:00:00',
        comments: 1,
        title: 'Вдохновение в каждом шаге',
        description: 'Наши путешественники находят вдохновение в каждом шаге своего пути.',
        tags: [
          { name: 'Природа', key: 'nature' },
          { name: 'Люди', key: 'people' }
        ]
      },
      {
        img: 'blog2',
        createdAt: '2023-04-06T15:30:00',
        comments: 5,
        title: 'Моменты тишины и покоя',
        description: 'В такие моменты наши фотографы ощущают гармонию и умиротворение.',
        tags: [
          { name: 'Природа', key: 'nature' },
          { name: 'Животные', key: 'animals' }
        ]
      },
      {
        img: 'blog3',
        createdAt: '2023-04-05T11:45:00',
        comments: 10,
        title: 'Цвета природы в наших руках',
        description: 'Наши художники выражают всю красоту окружающего мира через творчество.',
        tags: [
          { name: 'Природа', key: 'nature' },
          { name: 'Искусство', key: 'art' }
        ]
      },
      {
        img: 'blog4',
        createdAt: '2023-04-04T10:00:00',
        comments: 6,
        title: 'Семейные узы в дикой природе',
        description: 'Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.',
        tags: [
          { name: 'Природа', key: 'nature' },
          { name: 'Животные', key: 'animals' }
        ]
      },
      {
        img: 'blog5',
        createdAt: '2023-04-03T16:20:00',
        comments: 2,
        title: 'Гармония городских и природных пейзажей',
        description: 'Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.',
        tags: [
          { name: 'Природа', key: 'nature' },
          { name: 'Искусство', key: 'art' }
        ]
      },
      {
        img: 'blog6',
        createdAt: '2023-04-01T14:00:00',
        comments: 0,
        title: 'Моменты, которые остаются в сердце',
        description: 'Эти мгновения наполняют наши сердца радостью и любовью.',
        tags: [
          { name: 'Природа', key: 'nature' },
          { name: 'Люди', key: 'people' },
          { name: 'Животные', key: 'animals' }
        ]
      }
    ]
  }),
  actions: {
    increment() {
      this.count++
    },
  }
})
