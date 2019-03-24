<template>
  <div class="myself">
    <div class="container">
      <div id="datamyself">
        <b-jumbotron>
          <template slot="header">Arief</template>

          <template slot="lead">
            Umur saya 17 tahun, saya bekerja sebagai Admin di salah satu perusahaan swasta di Jakarta
            dan saya tinggal di Jakarta Selatan
          </template>

          <hr class="my-4">

          <p>Saya sekarang sedang melakukan kegiatan Bootcamp di Majapahit</p>
        </b-jumbotron>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myself"
};
</script>

<style>
/* .myself {
  margin-left: -120px;
  margin-top: -49px;
  width: 1350px;
  height: 600px;
} */

#datamyself {
}
</style>
