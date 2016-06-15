var NavBar = React.createClass({
  render: function(){
    return(
      <nav className="row navbar">
        <span className="six columns offset-by-three">
          <a className="brand u-pull-left" href="#!">Gulp-RST</a>
          <a className="button no-border" href="#!">Features</a>
          <a className="button no-border" href="#!">Docs</a>
          <a className="button no-border" href="#!">Support</a>
        </span>
      </nav>
    );
  }
});
