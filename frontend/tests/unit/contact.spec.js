import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact/Contact.vue";

describe('Contact.vue', () => {
  const wrapper = shallowMount(Contact);
  
  test('if canSubmit works', () => {
    expect(wrapper.vm.canSubmit).toBe(false);
  })
})