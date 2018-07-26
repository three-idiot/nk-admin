<template>
    <div class="visaDetail">
      <h1>你好呀</h1>
    </div>
</template>

<script>
    import { getVisaDetail } from '@/api/table'
    export default {
      name: 'index',
      data() {
        return {}
      },
      created() {
        this.fetchData()
      },
      methods: {
        getQueryString(name) {
          let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
          let r = window.location.search.substr(1).match(reg);
          if (r != null) return decodeURIComponent(r[2]);
          return null;
        },
        fetchData() {
          let id = this.getQueryString('id');
          console.log('哈哈', id);
          let url = '/gooddetail/' + id;
          console.log('调试', url);
          getVisaDetail( url ).then( res => {
            console.log( '调试', res );
          })
        }
      }
    }
</script>

<style scoped>

</style>
