import { div, button } from "react-hyperscript-helpers";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State } from "../state";
import { increment } from "../state/actions/tick";

interface LayoutProps {
  count: number;
  increment: (amount: number) => any;
}

const Layout = (props: LayoutProps) =>
  div([
    props.count,
    button({ onClick: () => props.increment(3) }, "Clickyclicky")
  ]);

export default connect(
  (state: State) => ({ count: state.counter.count }),
  (dispatch: Dispatch) => bindActionCreators({ increment }, dispatch)
)(Layout);
