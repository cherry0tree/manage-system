<template>
<div>
  <SvgIcon iconClass="car" class="backtotop"/>
</div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
export default {
  name: 'svgr',
  components: { SvgIcon }
};
</script>
<style scoped>
.backtotop {
  width: 4.5rem;
  height: 4.5rem;
}
</style>