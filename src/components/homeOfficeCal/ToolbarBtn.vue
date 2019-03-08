<template lang="pug">
    .right
        v-btn(color="error", @click="resetAll") reset
        v-btn(color="warning", @click="clearAll") clear selected
        v-btn(color="success", @click="submit") submit
</template>

<script>
export default {
    methods: {
        submit() {
            this.$store.dispatch('homeoffice/submit')
            this.$emit('resetDatePicker')
        },
        resetAll() {
            this.$emit('resetDatePicker')
            this.$store.dispatch('homeoffice/resetAll')
        },
        clearAll() {
            this.$emit('resetDatePicker')
        }
    }
}
</script>
