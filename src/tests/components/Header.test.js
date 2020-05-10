import React from "react";
import { shallow } from "enzyme";
//import ReactShallowRender from "react-test-renderer/shallow";
//import toJSON from "enzyme-to-json";
import { Header } from "../../components/Header";
//import { startLogout, startLogin } from "../../actions/auth";

let startLogout, wrapper;

beforeEach(() => {
  startLogout = jest.fn();
  wrapper = shallow(<Header startLogout={startLogout} />);
});

test("should render Hedaer correctly", () => {
  //const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();

  //expect(wrapper.find("h1").text()).toBe("Expensify");
  //const renderer=new ReactShallowRender();
  //renderer.render(<Header/>);
  //expect(renderer.getRenderOutput()).toMatchSnapshot();
  //console.log(renderer.getRenderOutput());
});

test("should call startLogout on button click", () => {
  wrapper.find("button").prop("onClick")();
  expect(startLogout).toHaveBeenCalled();
});
