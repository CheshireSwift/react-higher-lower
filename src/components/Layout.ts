import { div, h } from "react-hyperscript-helpers";

import Deck from "./Deck";
import Hand from "./Hand";

export const Layout = () => div([h(Deck), h(Hand)]);

export default Layout;
