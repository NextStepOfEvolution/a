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
        <f-menu :menuOptions="menu"/>
      </n-layout-sider>
      <!--Vertical Menu end -->
      <n-layout>
        <!--Header-->
        <n-layout-header :inverted="$store.state.inverted" bordered>
          <f-nav-bar :navbarOptions="navbar"/>
        </n-layout-header>
        <!--Header end-->
        <!--Content -->
        <n-layout-content style="padding: 20px">
          <slot></slot>
        </n-layout-content>
        <!--Content end-->
      </n-layout>
    </n-layout>
    <!--Footer -->
    <n-layout-footer :inverted="$store.state.inverted" bordered>
      <h4>Copyright © 2021 <span style="color: teal">PSP MARKET</span></h4>
    </n-layout-footer>
    <!--Footer end-->
  </n-space>
</template>

<script>
import FNavBar from '../../components/Layout/Header/FNavBar'
import FMenu from '../../components/Layout/Header/FMenu'
import navbar from '../../datas/navbar'
import menu from '../../datas/menu'

export default {
  name: 'FMain',
  components: {
    FMenu,
    FNavBar
  },
  mounted () {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user || !user.jwt) {
      this.$router.push({ name: 'SignIn' })
    } else {
      this.$store.state.user = user
    }
  },
  setup () {
    return {
      menu,
      navbar
    }
  }
}
</script>
