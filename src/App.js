import React, { Component } from 'react';

import GamePage from 'components/GamePage';
import KnowledgeBase from 'components/KnowledgeBase';
import Footer from 'components/Footer';

import 'bulma/css/bulma.css';

const pages = {
  game: <GamePage />,
  knowledge: <KnowledgeBase />,
};

class App extends Component {
  state = {
    route: 'game',
  };

  changeRoute = route => this.setState({ route });

  render() {
    const { route } = this.state;

    return (
      <section className="hero is-fullheight">
        <Footer activeRoute={route} onRouteChange={this.changeRoute} />
        <div className="hero-body">
          {pages[route]}
        </div>
      </section>
    );
  }
}

export default App;
