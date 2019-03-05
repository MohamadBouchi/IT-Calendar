<template>
    <div class="right">
        <v-btn color="warning">Reset</v-btn>
        <v-btn color="success" @click="submit">Submit</v-btn>
    </div>
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
