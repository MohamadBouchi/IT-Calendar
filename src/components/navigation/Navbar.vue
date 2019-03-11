<template>
    <nav>
        <v-toolbar flat app dark>
            <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer" v-if='user.uname!=="none"'></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">EDV - </span>
                <span> {{ title }} Calendar</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color='grey' v-if='user.uname!=="none"' @click="signout">
                <span>Sign Out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <Sidebar :drawer='drawer' v-if='user.uname!=="none"' @sideBarCreated="sideBarCreated"/>
    </nav>
</template>

<script>
import Sidebar from './Sidebar';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            drawer: false,
            title: ''
        }
    },
    components: {
        Sidebar
    },
    methods:{
        signout(){
            localStorage.removeItem('user')
            this.$store.dispatch('auth/signout')
        },
        sideBarCreated(selectedOption){
            this.title = selectedOption
        }
    },
    computed: {
        ...mapState({user: state => state.auth}),   
    }
}
</script>
