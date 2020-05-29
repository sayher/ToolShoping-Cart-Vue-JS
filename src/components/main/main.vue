<template>
  <div id="main_container">
    <Header />
    <div id="main_content">
      <MenuTab />
      <LeftMenu />
      <div class="center_content">
        <router-view></router-view>
      </div>
      <RightMenu />
    </div>
    <Footer />
  </div>
</template>

<script>
/* eslint-disable*/
import Header from "../header/header";
import MenuTab from "_c/header/menutab";
import LeftMenu from "_c/leftNav/leftmenu";
import RightMenu from "_c/rightNav/rightmenu";
import Footer from "_c/footer/footer";

export default {
  name: "Main",
  data() {
    return {};
  },
  components: {
    Header,
    MenuTab,
    LeftMenu,
    RightMenu,
    Footer
  }
};
</script>

<style lang="scss" scoped>
</style>