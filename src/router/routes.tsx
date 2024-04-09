/*
 * @Author: heyong
 * @Date: 2024-04-09 14:10:27
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-09 14:27:49
 */
import { lazy } from 'react';

const ErrorBoundary = lazy(() => import('../pages/errorBoundary'));
const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Login = lazy(() => import('../pages/login'));

const routes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />
    },
    // 404路由放在路由配置表的最后
    {
        path: '*',
        element: <ErrorBoundary />,
        children: []
    }
]
export default routes;