<template>
  <div>
    <div class="crumb_navigation">
      Navigation:
      <span class="current">Home</span>
    </div>
    <div class="left_content">
      <div class="title_box">Categories</div>
      <ul class="left_menu" v-for="(item, index) in leftMenu" :key="index">
        <li :class="item.className">
          <a href="#">{{item.name}}</a>
        </li>
      </ul>
      <div class="title_box">Special Products</div>
      <div class="border_box">
        <div class="product_title">
          <a href="#">Makita 156 MX-VL</a>
        </div>
        <div class="product_img">
          <a href="#">
            <img src="@/assets/images/p1.jpg" alt border="0" />
          </a>
        </div>
        <div class="prod_price">
          <span class="reduce">350$</span>
          <span class="price">270$</span>
        </div>
      </div>
      <div class="title_box">Newsletter</div>
      <div class="border_box">
        <input type="text" name="newsletter" class="newsletter_input" value="your email" />
        <a href="#" class="join">subscribe</a>
      </div>
      <div class="banner_adds">
        <a href="#">
          <img src="@/assets/images/bann2.jpg" alt border="0" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: "LeftMenu",
  data() {
    return {
      leftMenu: [
        {
          id: 1,
          name: "Power Tools",
          className: "odd"
        },
        {
          id: 2,
          name: "Air Tools",
          className: "even"
        },
        {
          id: 3,
          name: "Hand Tools",
          className: "odd"
        },
        {
          id: 4,
          name: "Accessories",
          className: "even"
        },
        {
          id: 5,
          name: "Workwear",
          className: "odd"
        },
        {
          id: 6,
          name: "Spare Parts",
          className: "even"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>