/**
 * 暂时只支持以下几种代码格式，入药增加，需同时在构建中增加相应 worker 打包支持
 */

(self as any).MonacoEnvironment = {
  getWorkerUrl: function (moduleId: any, label: string) {
    if (label === 'json') {
      return '/json.worker.bundle.js';
    }
    if (label === 'css') {
      return '/css.worker.bundle.js';
    }
    if (label === 'html') {
      return '/html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '/ts.worker.bundle.js';
    }
    return '/editor.worker.bundle.js';
  },
};
