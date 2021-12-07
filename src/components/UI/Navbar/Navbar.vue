<template>
  <n-layout-header :inverted="$store.state.inverted" bordered>
    <f-nav-bar :navbarOptions="items" />
  </n-layout-header>
</template>

<script>
import { h, resolveComponent } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  Cog as UserCog,
  LanguageSharp,
  LogOut,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";
import { useStore } from 'vuex'

export default {
  mounted() {},
  methods: {

  },
  setup() {
    let store = useStore()
    const renderIcon = (icon) => {
      return () => h(NIcon, null, { default: () => h(icon) });
    }
    return {
      items: [
        {
          label: () =>
            h(
              resolveComponent("router-link"),
              {
                to: {
                  name: "CategoriesMain",
                },
              },
              { default: () => "About" }
            ),
          key: "hear-the-wind-sing",
          icon: renderIcon(BookIcon),
        },
        {
          label: () =>
            h(
              resolveComponent("router-link"),
              {
                to: {
                  name: "CategoriesMain",
                },
              },
              { default: () => "Список" }
            ),
          key: "pinball-1973",
          icon: renderIcon(BookIcon),
          disabled: true,
          children: [
            {
              label: "Rat",
              key: "rat",
            },
          ],
        },
        {
          label: "A Wild Sheep Chase",
          key: "a-wild-sheep-chase",
          disabled: true,
          icon: renderIcon(BookIcon),
        },
        {
          label: "Dance Dance Dance",
          key: "Dance Dance Dance",
          icon: renderIcon(BookIcon),
          children: [
            {
              type: "group",
              label: "People",
              key: "people",
              children: [
                {
                  label: "Narrator",
                  key: "narrator",
                  icon: renderIcon(PersonIcon),
                },
                {
                  label: "Sheep Man",
                  key: "sheep-man",
                  icon: renderIcon(PersonIcon),
                },
              ],
            },
            {
              label: "Beverage",
              key: "beverage",
              icon: renderIcon(WineIcon),
              children: [
                {
                  label: "Whisky",
                  key: "whisky",
                },
              ],
            },
            {
              label: "Food",
              key: "food",
              children: [
                {
                  label: "Sandwich",
                  key: "sandwich",
                },
              ],
            },
            {
              label: "The past increases. The future recedes.",
              key: "the-past-increases-the-future-recedes",
            },
          ],
        },
        {
          label: "Profile",
          key: "Profile",
          icon: renderIcon(UserCog),
          children: [
            {
              type: "group",
              label: "People",
              key: "people",
            },
            {
              label: "The past increases. The future recedes.",
              key: "the-past-increases-the-future-recedes",
            },
          ],
        },
        {
          label: store.state.language.locale,
          key: "Language",
          icon: renderIcon(LanguageSharp),
          children: [
            {
              label: "Ru",
              key: "ru",
              icon: renderIcon(LanguageSharp),
              onClick: () => {
                store.state.language.locale = "RU";
              },
            },
            {
              label: "Uz",
              key: "uz",
              icon: renderIcon(LanguageSharp),
              onClick: () => {
                store.state.language.locale = "UZ";
              },
            },
          ],
        },
        {
          label: () =>
            h(resolveComponent("router-link"), {
              to: {
                name: "SignIn",
              },
            }),
          key: "SignIn",
          icon: renderIcon(LogOut),
        },
      ],
    };
  },
};
</script>

<style>
</style>
