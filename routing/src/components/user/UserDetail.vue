<template>
<div>
    <h3>Some User Details</h3>
    <p>User LOaded has ID: {{ $route.params.id }}</p>
    <router-link 
        tag="button" 
        :to="link"
    >Edit User</router-link>
</div>
</template>

<script>
export default {
    data() {
        return {
           link: {
                name: 'useEdit', 
                params: {
                    id: this.$route.params.id
                }, 
                query: {
                    local:'en', 
                    date:Date.now()
                },
                hash: '#data'
            }
        }
    },
}
</script>