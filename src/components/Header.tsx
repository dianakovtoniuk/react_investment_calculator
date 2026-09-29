// @ts-ignore
import logo from '../assets/investment-calculator-logo.png';

function Header() {
  return (
   <header id='header'>
    <img src={logo} alt="Logo showing a money bag" />
    <h1>Investment Calcutator</h1>
   </header>
  )
}

export default Header