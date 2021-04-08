export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        // __experimental_before: [
        //   {
        //     name: 'vercel',
        //     options: {
        //       deployLimit: 10,
        //       projectId: process.env.SANITY_STUDIO_VERCEL_PROJECT_ID,
        //       token: process.env.SANITY_STUDIO_VERCEL_TOKEN,
        //     },
        //     layout: {
        //       width: 'large',
        //     },
        //   },
        // ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leslie-fi/next-sanity-ywst-test',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://next-sanity-ywst-test.vercel.app',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Last edited documents',
        order: '_updatedAt desc',
      },
      layout: {
        width: 'auto',
        height: 'large',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited posts',
        order: '_updatedAt desc',
        types: ['post'],
      },
    },
  ],
};
