<template>
  <v-container>
    <v-layout class="mb-4">
      <v-flex>
        <NewEntryForm />
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
import NewEntryForm from '@/components/homeOfficeCal/NewEntryForm';

export default {
  components: {
    HomeOfficeCalendar,
    NewEntryForm
  },
}
</script>
