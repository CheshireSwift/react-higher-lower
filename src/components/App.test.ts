import { render, mount } from "enzyme";
import { h } from "react-hyperscript-helpers";

import App from "./App";
import { Hand } from "./Hand";
import { CardDisplay } from "./CardDisplay";

describe("the app", () => {
  it("matches the snapshot", () => {
    expect(render(h(App))).toMatchSnapshot();
  });

  it("starts with a card drawn", () => {
    const app = mount(h(App));

    expect(app.text()).toContain(51);
    expect(app.find(Hand).find(CardDisplay)).toHaveLength(1);
  });

  it("moves a card from hand to deck when draw is clicked", () => {
    const app = mount(h(App));
    app
      .findWhere(child => child.type() === "button" && child.text() === "draw")
      .simulate("click");

    expect(app.text()).toContain(50);
    expect(app.find(Hand).find(CardDisplay)).toHaveLength(2);
  });
});
