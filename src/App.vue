<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <h1 class="mac"> Basic </h1> <h3 class="mac"> Vue-router </h3>
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
          <codemirror :code="code" :options="editorOption"></codemirror>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {EditorWindow, BrowserWindow} from 'vue-windows'
import { codemirror } from 'vue-codemirror'
import main from './localStore/main.js'
import app from './localStore/app.js'
import page1 from './localStore/page1.js'
import page2 from './localStore/page2.js'
import vueRouterView from 'components/vueRouter/vueRouter'
import fileView from 'components/vueRouter/file'
export default {
  name: 'app',
  components: {
    EditorWindow,
    BrowserWindow,
    codemirror,
    vueRouterView,
    fileView
  },
  data () {
    return {
      headText: 'Vue-router',
      code: main,
      urlVueRouter: 'http://localhost:8080',
      vueRouterShow: '',
      editorOption: {
        mode: 'text/javascript',
        theme: 'seti',
        tabSize: 2,
        lineNumbers: false,
        line: false,
        keyMap: 'sublime',
        extraKeys: { 'Ctrl': 'autocomplete' },
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
        styleSelectedText: true,
        highlightSelectionMatches: { showToken: /\w/, annotateScrollbar: true }
      }
    }
  },
  methods: {
    VueRouter (page) {
      console.log('single: ', page)
      if (page === 1) this.code = main
      else if (page === 2) this.code = app
      else if (page === 3) this.code = page1
      else if (page === 4) this.code = page2
    },
    VueRouterUrl (index) {
      console.log('url: ', index)
      if (index === 1) {
        this.urlVueRouter = 'http://localhost:8080/page1'
        this.vueRouterShow = `This's Page1`
      } else if (index === 2) {
        this.urlVueRouter = 'http://localhost:8080/page2'
        this.vueRouterShow = `This's Page2`
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
body {
    color: white;
    background-color: #151718;
}
.CodeMirror {
  height: auto !important;
}
.style__window___3EmXK {
      margin: 0 163px !important;
}
.label {
  cursor: pointer !important;
}

.textinbrowser {
  color: black;
}
</style>
