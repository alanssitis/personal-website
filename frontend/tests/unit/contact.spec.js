import { shallowMount } from "@vue/test-utils";
import Contact from "@/views/Contact/Contact.vue";

const mountedComponent = (values = {}) => {
  return shallowMount(Contact, {
    data() {
      return {
        ...values,
      }
    }
  })
}

describe('Test isValidEmail', () => {
  const testMethod = value => {
    const wrapper = mountedComponent();
    wrapper.vm.isValidEmail(value);
  }

  test('with valid email 1', () => {
    expect(testMethod('valid@test1.com')).toBe(true);
  })
})

describe('Test missingFields', () => {
  test('with all empty', () => {
    const wrapper = mountedComponent({
      formFields: {
        name: "",
        email: "",
        subject: "",
        message: "",
      }
    })
    expect(wrapper.vm.missingFields).toStrictEqual(["name", "email", "message"]);
  })

  test('with all filled', () => {
    const wrapper = mountedComponent({
      formFields: {
        name: "test 2",
        email: "test@email.com",
        subject: "test 2",
        message: "All fields filled accordingly",
      }
    })
    expect(wrapper.vm.missingFields).toStrictEqual([]);
  })

  test('with email filled incorrectly', () => {
    const wrapper = mountedComponent({
      formFields: {
        name: "test 3",
        email: "test@tst",
        subject: "test 3",
        message: "All but email filled correctly",
      }
    })
    expect(wrapper.vm.missingFields).toStrictEqual(["email"]);
  })
})

describe('Test canSubmit', () => {
  test('with all empty', () => {
    const wrapper = mountedComponent({
      formFields: {
        name: "",
        email: "",
        subject: "",
        message: "",
      }
    })
    expect(wrapper.vm.canSubmit).toBe(false);
  })

  test('with all filled', () => {
    const wrapper = mountedComponent({
      formFields: {
        name: "test 2",
        email: "test@email.tst",
        subject: "test 2",
        message: "All fields filled accordingly",
      }
    })
    expect(wrapper.vm.canSubmit).toBe(true);
  })

  test('with email filled incorrectly', () => {
    const wrapper = mountedComponent({
      formFields: {
        name: "test 3",
        email: "test@tst",
        subject: "test 3",
        message: "All but email filled correctly",
      }
    })
    expect(wrapper.vm.canSubmit).toBe(false);
  })
})