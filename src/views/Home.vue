<template>
    <v-app>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel align-center class="hidden-xs12" >
            <v-carousel-item xs12 sm6 class="text-sm-center"
              v-for="venture in ventures" :src="venture.imageurl" :key="venture.id">
              <div class="title">
                  {{venture.title}}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <!-- ບໍລິການ -->
        <h1 class="text-center">ບໍລິການ</h1>
      <v-layout>  
      <div class="service" xs12 sm6>
            <article xs12>
                <img src="" alt="">
                <h2>ບໍລິການ1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quia repudiandae voluptate. Est consequuntur, repudiandae 
                  voluptates vel repellat qui ea debitis provident culpa officiis accusantium obcaecati sint nihil recusandae at.</p>
            </article>
            <article xs ="12">
                <img src="" alt="">
                <h2>ບໍລິການ2</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quia repudiandae voluptate. Est consequuntur, repudiandae 
                  voluptates vel repellat qui ea debitis provident culpa officiis accusantium obcaecati sint nihil recusandae at.</p>
            </article>
            <article xs12> 
                <img src="" alt="">
                <h2>ບໍລິການ3</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quia repudiandae voluptate. Est consequuntur, repudiandae 
                  voluptates vel repellat qui ea debitis provident culpa officiis accusantium obcaecati sint nihil recusandae at.</p>
            </article>
      </div>
      </v-layout>
     <!-- ກ່ຽວກັບບໍລິສັດ -->
     <div class="aboutventure" xs12 sm6>
      <h1 class="text-center ">ກ່ຽວກັບບໍລິສັດ</h1>
        <v-container>
            <v-layout xs12 >
                  <v-flex xs12>
                      <a href=""><img src="../images/venturenetwork.png" width="400px" height="400px"></a>
                  </v-flex>
                  <v-flex  xs12 sm6>
                        <h2 >ບໍລິສັດ ເວັນເຈີ ເນັດເວັກ</h2>
                        <p>ບໍລິສັດ ເວນເຈີຣເນັທເວີຣຄ ຈໍາກັດ. ໃບທະບຽນເລກທີ່  0453/ຈທວ, ລົງວັນທີ່  15/05/2018, ທືນຈົດທະບຽນ560,000,000ກີບ. ບໍລິສັດໄດ້ສ້າງລະບົບເຕີ່ມມູນຄ້າໂທອອນໄລນຂື້ນ, ລະບົບຊື່ວ່າ ວີທອບອັບອອນໄລນ (V-Top up Online). ແລະ ໄດ້ເຊື່ອມຕ່ລະບົບ ກັບ ບັນດາ 03 ບໍລິສັດໂທລະຄົມຍັກໃຫຍ່ໃນ ສປປ ລາວ ເຊັນ:<br/>
                        1. ບໍລິສັດ ລັດວິສາຫະກິດ ລາວໂທລະຄົມມະນາຄົມ.<br/>
                        2.ບໍລິສັດ ສາຕາຣໂທລະຄົມ.<br/>
                        3. ບໍລິສັດ ອີທີເອລ ຈໍາກັດ.<br/>
                        ລະບົບຂອງພວກເຮົາຊຶ່ງເປັນລະບົບທີ່ທັນໄໝ ແລະ ມີຄວາມປອດໄພສູງຫຼາຍໃນຍຸກປັດຈຸບັນ ໃນ ສປປ ລາວ</p> 
                  </v-flex>
            </v-layout>
      ``</v-container>
     </div>
       
     <!-- ຜະລິດຕະພັນ -->
      <div class="product" xs12 sm6>
          <v-container>
              <h1 class="text-center">ຜະລິດຕະພັນ</h1>
              <v-layout>
                  <v-flex>
                    <a href=""><img src="../images/venture.png" width="400px" height="400px"></a>
                  </v-flex>
                     <v-flex class="mt-6">
                       <p>Vpay.la ແມ່ນເວັບໄຊເຕີມເງິນໂທລະສັບອອນລາຍ ທີ່ໃຫ້ບໍລິການເຕີມເງິນອອນລາຍຕະຫຼອດ 24 ຊົວໂມງ…
                       </p> 
                       <a href="#">ເບິ່ງລາຍລະອຽດ</a>
                  </v-flex>
              </v-layout>
          </v-container>
       </div>
       <!-- video bacckground -->
       <!-- <div class="videobackground" xs12>
            <video autoplay muted loop id="myVideo">
            <source src="../images/backgroundvideo.mp4">
            </video>
       </div> -->
     
      <!-- ຂ່າວສານ  -->
      <v-container grid-list-md>
         <h1 class="text-center">ຂ່າວສານ</h1><br>
          <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>ເວັນເຈີ ເນັດເວັກ</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>  
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>ເວັນເຈີ ເນັດເວັກ</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>
            
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>ເວັນເຈີ ເນັດເວັກ</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>
            
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>ເວັນເຈີ ເນັດເວັກ</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>
            
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
      <!-- map -->
      
      <!-- ຕິດຕໍ່ -->
      <div class="primary">
            <h1 class="text-center white--text">ຕິດຕໍ່</h1>
                <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                    <v-card-text>
                        <v-container>
                        <form @submit.prevent="onSignup">
                            <v-layout row>
                            <v-flex xs12>
                                <v-text-field
                                name="name"
                                label="ຊື່ ແລະ ນາມສະກຸນ"
                                type="name"
                                required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                name="email"
                                label="ອີເມວ"
                                type="email"
                                required></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                name="number"
                                label="ເບີໂທລະສັບ"
                                type="number"
                                required></v-text-field>
                            </v-flex>
                            <v-flex>
                                <v-textarea
                                label="ເນື້ອໃນ"
                                ></v-textarea>
                            </v-flex>
                            </v-layout>
                            <v-layout row>
                            <v-flex xs12>
                                <v-btn type="submit" class="primary" >
                                ສົ່ງຂໍ້ມູນ
                                </v-btn>
                            </v-flex>
                            </v-layout>
                        </form>
                        </v-container>
                    </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <br>
            <br> 
        </div>
             
    </v-app>
</template>

<script>
export default {
  data(){
    return{
      show: false,
        ventures:[{
          imageurl:'https://www.orbitclippingpath.com/blog/wp-content/uploads/2019/11/clipping-path-company.jpg',title:''
        },
        {
          imageurl:'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',title:' '
        },
        {
          imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Paris_Night_f.jpg/1200px-Paris_Night_f.jpg',title:''
        }
        
        ]
   
    }
  },
   
};
</script>

<style scoped>
   /* service */
     h1 {
      font-size: 40px;
      margin-top: 80px;
    }
    .service {
      text-align: center;
      width: 100%;
    }
    .service article{
      display: inline-block;
      padding: 2px;
      margin-top: 30px;
      width: 450px;
      height: 250px;
      
    } 
    
    /* about */
    .aboutventure {
      background: #00F260;  
      background: -webkit-linear-gradient(to right, #0575E6, #00F260); 
      background: linear-gradient(to right, #0575E6, #00F260); 
      color: #fff;
    }
    /* product */
    .product article {
      width: 500px;
      display: inline-block;
      padding: 20px;
    }
    .product article:nth-child(1){
      border: 1px solid red;
    }
    .product article:nth-child(2){
      border: 1px solid red;
    }
    .product article img {
      border: 1px solid green;
      width: 400px;
      height: 400px;
    }
    /* video background */
    .videobackground {
      background: #000;
    }
    #myVideo {
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 50%;
    }
    
</style>