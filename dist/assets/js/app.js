/* Buttons
--------------------------------------------- */
var Button = React.createClass({
  displayName: "Button",

  render: function () {
    return React.createElement(
      "span",
      { className: this.props.classes },
      React.createElement(
        "a",
        { className: this.props.link_class, href: this.props.href },
        this.props.text
      )
    );
  }
});

var Landing = React.createClass({
  displayName: "Landing",

  render: function () {
    return React.createElement(
      "div",
      { className: "banner_full" },
      React.createElement(
        "div",
        { className: "banner_message" },
        React.createElement(
          "h1",
          { className: "banner_header" },
          "Gulp-RST"
        ),
        React.createElement(
          "p",
          { className: "banner_description" },
          " Gulp-RST is a simple template that uses Gulp, React, and Skeleton-Framwork; as a base, for an easy start, react project."
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(Landing, null), document.getElementById('landing'));

var NavBar = React.createClass({
  displayName: "NavBar",

  render: function () {
    return React.createElement(
      "nav",
      { className: "row navbar" },
      React.createElement(
        "a",
        { className: "brand u-pull-left", href: "#!" },
        "Gulp-RST"
      ),
      React.createElement(Button, { link_class: "button button-primary u-pull-right", text: "docs", href: "https://www.google.com" })
    );
  }
});

ReactDOM.render(React.createElement(NavBar, null), document.getElementById('navbar_header'));
//# sourceMappingURL=app.js.map
