<template>
    <div class="userPanelFoto">
        <carousel   :navigationEnabled="true"
                    :perPage="1"
                    :paginationEnabled="false"
                    ref="carousel"
                    :loop="true"
                    @pageChange="handleSlideClick"
                    :navigate-to="selectedSlideIndex">
          <slide v-for="(slide, index) in slides"
                class="image is-square"
                v-bind:data="slides"
                v-bind:key="index">
            <img :src="slide" alt="">
          </slide>
        </carousel>
        <form method="post" enctype="multipart/form-data">
            <input type="file" name="fileToUpload" id="fileToUpload" @change="handleFileUpload($event.target.name, $event.target.files)">
            <label for="fileToUpload" class="btn">Personalizza</label>
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
        // created(){
        //     EventBus.$on('WAKEUP', () => {
        //           return document.getElementsByClassName('VueCarousel-inner')[0].className += " wakeUp";
        //         });
        //     EventBus.$on('RESET', () => {
                
        //           return this.reset();
        //         });
        // },
        mounted(){          
        },
        props:{
            default:{
                type:String,
                default:'Data'
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
                var form_data = new FormData();
                form_data.append('file',files[0]);
                axios.post('/grimm-admin/service/addImage',form_data)
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
                
            }
        },
        components:{
            Carousel,
            Slide
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

</style>