var NavBar = React.createClass({
  render: function(){
    return(
      <nav className="row navbar">
        <a className="brand u-pull-left" href="#!"><i className="material-icons">home</i></a>
        <Button link_class="button button-primary u-pull-right" text="docs" href="https://www.google.com"/>
      </nav>
    );
  }
});
