/* Buttons
--------------------------------------------- */
var Button = React.createClass({
  render: function() {
    return(
      <span className={this.props.classes}>
        <a className={this.props.link_class} href={this.props.href}>{this.props.text}</a>
      </span>
    );
  }
});
