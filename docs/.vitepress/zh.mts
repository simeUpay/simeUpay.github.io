import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
    lang: 'zh-Hans',
    title: "simpleUpay",
    description: "一款能让你放心的高性能区块链支付网关",
    themeConfig: {
        siteTitle: 'simpleUpay',
        nav: nav(),
        sidebar: {
            '/zh/guide/': { base: '/zh/guide/', items: sidebarGuide() },
            '/zh/api/': { base: '/zh/api/', items: sidebarApi() },
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: '介绍',
            link: '/zh/guide/what-is-simpleUpay',
            activeMatch: '/zh/guide/'
        },
        {
            text: 'API',
            link: '/zh/api/how-to-use-api',
            activeMatch: '/zh/api/'
        },
      
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '基本介绍',
            collapsed: false,
            items: [
                { text: 'simpleUpay是什么', link: 'what-is-simpleUpay' },
                // { text: '为什么选择simpleUpay', link: 'how-to-build-simpleUpay' },
                // { text: 'simpleUpay如何部署', link: 'how-to-build-simpleUpay' },
                // { text: '常见问题', link: 'how-to-build-simpleUpay' },
            ]
        },
    ]
}

function sidebarApi(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: '基本使用',
            collapsed: false,
            items: [
                { text: '如何使用simpleyUpay Api', link: 'how-to-use-api' },
                { text: '版本对比', link: 'version-comparison' },

            ]
        },
        {
            text: 'TRON',
            collapsed: false,
            items: [
                { text: 'TRX转账', link: 'trx/trx-transfer' },
                { text: 'TRX余额查询', link: 'trx/trx-balance' },
                // { text: 'TRX交易记录查询', link: 'trx/trx-transaction' }, 
                
                {
                    text: "USDT",
                    collapsed: false,
                    items: [
                        { text: 'USDT转账', link: 'usdt/usdt-transfer' },
                        { text: 'USDT余额查询', link: 'usdt/usdt-balance' },
                        { text: 'USDT交易记录查询', link: 'usdt/usdt-transaction' },
                    ]
                },
                {
                    text: "TRC20",
                    collapsed: false,
                    items: [
                        { text: 'TRC20代币转账', link: 'trc20/trc20-transfer' },
                        { text: 'TRC20代币余额查询', link: 'trc20/trc20-balance' },
                        { text: 'TRC20交易记录查询', link: 'trc20/trc20-contract-transaction' },
                    ]
                },
                {
                    text: "钱包管理",
                    collapsed: false,
                    items: [
                        { text: '创建钱包地址', link: 'wallet/generate-tron-address' },
                        { text: '获取钱包详情', link: 'wallet/tron-address-info' },
                    ]
                },
                {
                    text: "订单管理",
                    collapsed: false,
                    items: [
                        { text: '查询订单列表', link: 'order/tron-order-list' },
                        { text: '创建支付订单', link: 'order/tron-create-order' },
                        { text: '订单详情', link: 'order/tron-order-info' },
                    ]
                }
            ]
        },
    ]
}


export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
    zh: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    }
}