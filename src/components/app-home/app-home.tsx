import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  shadow: true,
})
export class HomeComponent {
  render() {
    return (
      <div class="mt-10">
        <h2 class="font-bold">Home here</h2>
      </div>
    );
  }
}
