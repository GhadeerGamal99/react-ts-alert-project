import { BellRing, X } from 'lucide-react';
import './index.scss'

interface IProps {

}
const Alert = ({}: IProps) => {
  return (
    <div className='alert-wrapper'>
     <BellRing />
     <h4>Alert Title</h4>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Quibusdam alias debitis, officia expedita eligendi ut placeat quae minima! Minus, eos.</p>
      <X />
    </div>
  )
}

export default Alert