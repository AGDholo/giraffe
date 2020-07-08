<template>
  <v-app>
    <AppBar></AppBar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer></Footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    Footer: () => import("@/components/layout/footer.vue"),
  },
  data: () => ({}),
};
</script>
