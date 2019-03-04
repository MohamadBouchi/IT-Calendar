<template>
    <v-select
        :items='departments'
        label='Department'
        item-text='name'
        item-value='id'
        v-model='selected'
        @change='selectDept'
    ></v-select>
</template>

<script>
export default {
    data: () => ({
        selected:21
    }),
    created(){
        this.$store.dispatch('getDepts')
    },
    computed: {
        departments() {
            return this.$store.state.departments
        }
    },
    methods: {
        selectDept(id){
            this.$store.dispatch('getHomeOffice', id)
        }
    }
}
</script>
