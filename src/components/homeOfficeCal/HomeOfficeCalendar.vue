<template>
  <v-sheet height="500">
    <v-calendar
      today
      type="month"
      v-model="start"
      color="primary"
      class='mycalendar'
    >
      <template
        slot="day"
        slot-scope="{ date }"
      >
        <template v-for="event in eventsMap[date]">
          <v-menu
            :key="event.id"
            v-model="event.open"
            full-width
            offset-x
          >
            <div
              v-if="!event.time"
              slot="activator"
              v-ripple
              class="my-event"
              :style="event.details==='DWH' ? {background:'#388E3C'}:event.details==='WWS'?{background:'#1867c0'}:{background:'#FF9800'}"
              v-html="event.title"
            ></div>
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                :color="event.details==='DWH' ? 'success':event.details==='WWS'?'primary':'warning'"
                dark
              >
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-toolbar-title v-html="event.title"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-title primary-title>
                <span v-html="event.details"></span>
              </v-card-title>
              <v-card-actions v-if="event.emp_id===Number(getUser.id)">
                <v-spacer></v-spacer>
                <v-btn
                  flat
                  color="secondary"
                  @click="cancelEvent(event.id)"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </template>
      </template>
    </v-calendar>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { bus } from '../../main'

  export default {
    data: () => ({
      start: '2019-03-01'
    }),
    created(){
        this.$store.dispatch('homeoffice/getHomeOffice', '21')
        bus.$on('setStartDate', (startDate) => {
          this.start=startDate+'-01'
      });
    },
    computed: {
      ...mapGetters('homeoffice',['getHomeofficeDates']),
      ...mapGetters('auth',['getUser']),
      eventsMap () {
        return this.getHomeofficeDates
      }

    },
    methods: {
      ...mapActions('homeoffice',['cancelEvent']),
      open (event) {
        alert(event.title)
      }
    }
  }
</script>

<style lang="stylus">
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    color: #ffffff;
    border: 1px solid;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  };
  .mycalendar .v-calendar-weekly__week {
    flex: 1 1 auto !important;
  }
</style>