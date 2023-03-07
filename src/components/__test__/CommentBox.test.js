import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "../../Root";
let wrapped;  
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
  });
afterEach(() => {
  wrapped.unmount();
});
describe("the textarea ", () => {


  it("it has textarea and button ", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(1);
  });
});

describe("the form", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: {
        value: "new comment",
      },
      
    });
    wrapped.update();
  });

  it("has a text area that users can type", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("textarea should emptied when user click submit button", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    wrapped.find("form").simulate("submit");

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
