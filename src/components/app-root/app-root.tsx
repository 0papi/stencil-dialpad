import { Component, h, Host } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';
import 'remixicon/fonts/remixicon.css';

const Router = createRouter();

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    return (
      <Host>
        <app-navbar></app-navbar>
        <Router.Switch>
          <Route path={'/'}>
            <app-home></app-home>
          </Route>
          <Route path={'/new'}>
            <app-dialer></app-dialer>
          </Route>
        </Router.Switch>
      </Host>
    );
  }
}
