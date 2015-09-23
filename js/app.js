'use strict';

(function (exports) {
  exports.App = React.createClass({
    displayName: "App",

    getInitialState: function getInitialState() {
      return {
        guilds: window.Guilds
      };
    },
    ___componentDidMount: function ___componentDidMount() {
      var guilds = new Map();
      window.Guilds.forEach(function (guild) {
        guilds.set(guild.profile, guild);
      });
      var a = [];
      guilds.forEach(function (guild, profile) {
        a.push(guild);
      });
      console.log(JSON.stringify(a));
      this.setState({
        guilds: a
      });
    },
    render: function render() {
      var resultDOM = this.state.guilds.map(function (guild) {
        return React.createElement(
          "div",
          { className: "lis-ranking" },
          React.createElement(
            "div",
            { className: "ico-rank-digits" },
            guild.rank
          ),
          React.createElement(
            "div",
            { className: "prt-ranking-detail" },
            React.createElement(
              "div",
              { className: "prt-ranking-name" },
              React.createElement(
                "div",
                { className: "txt-name" },
                guild.name
              )
            ),
            React.createElement(
              "div",
              { className: "prt-event-record" },
              React.createElement(
                "div",
                { className: "prt-point" },
                React.createElement("div", { className: "prt-grade rank-l-" + guild.grade })
              ),
              React.createElement(
                "div",
                { className: "prt-point" },
                React.createElement(
                  "div",
                  { className: "txt-total" },
                  "累計貢献度"
                ),
                React.createElement(
                  "div",
                  { className: "txt-total-record" },
                  React.createElement(
                    "span",
                    null,
                    guild.record
                  )
                )
              )
            )
          )
        );
      });
      return React.createElement(
        "div",
        null,
        resultDOM
      );
    }
  });
})(window);