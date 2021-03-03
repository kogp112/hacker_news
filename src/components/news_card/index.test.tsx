import * as React from "react";
import * as renderer from "react-test-renderer";
import NewsCard from "./index";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container = null;
});

it("should render news card", () => {
  const newsId = "";
  const index = 0;

  const component = renderer
  .create(<NewsCard newsId={newsId} index={index} />)
  .toJSON();
  expect(component).toMatchSnapshot();
});