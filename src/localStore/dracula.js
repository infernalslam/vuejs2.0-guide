let option = [{
  editorOption: {
    mode: 'text/javascript',
    theme: 'dracula',
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
}]
export default option
