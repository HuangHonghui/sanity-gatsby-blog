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
                  buildHookId: '5e09a0581e8eae11df254383',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a67ud9aa',
                  apiId: 'df0107e9-1eef-46d1-b46c-e7f86c977534'
                },
                {
                  buildHookId: '5e09a058342b28633fb18d17',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-jur7idyu',
                  apiId: 'e18248c4-94dd-46ab-84e2-3ddb0c3f5e9d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/HuangHonghui/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-jur7idyu.netlify.com', category: 'apps' }
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
