<template>
    <div class="flexMain flexMain--column mainBlock">
        <div id="blocks_1" class="flexMain flexMain--row mainBlock border">
            <div class="block_1 flexMain flexMain--column flexMain--height-auto flexMain--full-center">
                <span class="font--logo-description font--color--white">{{' | ' + $t('locale.design') + ' | ' + $t('locale.smartLiving') + ' | '}}</span>
                <span class="font--big24 font--color--white marginTop--origin">{{$t('locale.block_1_main')}}</span>
                <span class="font--logo-description font--color--white marginTop--origin">{{$t('locale.block_1_sub')}}</span>

                <div class="flexMain flexMain--row dot_container">
                    <span class="dot"></span>
                    <span class="dot marginLeft--x2"></span>
                    <span class="dot marginLeft--x2"></span>
                    <span class="dot marginLeft--x2 dot_selected"></span>
                    <span class="dot marginLeft--x2"></span>
                    <span class="dot marginLeft--x2"></span>
                </div>
            </div>

            <div class="block_2 flexMain flexMain--column flexMain--height-auto paddingMain--big flexMain--full-center">
                <span class="font--big24 font--color--white">{{$t('locale.block_2_main')}}</span>
                <span class="font--logo-description font--color--white marginTop--origin">{{$t('locale.block_2_sub')}}</span>

                <div class="flexMain flexMain--column marginTop--origin">
                    <dropdown class="dropdown--lang">
                        <span class="font--logo-description font--color--white" slot="label" @click="labelClicked">{{currentChart}}</span>
                        <dropdown-item
                                name="pie"
                                @start-action="selectChart('pie')"
                        >
                        </dropdown-item>
                        <dropdown-item
                                name="bar"
                                @start-action="selectChart('bar')"
                        >
                        </dropdown-item>
                        <dropdown-item
                                name="line"
                                @start-action="selectChart('line')"
                        >
                        </dropdown-item>
                    </dropdown>
                    <button class="btn btn-margin marginTop--origin" >{{$t('locale.insert')}}</button>
                </div>
            </div>
        </div>

        <div id="blocks_2" class="flexMain flexMain--row mainBlock">
            <div class="block_3 flexMain flexMain--column flexMain--height-auto flexMain--full-center">
                <span class="font--logo-description font--color--white">{{' | ' + $t('locale.design') + ' | ' + $t('locale.smartLiving') + ' | '}}</span>
                <span class="font--big24 font--color--white marginTop--origin">{{$t('locale.block_1_main')}}</span>
                <span class="font--logo-description font--color--white marginTop--origin">{{$t('locale.block_1_sub')}}</span>
            </div>

            <div class="block_4 flexMain flexMain--column flexMain--height-auto flexMain--full-center">
                <span class="font--logo-description font--color--white">{{' | ' + $t('locale.design') + ' | ' + $t('locale.smartLiving') + ' | '}}</span>
                <span class="font--big24 font--color--white marginTop--origin">{{$t('locale.block_1_main')}}</span>
                <span class="font--logo-description font--color--white marginTop--origin">{{$t('locale.block_1_sub')}}</span>
            </div>
        </div>

        <div id="blocks_3" style="width: 50%;" v-if="currentChart !== 'Select chart'" class="flexMain flexMain--row mainBlock">
            <div style="background-color: grey;" class="flexMain flexMain--column marginTop--origin">
                <dropdown class="dropdown--lang">
                    <span class="font--logo-description" slot="label" @click="labelClicked">{{currentChart}}</span>
                    <dropdown-item
                            name="pie"
                            @start-action="selectChart('pie')"
                    >
                    </dropdown-item>
                    <dropdown-item
                            name="bar"
                            @start-action="selectChart('bar')"
                    >
                    </dropdown-item>
                    <dropdown-item
                            name="line"
                            @start-action="selectChart('line')"
                    >
                    </dropdown-item>
                </dropdown>
            </div>
            <chart :options="chartOptions"/>
        </div>
    </div>
</template>

<script>
    import Dropdown from "./Dropdown";
    import DropdownItem from "./DropDownItem";
    import { mixin as clickaway } from 'vue-clickaway';
    import {Chart} from 'highcharts-vue'

    export default {
        name: "Body",
        mixins: [ clickaway ],
        components:{
            Dropdown,
            DropdownItem,
            Chart
        },
        data(){
            return {
                currentChart:'Select chart',
                chartOptions: {
                    series: []
                },
                barSeries: [
                    {
                        type: 'bar',
                        data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
                        name: 'Rainfall'
                    }
                ],
                lineSeries: [
                    {
                        type: 'line',
                        data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
                        name: 'Rainfall'
                    }
                ],
                pieSeries: [
                    {
                        type: 'pie',
                        data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4],
                        name: 'Rainfall'
                    }
                ]
            }
        },
        methods:{
            labelClicked(){
                this.$children[0].closeHandler()
            },
            selectChart(chart){
                this.currentChart = chart.toUpperCase();

                switch (chart) {
                    case 'line':
                        this.chartOptions.series = this.lineSeries;
                        break;
                    case 'bar':
                        this.chartOptions.series = this.barSeries;
                        break;
                    case 'pie':
                        this.chartOptions.series = this.pieSeries;
                        break
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mainBlock {
        height: 100vh;
        flex: 1;
    }

    .border {
        border-bottom: 2px solid white;
    }

    .block_1 {
        width: 70%;
        background-size: cover !important;
        background: center no-repeat url("../assets/images/background_1.png");
        border-right: 2px solid white;
    }

    .block_2 {
        width: 30%;
        background-color: #323232;
    }

    .block_3 {
        width: 50%;
        background-size: cover !important;
        background: center  no-repeat url("../assets/images/background_2.png");
        border-right: 2px solid white;
    }
    .block_4 {
        width: 50%;
        background-size: cover !important;
        background: center  no-repeat url("../assets/images/background_3.png");
    }

    .dot {
        height: 5px;
        width: 5px;
        background-color: #989ca2;
        display: inline-block;
    }

    .dot_selected {
        background-color: white;
    }

    .dot_container {
        position: absolute;
        bottom: 0;
        padding-bottom: calc(var(--indent) * 2);
    }

</style>