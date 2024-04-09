/*
 * @Author: heyong
 * @Date: 2024-04-09 14:07:59
 * @LastEditors: heyong
 * @LastEditTime: 2024-04-09 14:19:42
 */
import { createBrowserRouter } from "react-router-dom";
import routes from './routes'

//可传第二个参数，配置base路径 { basename: "/app"}
const router = createBrowserRouter(routes);

export default router;