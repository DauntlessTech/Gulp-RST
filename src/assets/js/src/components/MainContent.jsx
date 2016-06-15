var MainContent = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="row">
          <div className="card eight columns offset-by-two">
            <div className="row">
              <h2>Instructions</h2>
              <hr/>

              <div className="snippet">
                <h3>1. Clone the github repository</h3>
                <code>git clone https://github.com/DauntlessTech/Gulp-RST MyApp</code>
              </div>
              <div className="snippet">
                <h3>2. Change Directories</h3>
                <code>cd ./MyApp</code>
              </div>
              <div className="snippet">
                <h3>3. Install Dependencies</h3>
                <code>npm install</code>
              </div>
              <div className="snippet">
                <h3>4. Compile</h3>
                <code>gulp</code>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
});
