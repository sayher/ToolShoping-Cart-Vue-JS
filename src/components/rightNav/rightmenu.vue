<template>
  <div>
    <div class="right_content">
      <div class="title_box">Search</div>
      <div class="border_box">
        <input type="text" name="newsletter" class="newsletter_input" value="keyword" />
        <a href="#" class="join">search</a>
      </div>
      <div class="shopping_cart">
        <div class="title_box">Shopping cart</div>
        <div class="cart_details">
          3 items
          <br />
          <span class="border_cart"></span> Total:
          <span class="price">350$</span>
        </div>
        <div class="cart_icon">
          <a href="#">
            <img src="@/assets/images/shoppingcart.png" alt width="35" height="35" border="0" />
          </a>
        </div>
      </div>
      <div class="title_box">What’s new</div>
      <div class="border_box">
        <div class="product_title">
          <a href="#">Motorola 156 MX-VL</a>
        </div>
        <div class="product_img">
          <a href="#">
            <img src="@/assets/images/p2.jpg" alt border="0" />
          </a>
        </div>
        <div class="prod_price">
          <span class="reduce">350$</span>
          <span class="price">270$</span>
        </div>
      </div>
      <div class="title_box">Manufacturers</div>
      <ul class="left_menu">
        <li class="odd">
          <a href="#">Bosch</a>
        </li>
        <li class="even">
          <a href="#">Samsung</a>
        </li>
        <li class="odd">
          <a href="#">Makita</a>
        </li>
        <li class="even">
          <a href="#">LG</a>
        </li>
        <li class="odd">
          <a href="#">Fujitsu Siemens</a>
        </li>
        <li class="even">
          <a href="#">Motorola</a>
        </li>
        <li class="odd">
          <a href="#">Phillips</a>
        </li>
        <li class="even">
          <a href="#">Beko</a>
        </li>
      </ul>
      <div class="banner_adds">
        <a href="#">
          <img src="@/assets/images/bann1.jpg" alt border="0" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable*/
export default {
  name: "RightMenu",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>