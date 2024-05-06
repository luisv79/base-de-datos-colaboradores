
import Alert from 'react-bootstrap/Alert';

const Alerta = ({colorAlert, textAlert}) => {
    
        return (
          <div className="alerta">
              <Alert variant={colorAlert}>
            <p>
              {textAlert}
            </p>
          </Alert>

            </div>

        )
    
};

export default Alerta;
