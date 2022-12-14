<template>
  <div>
    <navigation></navigation>
    <p>about</p>
    <v-button link="/" title="Home"></v-button>
    <v-button link="/about" title="About"></v-button>
    <v-button link="/category" title="Category"></v-button>
  </div>
</template>
<script>
import VButton from "@/components/VButton.vue";
export default {
  components: {
    'v-button': VButton
  }
}
</script>