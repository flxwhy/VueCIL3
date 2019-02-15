<template>
<div class="home">
        <yd-button size="large" type="primary">primary</yd-button>
        <yd-button size="large" type="danger">danger</yd-button>
        <yd-button size="large" type="warning">warning</yd-button>
        <yd-button size="large" type="disabled" disabled>disabled</yd-button>
        <yd-button size="large" type="hollow">hollow</yd-button>
        <yd-button size="large" bgcolor="#000" color="#FFF">Custom Color</yd-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { Button, Cell } from 'vant'
export default {
  name: 'home',
  components: {
  
  },
  data() {
    return {
      value:[]
    }
  },
  methods:{
    clickconsole:function(val){
      console.log(val)
    }

  }
}
</script>
