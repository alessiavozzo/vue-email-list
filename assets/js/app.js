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
            .then(email => {
                //console.log(email);
                console.log(email.data.response);
                this.singleEmail = email.data.response;
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