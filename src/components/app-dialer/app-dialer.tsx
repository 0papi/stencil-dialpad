import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-dialer',
  styleUrl: 'app-dialer.css',
  shadow: true,
})
export class DailerComponent {
  render() {
    return (
      <div>
        <div id="phone">
          <div id="wrapper">
            <div class="key">1</div>
            <div class="key">
              2<span>abc</span>
            </div>
            <div class="key">
              3<span>def</span>
            </div>
            <div class="clear"></div>
            <div class="key">
              4<span>ghi</span>
            </div>
            <div class="key">
              5<span>jkl</span>
            </div>
            <div class="key">
              6<span>mno</span>
            </div>
            <div class="clear"></div>
            <div class="key">
              7<span>pqrs</span>
            </div>
            <div class="key">
              8<span>tuv</span>
            </div>
            <div class="key">
              9<span>wxyz</span>
            </div>
            <div class="clear"></div>
            <div class="key special">*</div>
            <div class="key">
              0<span>oper</span>
            </div>
            <div class="key special">#</div>
            <div class="clear"></div>
            <div class="key nb"></div>
            <div class="key phone">
              <i class="fa fa-phone"></i>
            </div>
            <div class="key nb"></div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}
