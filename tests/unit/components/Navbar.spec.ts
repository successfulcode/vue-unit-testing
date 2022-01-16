import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {

  it('Is links titles correctly', () => {

    const wrapper = shallowMount(Navbar, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.text()).toMatch('Home');
    expect(wrapper.text()).toMatch('About');
  })
})
