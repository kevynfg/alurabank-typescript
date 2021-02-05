import {Imprimivel} from './Imprimivel'
import {Igualavel} from './Igualavel'
//Pode extender interfaces, mas não classes
export interface MeuObjeto<T> extends Imprimivel, Igualavel<T> {

}