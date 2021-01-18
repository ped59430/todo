import Todos from "../Todos.vue";
import { mount } from "@vue/test-utils";
describe("Some Vue Component", () => {
  it("snapshot vue component", () => {
    const vueEl = mount(Todos);
    expect(vueEl.html()).toMatchSnapshot();
  });
});
