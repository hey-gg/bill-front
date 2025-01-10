/*
 * @Author: heyong
 * @Date: 2024-04-09 11:30:07
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-09 16:33:34
 */
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import 'lib-flexible'
import './index.css'

import router from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>,
)
