export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'category',
        category: 'Category',
        type:'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'rating',
        title:'Rating',
        type:'number',
        validation: (Rule) => Rule.required(),
      },

      {
        name: 'githubLink',
        title: 'GitHub Link',
        type: 'url',
        validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
      },
      {
        name: 'liveVersionLink',
        title: 'Live Version Link',
        type: 'url',
        validation: (Rule) => Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
      },
    ],
  };
