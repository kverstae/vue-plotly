/**
 * @jest-environment jsdom
 */

const { createSSRApp } = require("vue");
const { renderToString } = require("@vue/server-renderer");
const Plotly = require("@/components/Plotly").default;

const app = createSSRApp({
  components: {Plotly},
  template: `<plotly></plotly>`
});

let html;

describe("Plotly.vue in a ssr context", () => {
  beforeEach(async () => {
    html = await renderToString(app);
  });

  it("can be rendered", () => {
    const expected = '<div></div>';
    expect(html).toEqual(expected);
  });
});
