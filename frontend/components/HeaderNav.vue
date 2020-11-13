<template>
  <header class="bg-gray-900 sm:flex sm:justify-between">
    <div class="flex items-center justify-between px-4 py-3">
      <div>
        <a href="/"><img class="h-8" src="/images/invoke-logo-icon-white.png"
                                     alt="logo"/></a>
      </div>
      <div class="sm:hidden">
        <button @click="isOpen = !isOpen" type="button" id="hamburger-nav-icon" class="text-gray-500 hover:text-white
          focus:text-white focus:outline-none">
          <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    <div :class="isOpen ? 'block' : 'hidden'" class="text-gray-200 px-2 py-4
      sm:flex">
      <a href="/" class="block p-2 rounded hover:bg-gray-800">Home</a>
      <a href="/about" class="block p-2 rounded hover:bg-gray-800">About</a>
      <a href="/posts" class="block p-2 rounded hover:bg-gray-800">Posts</a>
    </div>
  </header>
</template>

<script>
module.exports = {
  data: function() {
    return {
      isOpen: false,
    }
  }
}
</script>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>k
