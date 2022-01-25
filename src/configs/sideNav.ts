/**
 * 左侧导航配置
 */
export const sideNav = [
  {
    label: '导航',
    children: [
      {
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'glyphicon glyphicon-signal',
      },
      {
        label: '表单页面',
        icon: 'glyphicon glyphicon-edit',
        children: [
          {
            label: '常规表单',
            path: '/form/basic',
            children: [
              {
                label: '三级目录测试',
                path: '/form/basic/advanced',
              },
            ],
          },

          {
            label: '复杂表单',
            path: '/form/advanced',
          },

          {
            label: '向导',
            path: '/form/wizard',
          },

          {
            label: '代码编辑器',
            path: '/form/editor',
          },
        ],
      },
      {
        label: '列表示例',
        children: [
          {
            label: '列表',
            path: '/list/index',
          },
        ],
      },
    ],
  },
];
