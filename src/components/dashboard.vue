<template>
  <div class="dashboard">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <b-img
            id="foto"
            v-bind="mainProps"
            :src="require('../../image/img4.jpg')"
            rounded="circle"
            alt="Circle image"
          />
          <!-- <img :src="require('../../image/mj.jpeg')"> -->
        </div>
        <div class="col-md-6">
          <h1 id="title">Arief Dwi Purnomo</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import image from "./assets/logo.png";

export default {
  name: "dashborad",
  data() {
    return {
      mainProps: {
        width: 370,
        height: 370,
        class: "m1"
      }
    };
  }
};
</script>

<style>
#foto {
  margin-top: 80px;
}

#title {
  margin-top: 160px;
  margin-left: 90px;
  font-size: 80px;
}
</style>
