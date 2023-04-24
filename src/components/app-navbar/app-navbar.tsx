import { Component, h, State } from '@stencil/core';
import { href } from 'stencil-router-v2';

@Component({
  tag: 'app-navbar',
  styleUrl: './app-navbar.css',
  shadow: true,
})
export class AppNavbar {
  @State() isSidebarOpen = false;

  toggleSidebar = () => {
    this.isSidebarOpen = !this.isSidebarOpen;
  };

  render() {
    console.log(this.isSidebarOpen);
    return (
      <div>
        <div class="navbar">
          <button onClick={() => this.toggleSidebar()}>Menu</button>
        </div>

        <div class={`sidebar fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-10 transition-all duration-300 ${this.isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div class="bg-gray-900 py-3 px-6">
            <button class="sidebar-close text-white font-bold" onClick={this.toggleSidebar}>
              Close
            </button>
          </div>
          <ul class="mt-10">
            <li>
              <a class="text-gray-900 hover:bg-gray-300 px-6 py-3 block" {...href('/')} onClick={this.toggleSidebar}>
                Home
              </a>
            </li>
            <li>
              <a class="text-gray-900 hover:bg-gray-300 px-6 py-3 block" {...href('/new')} onClick={this.toggleSidebar}>
                New Number
              </a>
            </li>
          </ul>
        </div>

        {this.isSidebarOpen && <div class="fixed inset-0 bg-gray-700 opacity-50 z-0" onClick={() => this.toggleSidebar()}></div>}
      </div>
    );
  }
}
