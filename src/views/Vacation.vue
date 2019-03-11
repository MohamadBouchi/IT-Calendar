<template>
  <v-container>
    <v-layout class="mb-4">
      <v-flex>
        <DepartmentsSelectList />
        <DatePicker />
        <ToolbarBtn />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-sheet height="400">
          <v-calendar
            ref="calendar"
            :now="today"
            :value="today"
            color="primary"
            type="week"
          >
            <template v-slot:dayHeader="{ date }" >
              <template v-for="event in eventsMap[date]">
                <div
                  v-if="!event.time"
                  :key="event.title"
                  class="my-event-week"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>


            <template v-slot:dayBody="{ date, timeToY, minutesToPixels }">
              <template v-for="event in eventsMap[date]">
                <div
                  v-if="event.time"
                  :key="event.title"
                  :style="{ top: timeToY(event.time) + 'px', height: minutesToPixels(event.duration) + 'px' }"
                  class="my-event-week with-time-week"
                  @click="open(event)"
                  v-html="event.title"
                ></div>
              </template>
            </template>
            
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import DatePicker from '@/components/homeOfficeCal/DatePicker'
import DepartmentsSelectList from '@/components/homeOfficeCal/DepartmentsSelectList'
import ToolbarBtn from '@/components/homeOfficeCal/ToolbarBtn'

  export default {
    data: () => ({
      today: '2019-01-09',
      events: [
        {
          title: 'DWH-Team Weekly Meeting',
          date: '2019-01-07',
          time: '10:00',
          duration: 45
        },
        {
          title: 'Timo Herwix: Holiday',
          date: '2019-01-10'
        },
        {
          title: 'Arndt Schneider: reserved',
          date: '2019-01-09',
          time: '12:30',
          duration: 180
        }
      ]
    }),
    components: {
      ToolbarBtn,
      DepartmentsSelectList,
      DatePicker
    },
    computed: {
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
    },
    mounted () {
      this.$refs.calendar.scrollToTime('08:30')
    },
    methods: {
      open (event) {
        alert(event.title)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .my-event-week {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
    left: 4px;
    margin-right: 8px;
    position: relative;

    &.with-time-week {
      position: absolute;
      right: 4px;
      margin-right: 0px;
    }
  }
</style>