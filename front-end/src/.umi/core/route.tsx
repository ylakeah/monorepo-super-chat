// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/","parentId":"@@/global-layout","id":"1"},"2":{"path":"/login","parentId":"@@/global-layout","id":"2"},"3":{"path":"/register","parentId":"@@/global-layout","id":"3"},"4":{"path":"/changePassword","parentId":"@@/global-layout","id":"4"},"@@/global-layout":{"id":"@@/global-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import(/* webpackChunkName: "p__index" */'@/pages/index.tsx')),
'2': React.lazy(() => import(/* webpackChunkName: "p__login" */'@/pages/login.tsx')),
'3': React.lazy(() => import(/* webpackChunkName: "p__register" */'@/pages/register.tsx')),
'4': React.lazy(() => import(/* webpackChunkName: "p__ChangePasswordPage" */'@/pages/ChangePasswordPage.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'/Users/haekaly/SourceTree/gigradar-super-chat/front-end/src/layouts/index.tsx')),
},
  };
}
