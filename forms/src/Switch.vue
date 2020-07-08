<template>

<div>
    <div
        id="on"
        @click="switched(true)"
        :class="{active: isOn}">On</div>
<div
        id="off"
        @click="switched(false)"
        :class="{active: !value}">Off</div>

</div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        switched(isOn) {
            this.$emit('input', isOn)
    }
    }
}
</script>
<style scoped>
    #in, #off {
        width: 40px;
    }
</style>