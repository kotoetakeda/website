import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAddressBook,
  faAddressCard,
  faAngry,
  faArrowAltCircleDown,
  // Add all other icons you need from @fortawesome/free-solid-svg-icons
} from '@fortawesome/free-solid-svg-icons';

// Add all icons to the library
library.add(
  faAddressBook,
  faAddressCard,
  faAngry,
  faArrowAltCircleDown,
  // Add all other icons you imported
);

export { FontAwesomeIcon };
