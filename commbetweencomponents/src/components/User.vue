<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>Name is {{name}}</p>
        <p>User Age {{age}}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                    :name="name" 
                    @namewasreset="name=$event"
                    :resetfn="resetName"
                    :userAge="age"
                    ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                    :userAge="age"
                    @ageWasEdited="age=$event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data: function() {
            return {
                name: "Max",
                age: 27
            }
        },
        methods: {
            changeName() {
                this.name="anna"
            },
            resetName() {
                this.name = "Max"
            }
        },
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
