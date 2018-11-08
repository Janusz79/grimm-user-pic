<template>
    <div class="userPanelFoto" :class="{round:round}"  :style="{ backgroundColor: background}">
        <carousel   :navigationEnabled="true"
                    :perPage="1"
                    :paginationEnabled="false"
                    ref="carousel"
                    :loop="true"
                    @pageChange="handleSlideClick"
                    :navigationNextLabel="navigationNextLabel"
                    :navigationPrevLabel="navigationPrevLabel"
                    :navigate-to="selectedSlideIndex">
          <slide v-for="(slide, index) in slides"
                class="image is-square"
                v-bind:data="slides"
                v-bind:key="index">
            <v-img :src="slide" alt="" aspect-ratio="1" />
          </slide>
        </carousel>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="fileToUpload" id="fileToUpload" @change="handleFileUpload($event.target.name, $event.target.files)">
            <label for="fileToUpload" 
                :class="{btn:!flat, btnFlat:flat}"
                :style="{background:buttonColor, color:textColor}"
                >Personalizza</label>
        </form>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import axios from 'axios';
    import img1 from './assets/ProfiloUomo_1.svg';
    import img2 from './assets/ProfiloUomo_2.svg';
    import img3 from './assets/ProfiloUomo_3.svg';
    import img4 from './assets/ProfiloDonna_1.svg';
    import img5 from './assets/ProfiloDonna_2.svg';
    import img6 from './assets/ProfiloDonna_3.svg';
import {VImg} from 'vuetify/lib';

    //import  EventBus  from '@/eventBus.js';
    export default{
        name: 'GrimmUserPic', // vue component name
        data: function(){
            return{
                slides:[img1,
                        img2,
                        img3,
                        img4,
                        img5,
                        img6],
                selectedSlide:img1,   
                selectedSlideIndex:0            
            }
        },
        created(){
            // EventBus.$on('WAKEUP', () => {
            //       return document.getElementsByClassName('VueCarousel-inner')[0].className += " wakeUp";
            //     });
            // EventBus.$on('RESET', () => {
                
            //       return this.reset();
            //     });
        },
        mounted(){          
        },
        props:{
            url:{
                default:'',
                type:String
            },
            round:{
                default:true,
                type:Boolean
            },
            flat:{
                default:true,
                type:Boolean
            },
            buttonColor:{
                default:'grey',
                type:String
            },
            textColor:{
                default:'white',
                type:String
            },
            background:{
                default:'transparent',
                type:String
            },
            navigationNextLabel:{
                default:'▶',
                type:String
            },
            navigationPrevLabel:{
                default:'◀',
                type:String
            },
            upload:{
                default:false,
                type:Boolean
            }

        },
        methods:{
            reset(){
                this.selectedSlideIndex = 0;
                this.selectedSlide = img1;
                if (this.slides.length>6) {
                    this.slides.pop(); 
                }
                
            },
            handleSlideClick (dataset) {
                this.selectedSlide = this.slides[dataset];
                this.$emit('input', {
                    string: this.selectedSlide,
                });
            },
            updateValue() {
              this.$emit('input', {
                string: this.selectedSlide,
              })
            },
            handleFileUpload(name, files){
                if (this.upload) {
                    var form_data = new FormData();
                    form_data.append('file',files[0]);
                    axios.post(this.url,form_data)
                    .then(function(response){
                        response = response.data;
                        if (this.slides.length> 6) {
                            this.slides.pop();
                            this.slides.push(response.outsidePath);
                        }else{
                            this.slides.push(response.outsidePath);
                        }
                        this.selectedSlide = response.outsidePath;
                        setTimeout(function() {
                            this.selectedSlideIndex = 6;
                            this.$emit('input', {
                                string: this.selectedSlide,
                            });
                        }.bind(this), 100);
                    }.bind(this))
                }else{
                    var reader= new FileReader();
                    reader.addEventListener("load", function () {
                        if (this.slides.length > 6) {
                            this.slides.pop();
                            this.slides.push(reader.result);
                        }else{
                            this.slides.push(reader.result);
                        }
                        this.selectedSlide = reader.result;
                        this.selectedSlideIndex = this.slides.length-1;
                        this.$emit('inputNoUpload', {
                            file: files[0]
                        });
                    }.bind(this), false);

                    if (files) {
                        reader.readAsDataURL(files[0]);
                    }
                }
                
                
            }
        },
        components:{
            Carousel,
            Slide,
            VImg
        }

    };
</script>
<style scoped>
    .userPanelFoto{
        padding-left: 18px;
        padding-right: 18px;
        display: flex;
        flex-direction:column;
        height: 100%;
    }
                    
    .userPanelFoto label{
        margin:auto;
    }
    .userPanelFoto img{
        width: 100%;
        
    }
    .round img{
       border-radius: 50000px; 
    }
    .userPanelFoto form{
        height: 100%;
        display: flex;
    }
    .userPanelFoto input{
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .btn {
        -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
        -webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
        box-shadow:inset 0px 1px 0px 0px #ffffff;
        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf));
        background:-moz-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
        background:-webkit-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
        background:-o-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
        background:-ms-linear-gradient(top, #ededed 5%, #dfdfdf 100%);
        background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf',GradientType=0);
        background-color:#ededed;
        -moz-border-radius:6px;
        -webkit-border-radius:6px;
        border-radius:6px;
        border:1px solid #dcdcdc;
        display:inline-block;
        cursor:pointer;
        color:#777777;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        text-shadow:0px 1px 0px #ffffff;
        margin-top: 18px !important;
    }
    .btn:hover {
        background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #ededed));
        background:-moz-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
        background:-webkit-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
        background:-o-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
        background:-ms-linear-gradient(top, #dfdfdf 5%, #ededed 100%);
        background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed',GradientType=0);
        background-color:#dfdfdf;
    }
    .btn:active {
        position:relative;
        top:1px;
    }

    .btnFlat {
        background-color:#ededed;
        display:inline-block;
        cursor:pointer;
        color:#777777;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        margin-top: 18px !important;
    }
    .btnFlat:hover {
        background-color:#dfdfdf;
    }
    .btnFlat:active {
        position:relative;
        top:1px;
    }

</style>