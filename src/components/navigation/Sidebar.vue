<template>
    <v-navigation-drawer v-model='drawer' app class="grey lighten-4">
        <v-list>
            <v-list-group no-action prepend-icon="calendar_today">

                <v-list-tile slot="activator">
                    <v-list-tile-content>
                        <v-list-tile-title>Calendars</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

                <v-list-tile @click='tile=!tile' :key="1" router :to='"/"'>
                    <v-list-tile-action>
                        <v-icon>cast</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Home Office Calendar</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                
                <v-list-tile @click='tile=!tile' :key="2" router :to='"/vacation"'>
                    <v-list-tile-action>
                        <v-icon>local_offer</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>Vacation Calendar</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: ['drawer'],
    data() {
        return {
            tile:false
        }
    }
}
</script>
