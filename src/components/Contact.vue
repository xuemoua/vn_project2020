<template>
    <div id="map">
        <v-container class="primary">
            <div class="primary">
            <h1 class="text-center white--text">ຕິດຕໍ່</h1>
                <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-card>
                    <v-card-text>
                        <v-container>
                        <form>
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
        </v-container> 
    </div>
 
</template>

<script>
export default {
    name:'contact'
};
</script>

<style>
    h1 {
        font-size: 40px;
    }
</style>