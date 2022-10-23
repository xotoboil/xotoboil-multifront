import { newSpecPage } from '@stencil/core/testing';
import { UIButton } from '../UIButton';

describe('UIButton', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UIButton],
      html: `<UIButton></UIButton>`,
    });
    expect(page.root).toEqualHtml(`
      <UIButton>
        <mock:shadow-root>
        <button class="btn btn-undefined"><slot></slot></button>
        </mock:shadow-root>
      </UIButton>
    `);
  });
});
