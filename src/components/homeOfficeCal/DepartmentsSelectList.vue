<template>
    <v-select
        :items='getDepts'
        label='Department'
        item-text='name'
        item-value='id'
        v-model='selected'
        @change='selectDept'
    ></v-select>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data: () => ({
        selected:21
    }),
    created(){
        this.$store.dispatch('departments/getDepts')
    },
    computed: {
        ...mapGetters('departments',['getDepts'])
    },
    methods: {
        selectDept(id){
            this.$store.dispatch('homeoffice/getHomeOffice', id)
        }
    }
}
</script>
