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
                meta: { title: '用户列表' }
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
                meta: { title: '订单列表' }
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
                meta: { title: '订单列表' }
            },
            {
                path: 'refund-order',
                name: 'travel-order-refund-order',
                component: () => import('@/views/travel-order/refund-order'),
                meta: { title: '退款订单列表' }
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
            }
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
                meta: { title: '签证列表' }
            },
            {
                path: 'add',
                component: () => import('@/views/visa/add'),
                meta: { title: '新增签证' }
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
              meta: { title: '资讯列表' }
            },
            {
              path: 'newsadd',
              component: () => import('@/views/news/newslist/add'),
              meta: { title: '新增资讯' },
              hidden: true
            },
            {
                path: 'newsedit',
                component: () => import('@/views/news/newslist/edit'),
                hidden: true
            },
            {
              path: 'newsdetail',
              component: () => import('@/views/news/newslist/detail'),
              hidden: true
            },
            {
              path: 'newsundercarriage',
              component: () => import('@/views/news/newslist/undercarriage'),
              hidden: true
            },
            {
              path: 'adslist',
              component: () => import('@/views/news/ads/list'),
              meta: { title: '广告列表' },
              name: 'ads'
            },
            {
              path: 'adsadd',
              component: () => import('@/views/news/ads/add'),
              meta: { title: '新增广告' },
              hidden: true
            },
            {
              path: 'adsdetail',
              component: () => import('@/views/news/ads/detail'),
              hidden: true
            },
            {
              path: 'adsedit',
              component: () => import('@/views/news/ads/edit'),
              hidden: true
            },
            {
              path: 'adsundercarriage',
              component: () => import('@/views/news/ads/undercarriage'),
              hidden: true
            },
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
                meta: { title: '角色管理' }
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
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
];
