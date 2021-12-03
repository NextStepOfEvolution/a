import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const formSignIn = ref(null)
    // const formSignUp = ref(null)
    const signInModel = ref({
      signInEmail: '',
      signInPassword: null
    })
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
      signInRules: {
        signInEmail: {
          required: true,
          message: 'Please input your email',
          trigger: 'blur',
          type: 'email'
        },
        signInPassword: {
          required: true,
          message: 'Please input your password',
          trigger: 'blur'
        }
      },
      CreatePost (e) {
        e.preventDefault()
        formSignIn.value.validate((errors) => {
          if (!errors) {
            document.querySelector('div[data-name="index"]').click()
          } else {
            console.log(errors)
            console.log('Invalid')
          }
        })
      }
    }
  }
})
