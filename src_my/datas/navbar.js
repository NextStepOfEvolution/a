import {
  ArrowRedo,
  LogOut
} from '@vicons/ionicons5'
import { h, resolveComponent } from 'vue'
import { NIcon } from 'naive-ui'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export default [
  {
    label: () => h(
      'a',
      {
        href: 'https://market.psp.uz/',
        target: '_blank'
      },
      { default: () => 'Просмотр сайта' }
    ),
    key: 'market.psp.uz',
    title: 'asd',
    icon: renderIcon(ArrowRedo)
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: {
            name: 'SignIn'
          }
        }
      ),
    key: 'SignIn',
    icon: renderIcon(LogOut)
  }
]
