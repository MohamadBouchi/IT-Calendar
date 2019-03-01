<template>
  <v-container>
    <v-layout class="mb-4">
      <v-flex>
        <DepartmentsSelectList/>
        <NewEntryPicker />
        <div class="right">
          <v-btn color="warning">Reset</v-btn>
          <v-btn color="success">Submit</v-btn>
        </div>
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

import HomeOfficeCalendar from '@/components/homeOfficeCal/HomeOfficeCalendar';
import NewEntryPicker from '@/components/homeOfficeCal/NewEntryPicker';
import DepartmentsSelectList from '@/components/homeOfficeCal/DepartmentsSelectList';

export default {
  components: {
    HomeOfficeCalendar,
    DepartmentsSelectList,
    NewEntryPicker
  },
}
</script>
