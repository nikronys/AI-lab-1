import React, { Component } from 'react';

import KnowledgeBase from 'components/KnowledgeBase';
import Select from 'components/Select';

import InferenceEngine, { mainTarget } from 'core/InferenceEngine';

class GamePage extends Component {
  componentWillMount() {
    this.initState();
  }

  initState = () => this.setState({
    attribute: null,
    options: null,
    context: {},
    logs: [],
    finish: false,
  }, this.play);

  play = () => {
    const getContext = () => ({ ...this.state.context });
    const updateContext = (key, value) => this.setState({
      context: { ...this.state.context, [key]: value },
    });
    const askQuestion = (attribute, options) => {
      this.setState({ attribute, options });
      return new Promise((resolve) => {
        this.resolve = resolve;
      });
    };
    const handleFinish = () => this.setState({ finish: true });
    const log = rule => this.setState({ logs: this.state.logs.concat(rule) });

    const ie = new InferenceEngine(getContext, updateContext, askQuestion, handleFinish, log);
    ie.start();
  };

  handleSelect = value => this.resolve(value);

  render() {
    const {
      attribute, options, finish, context, logs,
    } = this.state;
    const result = context[mainTarget];

    if (finish) {
      return (
        <div className="container has-text-centered">
          <h1 className="title is-1">
            {result ? `You are fun of ${result}!` : 'Sorry, can\'t identify your club'}
          </h1>
          <KnowledgeBase rules={logs} />
          <br />
          <button onClick={this.initState} className="button is-medium">Повторить</button>
        </div>
      );
    }

    return (
      <div className="container has-text-centered">
        {!attribute && (
          <h1 className="title">Loading...</h1>
        )}
        {attribute && (
          <Select
            attribute={attribute}
            options={options}
            onChange={this.handleSelect}
          />)}
        {logs && (
          <KnowledgeBase rules={logs} />
        )}
      </div>
    );
  }
}

export default GamePage;
