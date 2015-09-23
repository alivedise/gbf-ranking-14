'use strict';

(function(exports) {
  exports.App = React.createClass({
    getInitialState: function() {
      return {
        guilds: []
      }
    },
    ___componentDidMount: function() {
      var guilds = new Map();
      window.Guilds.forEach(function(guild) {
        guilds.set(guild.profile, guild);
      });
      var a = [];
      guilds.forEach(function(guild, profile) {
        a.push(guild);
      });
      console.log(JSON.stringify(a));
      this.setState({
        guilds: a
      });
    },
    componentDidMount: function() {
      var First = [];
      for (var i = 0; i < 100; i++) {
        First.push(window.Guilds[i]);
      }
      this.setState({
        guilds: First
      });
      setTimeout(function() {
        this.setState({
          guilds: window.Guilds
        });
      }.bind(this), 100);
    },
    onClick: function(evt) {
      window.open(evt.target.dataset.profile);
    },
    render: function() {
      var resultDOM = this.state.guilds.map(function(guild) {
        return  <div className="lis-ranking" key={guild.profile} onClick={this.onClick}>
                  <div className="ico-rank-digits">{guild.rank}</div>
                  <div className="prt-ranking-detail">
                    <div className="prt-ranking-name">
                      <div className="txt-name" data-profile={'http://gbf.game.mbga.jp/#' + guild.profile} onClick={this.onClick}>{guild.name}</div>
                    </div>
                    <div className="prt-event-record">
                      <div className="prt-point">
                        <div className={"prt-grade rank-l-" + guild.grade}></div>
                      </div>
                      <div className="prt-point">
                        <div className="txt-total">累計貢献度</div>
                        <div className="txt-total-record"><span>{guild.record}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
      }, this);
      return <div>
                {resultDOM}
             </div>
    }
  });
}(window));
