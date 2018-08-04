import Vue from 'vue'

const wrapper = (root, { arg, value }) => {
  const children = Array.from(root.childNodes),
        fragment = document.createDocumentFragment(),
        wclasses = value.class.toString().split(' ')

  children.forEach(child => {
    if (!child._vueSlotWrap) {
      const wrapper = document.createElement(arg)
      wclasses.forEach(cls => { wrapper.classList.add(cls) })

      wrapper._vueSlotWrap = true
      wrapper.appendChild(child)

      fragment.appendChild(wrapper)
    }
    else {
      child.childNodes.length !== 0
        ? fragment.appendChild(child)
        : root.removeChild(child)
    }
  })

  root.appendChild(fragment);
}

Vue.directive('wrap', {
  inserted: wrapper,
  componentUpdated: wrapper
})
