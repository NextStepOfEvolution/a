<template>
  <n-space vertical>
    <!--    &lt;!&ndash;Change theme&ndash;&gt;
        <n-space>
          <n-switch v-model:value="$store.state.inverted"/>
          inverted
        </n-space>
        <br>
        <n-space>
          <f-bread-crumb/>
        </n-space>
        <br>-->
    <!--Change theme end-->
    <n-layout>
      <!--Header-->
      <n-layout-header :inverted="$store.state.inverted" bordered>
        <f-nav-bar :navbarOptions="navbarOptions"/>
      </n-layout-header>
      <!--Header end-->
      <n-layout has-sider>
        <!--Vertical Menu -->
        <n-layout-sider
          :collapsed="$store.state.collapsed"
          :collapsed-width="64"
          :inverted="$store.state.inverted"
          :native-scrollbar="false"
          :width="240"
          bordered
          collapse-mode="width"
          style="max-height: 100%; cursor: pointer;"
          @collapse="$store.state.collapsed = true"
          @expand="$store.state.collapsed = false"
        >
          <f-menu :menuOptions="menuOptions"/>
        </n-layout-sider>
        <!--Vertical Menu end -->
        <!--Content -->
        <n-layout style="padding: 20px">
          <router-view></router-view>
        </n-layout>
        <!--Content end-->
      </n-layout>
      <!--Footer -->
      <n-layout-footer :inverted="$store.state.inverted" bordered>
        Footerello
      </n-layout-footer>
      <!--Footer end-->
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent, h, resolveComponent } from 'vue'
import { NIcon } from 'naive-ui'
import {
  BookOutline as BookIcon,
  Cog as UserCog,
  LanguageSharp,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'
import FNavBar from './components/Layout/Header/FNavBar'
import FMenu from './components/Layout/Header/FMenu'

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () => {
      return <router-link to="/about">asd</router-link>
    },
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: {
            name: 'Home'
          }
        },
        { default: () => 'Список' }
      ),
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

const navbarOptions = [
  {
    label: () => {
      return <router-link to="/about">asd</router-link>
    },
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: {
            name: 'CategoriesMain'
          }
        },
        { default: () => 'Список' }
      ),
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'A Wild Sheep Chase',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon(BookIcon)
  },
  {
    label: 'Dance Dance Dance',
    key: 'Dance Dance Dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  },
  {
    label: 'Profile',
    key: 'Profile',
    icon: renderIcon(UserCog),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people'
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  },
  {
    label: '',
    key: 'Language',
    icon: renderIcon(LanguageSharp),
    children: [
      {
        label: 'Ru',
        key: 'ru',
        icon: renderIcon(LanguageSharp)
      },
      {
        label: 'Uz',
        key: 'uz',
        icon: renderIcon(LanguageSharp)
      }
    ]
  }
]

export default defineComponent({
  components: {
    FMenu,
    FNavBar
  },
  setup (props, context) {
    return {
      menuOptions,
      navbarOptions
    }
  }
})
</script>

<style>

</style>
