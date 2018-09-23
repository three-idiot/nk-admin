import Vue from "vue";

export default {
  install: (vue, options) => {
    Object.defineProperty(Vue.prototype, '$imgUploadApi', {
      value: img_upload_api // 来自于webpack define plugin的定义，根据环境不同，这个值会动态变化
    });
  }
}