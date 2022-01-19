<template>
  <div class="kurse">
    <h1>Kurse verwalten</h1>

    <table-filter @filterChanged="filteredCourses($event)">
    </table-filter>

    <course-table :courses = this.courses></course-table>
  </div>
</template>

<script>
import TableFilter from '@/components/TableFilter'
import CourseTable from '@/components/CourseTable'

export default {
  components: { TableFilter, CourseTable },
  data () {
    return {
      courses: []
    }
  },
  methods: {
    filteredCourses (courses) {
      console.log('filteredCourses')
      this.courses = courses
    }
  }
}
</script>
