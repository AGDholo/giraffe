<template>
  <div class="grid gap-8 xl:grid-cols-[2fr_1fr]">
    <div>
      <div class="my-2">
        <h2 class="text-4xl font-bold">Our Authors</h2>
      </div>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="i in 8"
          :key="i"
          class="rounded transition-all duration-200 hover:bg-white hover:shadow-xl"
        >
          <img
            class="h-[300px] w-full rounded-2xl object-cover shadow"
            src="https://cdn.pixabay.com/photo/2021/01/30/20/04/sheltie-5965187_1280.jpg"
            alt=""
          />
          <div class="text-center">
            <span class="relative -top-[50px] -mb-[50px] inline-flex h-[86px] w-[86px] items-center justify-center rounded-full bg-accent text-white">
              <i class="mdi mdi-feather text-6xl"></i>
            </span>
            <div class="pt-4 text-2xl font-bold text-primary">Yan Lee</div>
            <div class="py-4 text-base">
              Ultrices sagittis orci a scelerisque. Massa placerat
              duis ultricies lacus sed turpis tincidunt id.
            </div>
            <div class="pb-4">
              <button class="h-10 w-10 text-2xl" aria-label="Facebook"><i class="mdi mdi-facebook"></i></button>
              <button class="h-10 w-10 text-2xl" aria-label="Twitter"><i class="mdi mdi-twitter"></i></button>
              <button class="h-10 w-10 text-2xl" aria-label="YouTube"><i class="mdi mdi-youtube"></i></button>
              <button class="h-10 w-10 text-2xl" aria-label="Instagram"><i class="mdi mdi-instagram"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <siderbar />
    </div>
  </div>
</template>

<script>
export default {
