import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";
import CommentBox from "../components/CommentBox";
import CommentList from "../components/CommentList";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and dispaly them", (done) => {
  // Attemp to render the *entire* app

  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  expect(wrapped.find(CommentBox).length).toEqual(1);
  expect(wrapped.find(CommentList).length).toEqual(1);

  // find the 'fetchComments' button and click it

  wrapped.find(".fetch-comment").simulate("click");


  // Expect to find a list of comments!
  setTimeout(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(3);

    done();
  }, 100);

});
