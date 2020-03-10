<template>
      <v-app>
      <v-container>
          <h1 class="text-center">ອົງກອນ</h1>
          <v-content>
              <article>
                <a href=""><img src="../images/Somphone.png" alt=""></a>
                <h2>ທ່ານ ສົມພອນ ພອນປະດິດ</h2>
                <span>ປະທານບໍລິສັດ</span>
                <p>ທ່ານ ສົມພອນ ພອນປະດິດ ປະທານ ບໍລິສັດ ເວັນເຈີ ເນັດເວັກ.</p>
              </article>
              <article>
                 <a href=""><img src="../images/pp.jpg" alt=""></a>
                 <h2>ທ່ານ ສົມພັນ ແສງອາຣຸນ</h2>
                 <span>ປະທານບໍລິສັດ</span>
                 <p>ທ່ານ ສົມພັນ ແສງອາຣຸນ ປະທານ ບໍລິສັດ ເວັນເຈີ ເນັດເວັກ</p>
              </article>
          </v-content>
      </v-container>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>
    .text-center{
      margin-top: 60px;
    }
    .container article {
      width: 400px;
      display: inline-block;
      padding: 20px;
      text-align: center;
    }
    .container article img {
      width: 400px;
      height: 400px;
      border-radius: 10px;
      padding: 20px;
    }
</style>
