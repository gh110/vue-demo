<template>
  <div>111</div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},

  created() {
    //初始化方法
    this.init();
  },

  computed: {},

  methods: {
    init() {}
  }
};
</script>
<style lang='scss' scoped>
.df {
  display: flex;
}
.tc {
  text-align: center;
}
.flex-1 {
  flex: 1;
}
.flex-Jcenter {
  justify-content: center;
}
.flex-Acenter {
  align-items: center;
}
.headerBox {
  width: 100%;
  height: 50px;
}
.headerBox__icon {
  width: 94.5px;
  height: 20px;
  margin-top: 15.5px;
}
.headerBox__buttonGroup {
  margin-left: 145px;
  margin-top: 15.5px;
  font-size: 28px;
}
.headerBox__buttonGroup--choose {
  width: 80px;
  height: 25px;
  background: #eba612;
  border-radius: 12.5px;
  color: #fff;
  line-height: 25px;
}
.headerBox__buttonGroup--noChoose {
  width: 80px;
  height: 25px;
  color: #fff;
  line-height: 25px;
}
</style>