<script setup lang="ts">
defineProps({
  filter: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
</script>

<template>
  <div
    :class="[route.path === '/' ? 'bottom-8' : 'bottom-16']"
    class="justify-center h-20 flex flex-col inset-x-0 mx-auto fixed w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] 2xl:w-[30%] z-[9999] rounded-xl backdrop-blur-lg after:rounded-full border border-1 border-white/30"
  >
    <div
      class="flex justify-between items-center h-full z-50"
      :class="'pl-6 pr-3'"
    >
      <slot name="logo" />
      <div
        class="text-white text-sm text-center"
      >
        <slot name="description" />
      </div>

      <slot name="buttons" />
    </div>
  </div>
</template>
