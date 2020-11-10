export default {
  widgets: [
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
                  buildHookId: '5faa8257dfb700b187b17d47',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hzdzc1fv',
                  apiId: '4fa5fecd-6d8a-4e38-8cc0-3d964610da64'
                },
                {
                  buildHookId: '5faa8257477329970d578628',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n81ambxt',
                  apiId: '4fcfe5d0-574f-4a07-9476-10773c677e26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ianVCS/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n81ambxt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
