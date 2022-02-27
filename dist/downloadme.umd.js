(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.downloadme = {}));
})(this, (function (exports) { 'use strict';

  /**
  * @description 创建用以下载的标签
  * @returns 
  */
  function createLink() {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    return a;
  }

  function download(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      name: ''
    };
    var name = options.name;
    var a = createLink();
    var url;
    var useURL = false;

    if (typeof source === 'string') {
      url = source;
    } else {
      url = URL.createObjectURL(source);
      useURL = true;
    }

    a.href = url;
    a.download = name;
    a.click();

    if (useURL) {
      URL.revokeObjectURL(url);
    }
  }

  exports.download = download;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
