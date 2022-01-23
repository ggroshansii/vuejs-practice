new Vue( {
    el: '#exercise',
    data: {
        name: "Garth",
        age: 30,
        image: "https://www.rd.com/wp-content/uploads/2020/01/GettyImages-163063811-e1580488606776-scaled.jpg?fit=700,1024"
    },
    methods: {
        tripleAge() {
            return this.age * 3;
        },
        randomDecimal() {
            return Math.random().toFixed(2);
        }
    }
})