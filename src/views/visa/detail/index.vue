<template>
    <div class="visaDetail">
      <h1>{{ processData }}</h1>
    </div>
</template>

<script>
    import { getVisaDetail } from '@/api/table'
    export default {
      name: 'index',
      data() {
        return {
          data: '',
        }
      },
      computed: {
        processData () {
          let arr = [];
          if ( this.data ) {
            arr.push( {key:'签证名称', value: this.data.title} );
            arr.push( {key:'签证编码', value: this.data.goodsNum} );
            arr.push( {key:'签证照片', value: this.data.image[0].goodPath,type: 'image' } );
            return arr;
          }

        }
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
            this.data = res.data;
          })
        }
      }
    }
</script>

<style scoped>

</style>
