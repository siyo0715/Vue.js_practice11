// new Vue({
//     el: '#app',
//     data: {
//         isActive: true,
//         bg: 'bg-blue'
//     },
//     computed: {
//         classObject: function () {
//             return {
//                 red: this.isActive,
//                 'bg-blue': !this.isActive
//             }
//       }  
//     }
// })

new Vue({
    el: '#app',
    data: {
      styleObject: {
        color: 'red',
        'background-color': 'blue'
        },
        baseStyles: {
            fontSize: '60px'
        }
    }
})