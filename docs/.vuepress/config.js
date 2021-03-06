module.exports = {
    base: '/craft-seo-fields/',
    title: 'Studio Espresso',
    ga: 'UA-79200406-2',
    head: [
        ['link', { rel: 'icon', href: `/favicon.png` }],
        ['meta', { name: 'theme-color', content: '#3b68b5' }],
    ],
    themeConfig: {
        logo: '/icon-vuepress.svg',
        search: true,
        searchMaxSuggestions: 5,
        docsRepo: 'studioespresso/craft-seo-fields',
        docsDir: 'docs',
        docsBranch: 'develop',
        editLinks: true,
        editLinkText: 'See something wrong? Let us know!',
        sidebarDepth: 1,
        displayAllHeaders: true,
        sidebar: [
            ['/', 'Introduction'],
            ['/general', 'General'],
            ['/field', 'Field & settings'],
            ['/templating', 'Templating'],
            ['/robots', 'Robots.txt'],
            ['/sitemap', 'Sitemap.xml'],
            ['/extra', 'Extra'],
        ],
        nav: [
            {
                text: 'Buy now',
                link: 'https://plugins.craftcms.com/seo-fields',
            },
            {
                text: 'Issues?',
                link: 'https://github.com/studioespresso/craft-seo-fields/issues'
            },
            {
                text: 'Questions? Get in touch!',
                link: 'https://www.studioespresso.co/en/contact',
            }
        ]
    },
    plugins: [
    [
        '@vuepress/google-analytics',
        {
            'ga': 'UA-79200406-2'
        }
    ]
]
}