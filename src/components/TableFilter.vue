<template>
    <div class="course-filter">
        <div class="course-filter__item">
            <label for="from">Datum von</label>
            <input id="from" type="text" v-model="fromDate" placeholder="01.01.2020">
        </div>
        <div class="course-filter__item">
            <label for="to">Datum bis</label>
            <input id="to" type="text" v-model="toDate" placeholder="31.12.2020">
        </div>
    </div>
    <div class="course-filter">
        <div class="course-filter__item">
            <label for="level">Kursstufe</label>
            <select id="level" v-model="wwLevel">
                <option></option>
                <option>B</option>
                <option>F</option>
                <option>K</option>
                <option>alle</option>
            </select>
        </div>
        <div class="course-filter__item">
            <label for="sport">Sportart</label>
            <select id="sport" v-model="sportKind">
                <option></option>
                <option>Kajak</option>
                <option>Kanadier</option>
                <option>Packraft</option>
                <option>alle</option>
            </select>
        </div>
        <div class="course-filter__item">
            <label for="typ">Kurstyp</label>
            <select id="typ" v-model="courseType">
                <option></option>
                <option>Kanukurs</option>
                <option>Paddelreise</option>
                <option>Eskimotieren</option>
                <option>Packraft Kurs</option>
            </select>
        </div>
        <div class="course-filter__item">
            <label for="name">Kursname</label>
            <input id="name" type="text" v-model="courseName" placeholder="Kajak Aufbaukurs">
        </div>
        <p>kursStufe: {{ wwLevel }}</p>
    </div>
    <div>
        <button @click='searchCourses()'>suchen</button>
    </div>
</template>

<script>
import CourseService from '@/services/CourseService.js'

export default {
  name: 'TableFilter',
  emits: ['filterChanged'],

  data () {
    return {
      wwLevel: '',
      sportKind: '',
      courseType: '',
      courseName: '',
      fromDate: '',
      toDate: '',
      allCourses: [],
      courses: {
        data: [],
        filterWwLevel: function (wwLevel) {
          if (wwLevel !== '') {
            this.data = this.data.filter((course) => {
              return course.kursStufe === wwLevel
            })
          }
          return this
        },
        filterSportKind: function (sportKind) {
          if (sportKind !== '') {
            this.data = this.data.filter((course) => {
              return course.sportArt === sportKind
            })
          }
          return this
        },
        filterCourseType: function (courseType) {
          if (courseType !== '') {
            this.data = this.data.filter((course) => {
              return course.typ === courseType
            })
          }
          return this
        }
      }
    }
  },

  methods: {
    searchCourses () {
      this.courses.data = this.allCourses
      this.courses
        .filterWwLevel(this.wwLevel)
        .filterSportKind(this.sportKind)
        .filterCourseType(this.courseType)
      this.$emit('filterChanged', this.courses.data)
    }
  },

  // LifeCicleHook created()
  created () {
    CourseService.getCourses()
      .then(response => {
        console.log(response.data)
        this.allCourses = response.data
        this.searchCourses()
      })
      .catch(error => {
        console.log('Da war ein Fehler: ' + error.response)
      })
  }
}
</script>

<style lang="scss" scoped>
    .course-filter{
        display: flex;
        background-color: $baseColor1;
        margin-bottom: 16px;

        .course-filter__item{
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            margin-right: 16px;
        }
    }
</style>
