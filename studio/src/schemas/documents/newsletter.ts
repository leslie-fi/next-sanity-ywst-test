export default {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Subject Line',
      type: 'string',
    },
    {
      title: 'Opening',
      name: 'opening',
      type: 'array',
      of: [{ type: 'bodyPortableText' }],
    },
    {
      title: 'Bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'bookmark' }],
        },
      ],
    },
  ],
};
