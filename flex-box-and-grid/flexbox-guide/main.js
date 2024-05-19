import './style.css'

import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1> hello world </>
  </div>
`

setupCounter(document.querySelector('#counter'))
