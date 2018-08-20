let capitalize = function (value) {
    return value.toUpperCase()
}

let reverse = function (value) {
    return value.split(' ').reverse().join(' ')
}

let vm = new Vue({
    el: '#app',
    data: {
        seconds: 0,
        firstName: 'Jean',
        lastName: 'Paul',
    },
    computed: {
      fullName: {
          get: function () {
              return this.firstName + ' ' + this.lastName
          },
          set: function(value) {
            var parts = value.split(' ')
            this.firstName = parts[0]
            this.lastName = parts[1]
          }
      }
    },
    mounted: function() {
        setInterval(function() {
            this.seconds++
        }, 1000)
    },
    methods: {
        increment: function () {
            this.seconds++
        }
    },
    filters: {
        capitalize,
        reverse
    }
})