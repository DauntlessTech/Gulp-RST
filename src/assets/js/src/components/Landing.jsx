var Landing = React.createClass({
  render: function(){
    return (
      <div className="banner_full">
        <div className="banner_message">
          <h1 className="banner_header">Gulp-RST</h1>
          <p className="banner_description"> Gulp-RST is a simple template that uses Gulp, React, and Skeleton-Framwork; as a base, for an easy start, react project.</p>
        </div>
      </div>
    );
  }
});


ReactDOM.render(<Landing />, document.getElementById('landing'));
