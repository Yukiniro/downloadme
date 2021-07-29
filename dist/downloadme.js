(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.downloadme = factory());
}(this, (function () { 'use strict';

  var index = (function () {
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

    return {
      /**
       * @description 下载
       * @param source <string | file | blob>
       * @param options
       * @param options.name
       */
      download: function download(source) {
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
    };
  })();

  return index;

})));
