import * as React from "react";
import * as renderer from "react-test-renderer";
import NewsTable from "./index";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container = null;
});

it("should render news table", () => {
  const newsIds = ["1","2","3"]

  const component = renderer
  .create(<NewsTable newsIds={newsIds} />)
  .toJSON();
  expect(component).toMatchSnapshot();
});