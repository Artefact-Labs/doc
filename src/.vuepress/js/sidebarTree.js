let tree = [
    {
        title: 'Introduction',
        path: '/introduction/',
        sidebarDepth: 2,
    },
    {
        title: 'Getting started',
        sidebarDepth: 2,
        children: [
            '/getting-started/installation/',
        ]
    },
    {
        title: 'Styles',
        sidebarDepth: 2,
        children: [
            '/styles/colors/',
            '/styles/display/',
            '/styles/elevation/',
        ]
    },
    {
        title: 'Script (Js)',
        path: '/script/',
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
                path: '/ui-components/basic/',
                children: [
                    '/ui-components/basic/canvas/',
                    '/ui-components/basic/icon/',
                    '/ui-components/basic/image/',
                    '/ui-components/basic/item/',
                    '/ui-components/basic/link/',
                    '/ui-components/basic/rectangle/',
                    '/ui-components/basic/scrollarea/',
                    '/ui-components/basic/text/',
                ]
            },
            {
                title: 'Multimedia',
                sidebarDepth: 2,
                children: [
                    '/ui-components/multimedia/audio/',
                    '/ui-components/multimedia/video/',
                ]
            },
            {
                title: 'Input Control',
                sidebarDepth: 2,
                children: [
                    '/ui-components/input-control/button/',
                    '/ui-components/input-control/checkbox/',
                    '/ui-components/input-control/circularprogress/',
                    '/ui-components/input-control/combobox/',
                    '/ui-components/input-control/draggable/',
                    '/ui-components/input-control/linearprogress/',
                    '/ui-components/input-control/mousearea/',
                    '/ui-components/input-control/radio/',
                    '/ui-components/input-control/rangeslider/',
                    '/ui-components/input-control/select/',
                    '/ui-components/input-control/slider/',
                    '/ui-components/input-control/switch/',
                    '/ui-components/input-control/textarea/',
                    '/ui-components/input-control/textedit/',
                    '/ui-components/input-control/textfield/',
                ]
            },
            {
                title: 'Special',
                sidebarDepth: 2,
                children: [
                    '/ui-components/special/animatedimage/',
                    '/ui-components/special/card/',
                    '/ui-components/special/carousel/',
                    '/ui-components/special/codemirror/',
                    '/ui-components/special/game/',
                    '/ui-components/special/htmlobject/',
                    '/ui-components/special/object/',
                    '/ui-components/special/pagination/',
                    '/ui-components/special/parallax/',
                    '/ui-components/special/slot/',
                    '/ui-components/special/slottemplate/',
                    '/ui-components/special/svg/',
                ]
            },
            {
                title: 'Layout',
                sidebarDepth: 2,
                children: [
                    '/ui-components/layout/column/',
                    '/ui-components/layout/flow/',
                    '/ui-components/layout/grid/',
                    '/ui-components/layout/row/',
                ]
            },
            {
                title: 'Navigation',
                sidebarDepth: 2,
                children: [
                    '/ui-components/navigation/appbar/',
                    '/ui-components/navigation/bottomnavigation/',
                    '/ui-components/navigation/routerlink/',
                    '/ui-components/navigation/routerview/',
                    '/ui-components/navigation/tabnavigation/',
                    '/ui-components/navigation/toolbar/',
                ]
            },
            {
                title: 'Network Element',
                sidebarDepth: 2,
                children: [
                    '/ui-components/network-element/networkanimatedimage/',
                    '/ui-components/network-element/networkcarousel/',
                    '/ui-components/network-element/networkparallax/',
                    '/ui-components/network-element/networkvideo/',
                    '/ui-components/network-element/networkimage/',
                ]
            },
            {
                title: 'Animation',
                sidebarDepth: 2,
                children: [
                    '/ui-components/animation/transition/',
                    '/ui-components/animation/transitiongroup/',
                ]
            },
            {
                title: 'Game',
                sidebarDepth: 2,
                children: [
                    '/ui-components/game/image/',
                    '/ui-components/game/rectangle/',
                    '/ui-components/game/scene/',
                    '/ui-components/game/sprite/',
                    '/ui-components/game/staticgroup/',
                    '/ui-components/game/tileimage/',
                ]
            },
        ]
    },
    {
        title: 'API',
        sidebarDepth: 2,
        children: [
            'api/android/',
            'api/electron/',
            'api/vue/',
            'api/vuerouter/',
            'api/vuetify/',
            'api/vuex/',
            'api/vue-mq/',
        ]
    },
    {
        title: 'Directives',
        sidebarDepth: 2,
        children: [
            'directives/ripple/',
        ]
    },
]

exports.tree = tree