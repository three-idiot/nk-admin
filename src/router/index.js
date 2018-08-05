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
            title: '订单管理',
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
                meta: { title: '代理商列表' }
            },
            {
                path: 'check/:id',
                component: () => import('@/views/agent/check'),
                name: 'order-check',
                meta: { title: '代理商审核' }
            },
            {
                path: 'add/:id',
                component: () => import('@/views/agent/add'),
                name: 'order-edit',
                meta: { title: '新增代理商' }
            }
        ]
    },


    { path: '*', redirect: '/404', hidden: true }
];

