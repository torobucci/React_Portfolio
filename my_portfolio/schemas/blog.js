export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'dateWritten',
        title: 'Date Written',
        type: 'date',
        validation: Rule => Rule.required(),
      },
      {
        name: 'image',
        title: 'image',
        type: 'image'
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
        validation: Rule => Rule.required(),
      },
    ],
  };

