import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    title: "simpleUpay",
    description: "A high-performance crypto payment gateway that can give you peace of mind",

    themeConfig: {
        nav: nav(),
        sidebar: {
            '/guide/': { base: '/guide/', items: sidebarGuide() },
            '/api/': { base: '/api/', items: sidebarApi() },
        },
    }
})

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                { text: 'What is SimpleUpay', link: 'what-is-simpleUpay' },
            ]
        },
    ]
}

function sidebarApi(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Basic Use',
            collapsed: false,
            items: [
                { text: 'How to use SimpleyUpay API', link: 'how-to-use-api' },
                { text: 'Version comparison', link: 'version-comparison' },

            ]
        },
        {
            text: 'TRON',
            collapsed: false,
            items: [

                { text: 'TRX Transfer', link: 'trx/trx-transfer' },
                { text: 'RX Balance Inquiry', link: 'trx/trx-balance' },
                // { text: 'TRX Transaction Record', link: 'trx-transfer' },
                {
                    text: "USDT",
                    collapsed: false,
                    items: [
                        { text: 'USDT Transfer', link: 'usdt/usdt-transfer' },
                        { text: 'USDT Balance Inquiry', link: 'usdt/usdt-balance' },
                        { text: 'USDT Transaction Record', link: 'usdt/usdt-transaction' },
                    ]
                },

                {
                    text: "TRC20",
                    collapsed: false,
                    items: [
                        { text: 'TRC20 Token Transfer', link: 'trc20/trc20-transfer' },
                        { text: 'TRC20 Token Balance', link: 'trc20/trc20-balance' },
                        { text: 'TRC20 Token Transaction Record', link: 'trc20/trc20-contract-transaction' },
                    ]
                },
                {
                    text: "Wallet Management",
                    collapsed: false,
                    items: [
                        { text: 'Generate Wallet Address', link: 'wallet/generate-tron-address' },
                        { text: 'Get Address Details', link: 'wallet/tron-address-info' },
                    ]
                },
                {
                    text: "Order Management",
                    collapsed: false,
                    items: [
                        { text: 'Query Order List', link: 'order/tron-order-list' },
                        { text: 'Create Order', link: 'order/tron-create-order' },
                        { text: 'Query Order Details', link: 'order/tron-order-info' },
                    ]
                }
            ]
        },
    ]
}

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Introduction',
            link: '/guide/what-is-simpleUpay',
            activeMatch: '/guide/'
        },
        {
            text: 'API',
            link: '/api/how-to-use-api',
            activeMatch: '/api/'
        },
        // {
        //     text: "1.3.2",
        //     items: [
        //         {
        //             text: 'Changelog',
        //             link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
        //         },
        //         {
        //             text: 'Contributing',
        //             link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
        //         }
        //     ]
        // }
    ]
}
