const { createApp } = Vue

createApp({
    data() {
        return {
            singleEmail: null,
            emailList: [],
        }
    },

    methods: {
        getSingleEmail() {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response => {
                console.log(response);
                console.log(response.data.response);
                this.singleEmail = response.data.response;
                this.emailList.push(this.singleEmail);
            })
        },

        generateEmailList(){
            for (let i = 0; i < 10; i++) {                
                this.getSingleEmail()
            }            
            console.log(this.emailList);
        }
    },

    mounted() {
        this.generateEmailList()
    }
}).mount('#app')