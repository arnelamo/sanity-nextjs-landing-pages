export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62482f22bbf5b15c185543c5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gb3vquwx',
                  apiId: 'af14762b-c1a8-4175-9e39-781303b52640'
                },
                {
                  buildHookId: '62482f22a5c73d546948d928',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-t1kwb9n3',
                  apiId: '207a2657-c013-4119-8b90-d8aa9f33fc25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/arnelamo/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-t1kwb9n3.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
