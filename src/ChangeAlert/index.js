import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-alert'>
          <p>has realizado cambios en otra pestaña</p>
          <p>vuelve a recargar</p>
          <FontAwesomeIcon
            className='refresh'
            icon={faRefresh}
            onClick={() => toggleShow(false)}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
