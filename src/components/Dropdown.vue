<template>
    <div class="dropdown">
        <template><slot name="label"></slot><span class="dropdown__trigger  dropdown__trigger--arrow" @click="closeHandler"></span></template>
        <ul  class="dropdown__list" v-if="isOpen"  v-on-clickaway="closeDrop">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
    import { mixin as clickaway } from 'vue-clickaway';
    export default {
        mixins: [ clickaway ],
        name: "Dropdown",
        data() {
            return {
                isOpen: false
            };
        },
        methods: {
            closeHandler: function() {
                this.isOpen = !this.isOpen;
            },

            closeDrop() {
                this.isOpen = false;
            },
        }
    };
</script>
<style lang="scss" scoped>
</style>
