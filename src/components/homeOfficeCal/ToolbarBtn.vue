<template lang="pug">
    .right
        v-btn(color="warning", @click="resetAll") reset
        v-btn(color="success", @click="submit") submit
</template>

<script>
export default {
    methods: {
        submit() {
            this.$store.dispatch('homeoffice/submit')
        },
        resetAll() {
            this.$emit('resetDatePicker')
            this.$store.dispatch('homeoffice/resetAll')
        }
    }
}
</script>
