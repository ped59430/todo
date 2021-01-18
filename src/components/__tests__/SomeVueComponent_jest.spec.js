import SomeVueComponent from "../SomeVueComponent.vue";
import { mount } from "@vue/test-utils";
describe("Some Vue Component", () => {
  it("snapshot vue component", () => {
    const vueEl = mount(SomeVueComponent);
    expect(vueEl.html()).toMatchSnapshot();
  })
})
