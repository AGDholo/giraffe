<template>
  <div class="min-h-screen bg-white font-sans text-primary">
    <AppBar />

    <main class="mx-auto mt-16 w-full max-w-[1185px] px-4 sm:px-6">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    Footer: () => import("@/components/layout/footer.vue"),
  },
};
</script>
