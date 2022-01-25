/**
 * 定义路由和渲染组件的关系映射
 */
import * as React from 'react';

import Dashboard from '../pages/dashboard.json';
import BasicForm from '@/pages/form/basic.json';
import Advanced from '../pages/form/advanced.json';
import Wizard from '../pages/form/wizard.json';
import Editor from '../pages/form/editor.json';
import List from '@/pages/list/index.json';
import NotFound from '@/pages/404';
import schema2component from '@/utils/schema2component';

const path2components = [
  {
    path: '/',
    component: schema2component(Dashboard),
  },
  {
    path: '/404',
    component: NotFound,
  },
  {
    path: '/dashboard',
    component: schema2component(Dashboard),
  },
  {
    path: '/form/basic',
    component: schema2component(BasicForm),
  },
  {
    path: '/form/basic/advanced',
    component: schema2component(Advanced),
  },
  {
    path: '/form/advanced',
    component: schema2component(Advanced),
  },
  {
    path: '/form/wizard',
    component: schema2component(Wizard),
  },
  {
    path: '/form/editor',
    component: schema2component(Editor),
  },
  {
    path: '/list/index',
    component: schema2component(List),
  },
];

export default path2components;
