import { faCalendar, faTag, faUser, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconMap={
    calendar:faCalendar,
    tag:faTag,
    user:faUser
}



const Icon=({icon,...props})=>{

    return <FontAwesomeIcon icon={iconMap[icon]} {...props}/>
}

export default Icon;