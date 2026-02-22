<template>
  <div class="flex min-h-screen items-center justify-center">
    <div class="w-full md:w-1/2">
      <div class="rounded bg-white py-6 shadow">
        <div class="flex justify-center">
          <div class="text-4xl">Login</div>
        </div>
        <div class="p-4">
          <label class="mb-4 block">
            <span class="mb-2 block text-sm text-secondary">Email</span>
            <input class="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-primary" />
          </label>
          <label class="mb-4 block">
            <span class="mb-2 block text-sm text-secondary">Password</span>
            <input class="h-12 w-full rounded border border-gray-300 px-4 outline-none focus:border-primary" type="password" />
          </label>
          <div class="text-right">
            <button class="rounded bg-primary px-4 py-2 text-white">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
