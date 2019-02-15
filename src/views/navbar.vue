<template>
<div class="navbar">
<ul>
<li><router-link to="/food">商品</router-link></li>
<li><router-link  to="/rating">评价</router-link></li>
<li><router-link  to="/seller">商家</router-link></li>

</ul>
<router-view></router-view>
</div>
</template>
<script>
export default {
    name:'navbar'
}
</script>
<style>

</style>
