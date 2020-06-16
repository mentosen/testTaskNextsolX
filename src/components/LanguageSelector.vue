<template>
    <div class="flexMain flexMain--row main">
        <div class="left paddingMain--tiny selected">
            <span class="font--bold font--logo-description">DE</span>
        </div>
        <div class="right paddingMain--tiny">
            <span class="font--bold font--logo-description">EN</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LanguageSelector",
        data() {
            return {
                currentLanguage: this.$t('langCodes.' + 'de'),
            };
        },
        methods: {
            labelClicked(){
                this.$children[0].closeHandler()
            },
            changeLang(locale){
                this.$i18n.locale = locale;
                return this.currentLanguage = this.$t('langCodes.'+locale)
            },
        },
    };
</script>

<style scoped>
    .left {
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-bottom: 1px solid black;
    }

    .right {
        border:1px solid black;
    }

    .selected {
        background: #f5f5f5;
        border-top: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
        border-bottom: 1px solid #cccccc;
        color: #cccccc;
    }
</style>
