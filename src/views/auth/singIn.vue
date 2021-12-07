<template>
  <n-grid :cols="4" x-gap="12">
    <n-gi>
      <n-image
        src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/img/login-v2.72cd8a26.svg"></n-image>
    </n-gi>
    <n-gi offset="1">
      <n-card class="signInCard" title="Auth">
        <n-tabs default-value="signin" justify-content="space-evenly" size="large">
          <n-tab-pane name="signin" tab="Sign in">
            <n-form
              ref="formSignIn"
              :disabled="updateDisabled"
              :inverted="$store.state.inverted"
              :label-width="160"
              :model="signInModel"
              :rules="signInRules"
              :style="{
                maxWidth: '640px'
              }"
              label-placement="top"
            >
              <n-form-item-row label="Email" path="signInEmail">
                <n-auto-complete
                  v-model:value="signInModel.signInEmail"
                  :options="signAutocomplete"
                  placeholder="example@gmail.com"
                />
              </n-form-item-row>
              <n-form-item-row label="Password" path="signInPassword">
                <n-input v-model:value="signInModel.signInPassword" placeholder="Enter password" type="password"/>
              </n-form-item-row>
            </n-form>
            <f-button :type="type" @click="signInSubmit">sign In</f-button>
            <n-alert v-if="$store.state.errorsApi.message" style="margin-top: 5px" type="error">
              {{ $store.state.errorsApi.message }}
            </n-alert>
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </n-gi>
  </n-grid>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Login, Logout } from '../../utils'

export default {
  name: 'signIn',
  mounted () {
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).jwt) {
      Logout(this)
    }
    //  if (this.$store.state.user.jwt) {
    //   this.$router.push({ name: 'CategoriesMain' })
    // }
  },
  setup (_, context) {
    const formSignIn = ref(null)
    // const formSignUp = ref(null)
    const store = useStore()
    const router = useRouter()
    const signInModel = ref({
      signInEmail: '',
      signInPassword: null
    })
    const signUp = {
      signUpPasswordConfirm: {
        required: true,
        message: 'Please input your email',
        trigger: 'blur',
        type: 'email'
      }
    }
    const signInVal = {
      signInEmail: {
        required: true,
        message: 'Please input your email',
        trigger: 'blur',
        type: 'email'
      },
      signInPassword: {
        required: true,
        message: 'Please input your password'
      },
      signUp
    }
    return {
      type: 'primary',
      updateDisabled: ref(false),
      formSignIn,
      signInModel,
      signAutocomplete: computed(() => {
        return ['@gmail.com', '@mail.ru', '@yandex.ru', '@yandex.com', '@yahoo.com'].map((suffix) => {
          const prefix = signInModel.value.signInEmail.split('@')[0]
          return {
            label: prefix + suffix,
            value: prefix + suffix
          }
        })
      }),
      signInRules: signInVal,
      signInSubmit (e) {
        e.preventDefault()
        formSignIn.value.validate((errors) => {
          if (!errors) {
            /* process.env.DEV_URL + */
            Login(store, router, null, signInModel.value.signInEmail, signInModel.value.signInPassword)
            /* const result = Login('login', signInModel.value.signInEmail, signInModel.value.signInPassword)
            console.log(result) */
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.signInCard {
  margin-top: 100px;
}
</style>
