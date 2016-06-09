var urlARR = location.href.split('/');
var page = urlARR[urlARR.length - 1];
console.log(page);

switch(page){
case '':
    ReactDOM.render(<Landing />, document.getElementById('landing'));
    break;
}
