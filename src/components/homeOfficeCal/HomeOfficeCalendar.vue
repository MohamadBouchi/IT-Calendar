<template>
  <v-sheet height="500">
    <v-calendar
      :now="today"
      :value="today"
      color="primary"
    >
      <template
        slot="day"
        slot-scope="{ date }"
      >
        <template v-for="event in eventsMap[date]">
          <v-menu
            :key="event.title"
            v-model="event.open"
            full-width
            offset-x
          >
            <div
              v-if="!event.time"
              slot="activator"
              v-ripple
              class="my-event"
              v-html="event.title"
            ></div>
            <v-card
              color="grey lighten-4"
              min-width="350px"
              flat
            >
              <v-toolbar
                color="primary"
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
              <v-card-actions>
                <v-btn
                  flat
                  color="secondary"
                >
                  Cancel
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
  export default {
    data: () => ({
      today: '2019-03-01',
      events: [
        {
          title: 'Mohamed',
          details: 'Home Office',
          date: '2019-03-02',
          open: false
        }
      ]
    }),
    computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>