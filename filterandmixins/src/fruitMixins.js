export const fruitMixins = {
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            fruits: ['apple', 'mango', 'orange', 'pineapple'],
            filterText: ""
        }
    },
    // filters: {
    //     toUppercase(value) {
    //         return value.toUpperCase();
    //     }
    // },
    computed: {
        filterFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText)
            })
        }
    },
    created() {
        console.log('created mixins')
    },
}