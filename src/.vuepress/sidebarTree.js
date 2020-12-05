let tree = [
    {
        title: 'Introduction',
        path: '/introduction/',
    },
    {
        title: 'Getting started',
        sidebarDepth: 2,
        children: [
            '/getting-started/installation/',
        ]
    },
    {
        title: 'Styles and animations',
        sidebarDepth: 2,
        children: [
            '/styles-and-animations/colors/',
        ]
    },
    {
        title: 'Script (Js)',
        sidebarDepth: 2,
        children: [
            '/script/data/',
            '/script/method/',
            '/script/property/',
            '/script/computed/',
            '/script/lifecycle/',
            '/script/beforecreate/',
            '/script/created/',
            '/script/beforemount/',
            '/script/mounted/',
            '/script/beforeupdate/',
            '/script/updated/',
            '/script/beforedestroy/',
            '/script/destroyed/',
        ]
    },
    {
        title: 'UI Components',
        sidebarDepth: 2,
        children: [
            {
                title: 'Basic',
                sidebarDepth: 2,
                children: [
                    '/ui-components/basic/image'
                ]
            },
            {
                title: 'Multimedia',
                sidebarDepth: 2
            },
            {
                title: 'Input Control',
                sidebarDepth: 2
            },
            {
                title: 'Special',
                sidebarDepth: 2
            },
            {
                title: 'Layout',
                sidebarDepth: 2
            },
            {
                title: 'Navigation',
                sidebarDepth: 2
            },
            {
                title: 'Network Element',
                sidebarDepth: 2
            },
            {
                title: 'Animation',
                sidebarDepth: 2
            },
            {
                title: 'Game',
                sidebarDepth: 2
            },
        ]
    },
    {
        title: 'API',
        sidebarDepth: 2
    },
    {
        title: 'Directives',
        sidebarDepth: 2
    },
]

exports.tree = tree