<template>
  <div class="myactivity">
    <div class="container">
      <!-- <img :src="require('../../../image/img1.jpg')"> -->
      <div>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          />
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22"
          />
        </b-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myactivity"
};
</script>

