var urlARR = location.href.split('/');
var page = urlARR[urlARR.length - 1];
console.log(page);

ReactDOM.render( <NavBar /> , document.getElementById('navbar_header'));
switch(page){
case '':
    ReactDOM.render(<Landing />, document.getElementById('landing'));
    break;
}
