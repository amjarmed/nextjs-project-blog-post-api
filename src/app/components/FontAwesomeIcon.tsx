/* eslint-disable react/prop-types */

import {
  faBars,
  faCalendar,
  faTag,
  faUser,
  faXmarkSquare,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconMap = {
  calendar: faCalendar,
  tag: faTag,
  user: faUser,
  xmark: faXmarkSquare,
  bars: faBars,
};

const Icon = ({ icon, ...props }) => {
  return <FontAwesomeIcon icon={iconMap[icon]} {...props} />;
};

export default Icon;
