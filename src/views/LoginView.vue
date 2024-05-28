<script setup>
import Login from '@/components/Login.vue'
import CreateAccount from '@/components/CreateAccount.vue'
import { useLoginStore } from '../stores/loginStore.js'
import { computed, defineProps, toRaw, ref } from 'vue'
</script>
<template>
  <CreateAccount />
</template>
<style></style>
