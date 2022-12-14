<template>
  <button @click="linkTo()" class="btn" :class="{'btn-red': error}" :disabled="disabled">
    {{ title }}
  </button>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    error: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    linkTo() {
      this.$router.push(this.link)
    }
  }
}
</script>
<style lang="css">
  .btn {
    border: 1px solid white;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: 500;
    background: transparent;
  }
  .btn-red {
    border-color: #f50000;
    color: #f50000;
  }
  .btn:disabled {
    color: #383838;
    background: #b7b7b7;
    cursor: not-allowed;
  }
</style>