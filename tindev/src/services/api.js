import axios from 'axios'

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
})

export default api

// usando celular <usar ip da máquina> + porta
// usando genymotion 10.0.3.2 + porta
// usando android studio 10.0.2.2 + porta
// ou usar o camando: adb reverse tcp:3333 tcp:3333