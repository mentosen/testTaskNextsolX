<template>
    <header class="flexMain flexMain--row paddingMain">

        <div class="paddingTop--padding-top-logo">
            <img class="logo" alt="pluggedin" src="../assets/images/Vektor-Smartobjekt.png"/>

            <div class="flexMain flexMain--row paddingTop">
                <span class="font font--logo-description">{{$t('locale.inform')}}</span>
                <span class="font font--logo-description marginLeft">{{$t('locale.connect')}}</span>
                <span class="font font--logo-description marginLeft">{{$t('locale.inspire')}}</span>
            </div>
        </div>

        <div class="flexMain flexMain--column flexMain--height-auto">
            <div class="flexMain flexMain--row flexMain--align-items flexMain--justify-end">
                <span class="font--logo-description pointer" @click="click">{{$t('locale.about')}}</span>
                <span class="font--logo-description marginLeft--origin pointer" @click="click">{{$t('locale.editorial')}}</span>

                <language-selector class="marginLeft--origin"/>
            </div>

            <div class="tabs">
                <img class="icon marginRight--origin" alt="search" src="../icons/svg/Icon-Suche.svg"/>
                <button
                        v-for="tab in tabs"
                        :key="tab"
                        :class="['tab__button', 'font--bold', { 'tab__button--active': currentTab === tab }]"
                        @click="currentTab = tab"
                >{{ $t('locale.'+tab)}}
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import LanguageSelector from './LanguageSelector';

    export default {
        name: "Header",
        components:{
            LanguageSelector
        },
        data(){
            return {
                tabs: ['design', 'trend', 'infodelight', 'smartLiving'],
                currentTab: '',
            }
        },
        methods:{
            click(event){
                console.log(event.target.innerText);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .logo{
        height: 23px;
        width: 160px;
    }

    .icon {
        height: var(--indent);
        width: var(--indent);
    }

    .tabs {
        display: flex;
        justify-content: space-between;

        .tab__button {
            background: none;
            border-left: 2px solid black;
            border-top: none;
            border-right: none;
            border-bottom: none;
            padding-left: var(--indent);
            padding-right: var(--indent);
            font-size: 16px;
            font-weight: 500;
            outline:none;

            &:hover {
                cursor: pointer;
                transition: 0.3s;
            }

            &--active {
                border-left: 2px solid black;
                border-top: none;
                border-right: none;
                border-bottom: 2px solid black;
            }
        }
    }

    .tabs button:last-child {
        padding-right: 0;
    }
</style>