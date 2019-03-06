<template>
    <nav>
        <v-toolbar flat app dark>
            <v-toolbar-side-icon class="grey--text" @click="drawer=!drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">EDV </span>
                <span> Calendar</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat color='grey'>
                <span>Sign Out</span>
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <Sidebar :drawer='drawer' />
    </nav>
</template>

<script>
import Sidebar from './Sidebar';

export default {
    components: {
        Sidebar
    },
    data() {
        return {
            drawer: false
        }
    }
}
</script>
