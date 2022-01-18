<template>
  <div class="kurse">
    <h1>This is Kurse page</h1>

    <table-filter @filterChanged="filterWWLevel($event)">
    </table-filter>

    <table>
      <tr v-for="course in coursesToShow" :key="course.id">
        <td>{{ course.id }}</td>
        <td>{{ course.name }}</td>
        <td>{{ course.sportArt }}</td>
        <td>{{ course.kursStufe }}</td>
        <td>{{ course.vonDatum }}</td>
        <td>{{ course.ort }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import TableFilter from '@/components/TableFilter'
import CourseService from '@/services/CourseService.js'

export default {
  components: { TableFilter },

  data () {
    return {
      courses: [],
      coursesToShow: []
    }
  },

  // LifeCicleHook created()
  created () {
    console.log('test -> ' + this.wwLevel)
    CourseService.getCourses()
      .then(response => {
        console.log(response.data)
        this.courses = response.data
        this.coursesToShow = response.data
      })
      .catch(error => {
        console.log('Da war ein Fehler: ' + error.response)
      })
  },

  methods: {
    filterWWLevel (wwLevel) {
      console.log('test2 -> ' + wwLevel)

      if (wwLevel !== '') {
        const filteredCourses = this.courses.filter((course) => {
          return course.kursStufe === wwLevel
        })
        this.coursesToShow = filteredCourses
      } else {
        this.coursesToShow = this.courses
      }
    }
  }

}
</script>
