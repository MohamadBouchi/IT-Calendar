<template>
  <v-container>
    <v-layout class="mb-4">
      <v-flex>
        <DepartmentsSelectList/>
        <NewEntryPicker />
        <ToolbarBtn />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <HomeOfficeCalendar />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import HomeOfficeCalendar from '@/components/homeOfficeCal/HomeOfficeCalendar'
import NewEntryPicker from '@/components/homeOfficeCal/NewEntryPicker'
import DepartmentsSelectList from '@/components/homeOfficeCal/DepartmentsSelectList'
import ToolbarBtn from '@/components/homeOfficeCal/ToolbarBtn'

export default {
  components: {
    HomeOfficeCalendar,
    ToolbarBtn,
    DepartmentsSelectList,
    NewEntryPicker
  },
}
</script>
