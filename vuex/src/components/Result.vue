<template>
    <div>
       <p>Counter: {{doubleCounter}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '../store/modules/types'

export default {
     computed: {
        ...mapGetters({
        doubleCounter : types.DOUBLE_COUNTER,
        })
     }
}
</script>
