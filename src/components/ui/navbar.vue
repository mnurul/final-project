<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container">
        <b-navbar-brand>
          <router-link to="/" class="dropdown-item" href="#">
            Hay, I'm
            <strong>Arief</strong>
          </router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>

        <b-collapse is-nav id="nav_collapse" class="justify-content-md-center">
          <b-navbar-nav>
            <!-- <router-link to="/myself" class="dropdown-item" href="#">
              <i class="fa fa-briefcase"></i>&nbsp My Self
            </router-link>-->
            <!-- <b-nav-item href="#">My Self</b-nav-item> -->
            <b-nav-item>
              <router-link to="/myself" class="dropdown-item" href="#">
                <i class="fa fa-briefcase"></i>&nbsp My Self
              </router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/myactivity" class="dropdown-item" href="#">
                <i class="fa fa-briefcase"></i>&nbsp My Activity
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

