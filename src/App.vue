<template>
  <v-app id="app-c">
        <v-content>
            <v-container fluid>
                <v-layout row wrap>
                    <transition name="fade" mode="out-in">
                        <keep-alive>
                            <router-view ></router-view>
                        </keep-alive>
                    </transition>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style>
    #app-c {
        background:linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%);
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .3s
    }

    .fade-enter, .fade-leave-to    {
      opacity: 0
    }
    .love {
      display: inline-block;
      position: relative;
      /*top: .2em;*/
      font-size: 1.4em;
      color: #e74c3c;
      -webkit-transform: scale(.9);
      -moz-transform: scale(.9);
      transform: scale(.9);
      -webkit-animation: love .3s infinite linear alternate-reverse;
      -moz-animation: love .3s infinite linear alternate-reverse;
      animation: love .3s infinite linear alternate-reverse;
    }
    @-webkit-keyframes love {
      to {-webkit-transform: scale(1.2);}
    }
    @-moz-keyframes love {
      to {-moz-transform: scale(1.2);}
    }
    @keyframes love {
      to {transform: scale(1.2);}
    }
</style>
