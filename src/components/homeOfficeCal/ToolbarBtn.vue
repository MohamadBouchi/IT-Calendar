<template lang="pug">
    .right
        v-btn(color="warning") reset
        v-btn(color="success", @click="submit") submit
</template>

<script>
export default {
    methods: {
        submit() {
            this.$store.dispatch('submitHomeOffice')
        }
    }
}
</script>
