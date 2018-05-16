import Vue from "vue";

import MessageComponent from "./components/Message.vue";

export default new Vue({
    el: "#app",
    template: `
        <div>
            <h1>Greetings from Vue/Typescript!</h1>
            <div>
                <span>Name: <input v-model="name" type="text"></span>
                <message :content="msg" :initialEnthusiasm="5" />
            </div>
        </div>
    `,
    components: {
        "message": MessageComponent,
    },
    computed: {
        msg(): string {
            return `Welcome, ${this.name}!`;
        }
    },
    data() {
        return { name: "" };
    }
});
