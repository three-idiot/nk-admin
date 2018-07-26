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
        // console.log('吴志鹏', this.$route);
        this.fetchData()
      },
      methods: {
        fetchData() {
          let id = this.$route.query.id;
          let url = '/gooddetail/' + id;
          getVisaDetail( url ).then( res => {
            console.log( res );
          })
        }
      }
    }
</script>

<style scoped>

</style>
