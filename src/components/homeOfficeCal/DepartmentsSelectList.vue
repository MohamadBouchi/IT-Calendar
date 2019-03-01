<template>
    <v-select
        :items="departments"
        label="Department"
        item-text="name"
    ></v-select>
</template>

<script>
export default {
    
    created(){
        this.$store.dispatch('getDepts')
    },
    computed: {
        departments() {
            return this.$store.state.departments
        }
    }
}
</script>
