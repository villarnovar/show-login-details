new Vue({
    el: "#root",
    data:{
        email: "",
        password: "",
        displayEmail: "",
        displayPassword: ""
    },methods: {
        display(){
            this.displayEmail = this.email 
            this.displayPassword = this.password
        }
    }
})