export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'body',
      title: 'Body',
      type: 'bodyPortableText',
    },
    // {
    //   name: 'content',
    //   type: 'array',
    //   title: 'Page sections',
    //   of: [{ type: 'hero' }, { type: 'imageSection' }, { type: 'textSection' }],
    // },
    { name: 'seo', type: 'seo' },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'seo.mainImage',
    },
  },
};
