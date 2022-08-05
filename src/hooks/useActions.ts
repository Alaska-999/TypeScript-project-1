//суть хука в том что мы связываем АС и диспатч
//тоесть диспатч уже не понадобится, а достаточно будет
//вызвать АС и он сам прокинется в диспач

import { useDispatch } from "react-redux"
import {bindActionCreators} from 'redux'
import ActionCreators from '../store/action-creators/index'

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(ActionCreators, dispatch)
}