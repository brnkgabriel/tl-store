import VueGtag from "vue-gtag-next"

export default defineNuxtPlugin(nuxtApp => {

  const router = useRouter()
  // Doing something with nuxtApp
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "G-0CTTSMVGYY",
      params: {
        user_id: getMachineId(),
        send_page_view: false,
        linker: {
          domain: ['tl-store.vercel.app']
        }
      }
    }
  }, router)
})
