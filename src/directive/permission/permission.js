import store from '@/store';

export default{
  inserted(el, binding, vnode) {
    const { value } = binding;
    const roles = store.getters && store.getters.roles;
    const admin = roles.indexOf('admin')>-1;

    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role);
      });

      if (!hasPermission && !admin) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else if (value!='all') {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`);
    }
  }
};
