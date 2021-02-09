var button = document.getElementById("button");
var text = document.getElementById("text");
var myWorker = new Worker('worker.js');

button.onclick = function() {
    myWorker.postMessage('buttonClicked');
    console.log('button was clicked');
    text.value='porque eres gau';
}
