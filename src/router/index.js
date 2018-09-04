import Vue from 'vue';
import Router from 'vue-router';

// in development-env not use lazy-loading,
// because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout';

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },

    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index')
        }]
    }
];

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
});

export const asyncRouterMap = [
    {
        path: '/user',
        component: Layout,
        alwaysShow: true,
        redirect: '/user/list',
        name: 'user',
        meta: {
            title: '用户管理',
            icon: 'user'
        },
        children: [
            {
                path: 'list',
                component: () => import('@/views/user/list'),
                meta: { title: '用户列表', roles: ['user-list']},
                name: 'user-list',
            }
        ]
    },
    {
        path: '/order',
        component: Layout,
        alwaysShow: true,
        redirect: '/order/list',
        name: 'order',
        meta: {
            title: '签证订单',
            icon: 'shopping'
        },
        children: [
            {
                path: 'list',
                name: 'order-list',
                component: () => import('@/views/order/list'),
                meta: { title: '订单列表'}
            },
            {
                path: 'check/:id',
                component: () => import('@/views/order/check'),
                hidden: true,
                name: 'order-check'
            },
            {
                path: 'edit/:id',
                component: () => import('@/views/order/edit'),
                hidden: true,
                name: 'order-edit'
            }
        ]
    },
    {
        path: '/travel-order',
        component: Layout,
        alwaysShow: true,
        redirect: '/travel-order/list',
        name: 'travel-order',
        meta: {
            title: '旅游订单',
            icon: 'travel-shopping'
        },
        children: [
            {
                path: 'list',
                name: 'travel-order-list',
                component: () => import('@/views/travel-order/list'),
                meta: { title: '订单列表', roles: ['travel-order-list'] }
            },
            {
                path: 'check/:id',
                component: () => import('@/views/travel-order/check'),
                hidden: true,
                name: 'travel-order-check'
            },
            {
                path: 'detail/:id',
                component: () => import('@/views/travel-order/detail'),
                hidden: true,
                name: 'travel-order-detail'
            },
            {
                path: 'refund-order',
                name: 'travel-order-refund-order',
                component: () => import('@/views/travel-order/refund-order'),
                meta: { title: '退款订单列表', roles: ['travel-order-refund-order'] }
            },
            {
                path: 'refund-check',
                name: 'travel-order-refund-check',
                component: () => import('@/views/travel-order/refund-check'),
                meta: { title: '退款审核', roles: ['travel-order-refund-check'] }
            },
            {
                path: 'refund-detail/:id',
                component: () => import('@/views/travel-order/refund-detail'),
                hidden: true,
                name: 'travel-order-refund-detail'
            },
        ]
    },
    {
        path: '/visa',
        component: Layout,
        alwaysShow: true,
        redirect: '/visa/list',
        name: 'visa',
        meta: {
            title: '签证管理',
            icon: 'visa'
        },
        children: [
            {
                path: 'list',
                component: () => import('@/views/visa/list'),
                meta: { title: '签证列表', roles: ['visa-list'] }
            },
            {
                path: 'add',
                component: () => import('@/views/visa/add'),
                meta: { title: '新增签证', roles: ['visa-add'] }
            },
            {
                path: 'detail',
                component: () => import('@/views/visa/detail'),
                hidden: true
            },
            {
                path: 'ratio',
                component: () => import('@/views/visa/ratio-change'),
                hidden: true
            },
            {
                path: 'undercarriage',
                component: () => import('@/views/visa/undercarriage'),
                hidden: true
            },
        ]
    },
    /* 资讯管理 */
    {
        path: '/news',
        component: Layout,
        alwaysShow: true,
        redirect: '/news/newslist',
        name: 'news',
        meta: {
        title: '资讯管理',
        icon: 'news'
        },
        children: [
            {
              path: 'newslist',
              name: 'news-list',
              component: () => import('@/views/news/newslist/list'),
              meta: { title: '资讯列表', roles: ['news-list'] }
            },
            {
              path: 'newsadd',
              name: 'news-add',
              component: () => import('@/views/news/newslist/add'),
              meta: { title: '新增资讯', roles: ['news-add'] },
              hidden: true
            },
            {
                path: 'newsedit',
                name: 'news-edit',
                component: () => import('@/views/news/newslist/add'),
                hidden: true
            },
            {
              path: 'newsdetail/:id',
              name: 'news-detail',
              component: () => import('@/views/news/newslist/detail'),
              hidden: true
            },
            {
              path: 'adslist',
              component: () => import('@/views/news/ads/list'),
              meta: { title: '广告列表', roles: ['ads-list'] },
              name: 'adslist'
            },
            {
              path: 'adsadd',
              name: 'ads-add',
              component: () => import('@/views/news/ads/add'),
              meta: { title: '新增广告', roles: ['ads-add']},
              hidden: true
            },
            {
              path: 'adsdetail/:id',
              name: 'ads-detail',
              component: () => import('@/views/news/ads/detail'),
              hidden: true
            },
            {
              path: 'adsedit',
              name: 'ads-edit',
              component: () => import('@/views/news/ads/add'),
              hidden: true
            }
        ]
    },
    {
        path: '/account',
        component: Layout,
        alwaysShow: true,
        redirect: '/account/list',
        name: 'account',
        meta: {
            title: '账号管理',
            icon: 'account'
        },
        children: [
            {
                path: 'list',
                name: 'account-list',
                component: () => import('@/views/account/list'),
                meta: { title: '账号列表', roles: ['account-list'] }
            },
            {
                path: 'add',
                component: () => import('@/views/account/add'),
                meta: { title: '新增账号', roles: ['account-add'] },
                name: 'account-add'
            },
            {
                path: 'edit',
                component: () => import('@/views/account/edit'),
                hidden: true,
                name: 'account-edit'
            },
            {
                path: 'detail',
                component: () => import('@/views/account/detail'),
                hidden: true,
                name: 'account-detail'
            }
        ]
    },
    {
        path: '/permission',
        component: Layout,
        alwaysShow: true,
        redirect: '/permission/list',
        name: 'permission',
        meta: {
            title: '角色和权限',
            icon: 'permission'
        },
        children: [
            {
                path: 'list',
                name: 'permission-list',
                component: () => import('@/views/permission/list'),
                meta: { title: '角色管理', roles: ['permission-list'] }
            },
            {
                path: 'edit/:id',
                component: () => import('@/views/permission/edit'),
                hidden: true,
                name: 'permission-edit'
            },
            {
                path: 'add',
                component: () => import('@/views/permission/add'),
                meta: { title: '新增角色', roles: ['permission-add'] },
                name: 'permission-add'
            }
        ]
    },
    {
        path: '/audit',
        component: Layout,
        alwaysShow: true,
        redirect: '/audit/ads',
        name: 'audit',
        meta: {
            title: '审核',
            icon: 'permission'
        },
        children: [
            {
                path: 'ads',
                name: 'audit-ads',
                component: () => import('@/views/audit/ads'),
                meta: { title: '广告审核', roles: ['audit-ads'] }
            }
        ]
    },
    {
        path: '/agent',
        component: Layout,
        alwaysShow: true,
        redirect: '/agent/list',
        name: 'agent',
        meta: {
            title: '代理商管理',
            icon: 'eye'
        },
        children: [
            {
                path: 'list',
                name: 'agent-list',
                component: () => import('@/views/agent/list'),
                meta: { title: '代理商列表', roles: ['agent-list'] }
            },
            {
                path: 'edit',
                component: () => import('@/views/agent/edit'),
                name: 'agent-edit',
                hidden: true,
                meta: { title: '代理商编辑' }
            },
            {
                path: 'detail',
                component: () => import('@/views/agent/detail'),
                name: 'agent-detail',
                hidden: true,
                meta: { title: '代理商详情' }
            },
            {
                path: 'add',
                component: () => import('@/views/agent/add'),
                name: 'order-add',
                meta: { title: '新增代理商', roles: ['agent-add'] }
            }
        ]
    },


    {
        path: '/goods',
        component: Layout,
        alwaysShow: true,
        redirect: '/goods/list',
        name: 'goods',
        meta: {
            title: '商品管理',
            icon: 'visa'
        },
        children: [
            {
                path: 'list',
                component: () => import('@/views/goods/list'),
                meta: { title: '商品列表', roles: ['goods-list'] }
            },
            {
                path: 'add',
                component: () => import('@/views/goods/add'),
                meta: { title: '新增商品', roles: ['goods-add'] }
            },
            {
                path: 'edit',
                component: () => import('@/views/goods/edit'),
                meta: { title: '编辑商品' },
                hidden: true
            },
            {
                path: 'detail',
                component: () => import('@/views/goods/detail'),
                hidden: true
            },
            {
                path: 'ratio',
                component: () => import('@/views/goods/ratio-change'),
                hidden: true
            },
            {
                path: 'undercarriage',
                component: () => import('@/views/goods/undercarriage'),
                hidden: true
            },
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
];

