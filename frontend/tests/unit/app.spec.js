import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe('App', () => {
  const wrapper = shallowMount(App);

  test('is Vue instance', () => {
    expect(wrapper.vm).toBeTruthy();
  })
})