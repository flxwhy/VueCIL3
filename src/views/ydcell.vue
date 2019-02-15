<template>
<div>
        <yd-cell-group>
            <yd-cell-item>
                <span slot="left">左边内容一</span>
                <span slot="right">右边内容一</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">左边内容二</span>
                <span slot="right">右边内容二</span>
            </yd-cell-item>
        </yd-cell-group>

        <yd-cell-group>
            <yd-cell-item>
                <span slot="left">左边内容一</span>
                <span slot="right">右边内容一</span>
            </yd-cell-item>
            <yd-cell-item>
                <span slot="left">左边内容二</span>
                <span slot="right">右边内容二</span>
            </yd-cell-item>
        </yd-cell-group>
</div>
</template>

<script>
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

<style>



</style>
