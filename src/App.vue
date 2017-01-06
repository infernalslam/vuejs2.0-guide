<template>
  <div id="app">

      <div class="menu">
        <ul class="nav nav-pills nav-stacked">
          <li>Vue-Router</li>
          <li>Vuex</li>
          <li>Props</li>
        </ul>
      </div>


    <div class="container">
      <div class="row">
        <h1 class="mac"> Basic </h1> <h3 class="mac"> Vue-router </h3>
        <h4 class="mac"> <a href="https://medium.com/@takkamonpob/%E0%B8%AA%E0%B8%AD%E0%B8%99-vue-router-2-0-3-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B9%80%E0%B8%A3%E0%B9%88%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%86%E0%B9%86-93e87a913099#.v3nig8h0h"> Readmore... </a></h4>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6">
          <browser-window :url="urlVueRouter">
            <vue-router-view :vue-router-url="VueRouterUrl" :vue-router-show="vueRouterShow"></vue-router-view>
          </browser-window>
        </div>
        <div class="col-xs-6">
          <file-view :vue-router="VueRouter"></file-view>
          <codemirror :code="codeVueRouter" :options="editorOption"></codemirror>
        </div>
      </div>
    </div>


    <div class="container">
      <div class="row">
        <h1 class="mac"> Basic </h1> <h3 class="mac"> Vuex </h3>
        <h4 class="mac"> <a href="https://medium.com/@takkamonpob/vue2-0-vuex-%E0%B8%AB%E0%B8%A1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%9B%E0%B8%A3-e710a3be6592#.afizegbc0"> Readmore... </a></h4>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6">
          <browser-window :url="urlVuex">
            <vue-x-view :number="number" :add-num="addNum"></vue-x-view>
          </browser-window>
        </div>

        <div class="col-xs-6">
          <file-view-vuex :vuex="Vuex"></file-view-vuex>
          <codemirror :code="codeVuex" :options="editorOption"></codemirror>
        </div>

      </div>
    </div>


    <div class="container">
      <div class="row">
        <h1 class="mac"> Basic </h1> <h3 class="mac"> Props </h3>
        <!-- <h4 class="mac"> <a href="https://medium.com/@takkamonpob/vue2-0-vuex-%E0%B8%AB%E0%B8%A1%E0%B8%94%E0%B8%9B%E0%B8%B1%E0%B8%8D%E0%B8%AB%E0%B8%B2%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%81%E0%B8%9B%E0%B8%A3-e710a3be6592#.afizegbc0"> Readmore... </a></h4> -->
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-6">
            <browser-window :url="urlProps">
              <props-view :props-name="propsName"></props-view>
            </browser-window>
        </div>
        <div class="col-xs-6">
          <file-view-props :props="Props"> </file-view-props>
          <codemirror :code="codeProps" :options="editorOption"></codemirror>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import {EditorWindow, BrowserWindow} from 'vue-windows'
import { codemirror } from 'vue-codemirror'
import main from './localStore/vuerouter/main.js'
import app from './localStore/vuerouter/app.js'
import page1 from './localStore/vuerouter/page1.js'
import page2 from './localStore/vuerouter/page2.js'
import vueRouterView from 'components/vueRouter/vueRouter'
import fileView from 'components/vueRouter/file'
import option from './localStore/editorOption.js'
import store from './localStore/vuex/store.js'
import fileViewVuex from 'components/vuex/file'
import appVuex from './localStore/vuex/app'
import vueXView from 'components/vuex/vuex'
import propsView from 'components/props/propsView'
import propsApp from './localStore/props/app.js'
import props from './localStore/props/props.js'
import fileViewProps from 'components/props/file'

export default {
  name: 'app',
  components: {
    EditorWindow,
    BrowserWindow,
    codemirror,
    vueRouterView,
    fileView,
    fileViewVuex,
    vueXView,
    propsView,
    fileViewProps
  },
  data () {
    return {
      codeVueRouter: main,
      codeVuex: store,
      codeProps: propsApp,
      urlVueRouter: 'http://localhost:8080',
      urlVuex: 'http://localhost:8080',
      urlProps: 'http://localhost:8080',
      propsName: '',
      vueRouterShow: '',
      editorOption: option[0].editorOption,
      number: 0,
      color: 'white',
      bg: '#151718'
    }
  },
  methods: {
    VueRouter (page) {
      if (page === 1) this.codeVueRouter = main
      else if (page === 2) this.codeVueRouter = app
      else if (page === 3) this.codeVueRouter = page1
      else if (page === 4) this.codeVueRouter = page2
    },
    VueRouterUrl (index) {
      if (index === 1) {
        this.urlVueRouter = 'http://localhost:8080/page1'
        this.vueRouterShow = `This's Page1`
      } else if (index === 2) {
        this.urlVueRouter = 'http://localhost:8080/page2'
        this.vueRouterShow = `This's Page2`
      }
    },
    Vuexurl () {},
    Vuex (index) {
      console.log(index)
      if (index === 1) {
        this.codeVuex = store
      } else if (index === 2) {
        this.codeVuex = appVuex
      }
    },
    addNum () {
      this.number += 1
    },
    Props (index) {
      if (index === 1) {
        this.codeProps = propsApp
      } else if (index === 2) {
        this.codeProps = props
      }
    }
  }
}
</script>

<style src="vue-windows/dist/vue-windows.css"></style>
<style>
@font-face {
  font-family: "San Francisco";
  font-weight: 100;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-ultralight-webfont.woff");
}
.mac {
    font-family: "San Francisco"
}
#app {
    color: white;
    /*background-color: #151718;*/
    /*background-color: #282a36;*/
    background-color: #02082c;
}
.CodeMirror {
  height: auto !important;
}
.style__window___3EmXK {
      margin: 0 163px !important;
}
.label {
  cursor: pointer !important;
  font-size: 26px;
}

.textinbrowser {
  color: black;
}
a:focus, a:hover {
    color: #cfcebf !important;
    text-decoration: underline !important;
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9400;
  width: 100px;
  background: #3d505b;
}

</style>
