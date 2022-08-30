import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./Loading.css";
const Loading = () => {
  return <FontAwesomeIcon icon={faSpinner} className='spinner' />;
};

export { Loading };
