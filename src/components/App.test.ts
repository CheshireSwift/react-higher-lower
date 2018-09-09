import { render, mount } from "enzyme";
import { h } from "react-hyperscript-helpers";

import App from "./App";
import { Hand } from "./Hand";

describe("the app", () => {
  it("matches the snapshot", () => {
    expect(render(h(App))).toMatchSnapshot();
  });

  it("moves a card from hand to deck when draw is clicked", () => {
    const app = mount(h(App));

    expect(app.text()).toContain(52);
    expect(app.find(Hand).prop("cards")).toHaveLength(0);

    app.find("button").simulate("click");

    expect(app.text()).toContain(51);
    expect(app.find(Hand).prop("cards")).toHaveLength(1);
  });
});
