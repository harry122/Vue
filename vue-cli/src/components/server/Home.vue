<template>
<div class="container">
    <app-header></app-header>
    <app-server-status></app-server-status>
    <app-footer></app-footer>
</div>
</template>

<script>
import Header from '../shared/Header'
import ServerStatus from './ServerStatus'
import Footer from '../shared/Footer'
export default { 
   components : {
        "app-header": Header,
        "app-server-status" : ServerStatus,
        "app-footer": Footer
   }
}
</script>

