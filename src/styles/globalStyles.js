import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    background: 100px / 400px  url('/img/kaplya.png'), #e6a80e;
    @keyframes tremor {
        0% { transform: rotate(0deg); }
        5% { transform: rotate(10deg); }
        10% { transform: rotate(15deg); }
        15% { transform: rotate(20deg); }
        20% { transform: rotate(25deg); }
        25% { transform: rotate(30deg); }
        30% { transform: rotate(25deg); }
        35% { transform: rotate(20deg); }
        40% { transform: rotate(15deg); }
        45% { transform: rotate(10deg); }
        50% { transform: rotate(0deg); }
        55% { transform: rotate(-10deg); }
        60% { transform: rotate(-15deg); }
        65% { transform: rotate(-20deg); }
        70% { transform: rotate(-25deg); }
        75% { transform: rotate(-30deg); }
        80% { transform: rotate(-25deg); }
        85% { transform: rotate(-20deg); }
        90% { transform: rotate(-15deg); }
        95% { transform: rotate(-10deg); }
        100% { transform: rotate(0deg); }
    }
  }

  a {
     font-size: 40px;
     color: white;
     text-decoration: none;
  }
`
export default GlobalStyle