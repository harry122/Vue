<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link 
                tag="li"
                to="/user/1"
                ><a>User1</a></router-link>
            <router-link
            to="/user/2"
            tag="li"
            ><a>User2</a></router-link>            
            <router-link 
            tag="li"
            to="/user/3"><a>User3</a></router-link>        
        </ul>
    </div>
</template>