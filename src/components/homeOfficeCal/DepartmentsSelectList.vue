<template>
    <v-select
        :items="departments"
        label="Department"
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
