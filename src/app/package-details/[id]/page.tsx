import { Metadata } from 'next';
import './page.css';

export const metadata: Metadata = {
    title: "Paquete - GoGoTours",
    description: "Paquete",
};

export default function PackageDetails({ params }: { params: { id: string } }) {
    return (
        <main>
            <p className="package-title">Paquete turístico</p>
            <div className="container">
                <div className="package-image">
                    <img src="" alt="Imagen promocional" />
                </div>
                <div className="package-content">
                    <div className="package-details">
                        <p><strong>Descripción:</strong>Descripción</p>
                        <p><strong>Destino:</strong>Lugar de destino</p>
                        <p><strong>Duración:</strong>90 días</p>
                        <p><strong>Capacidad máxima:</strong> 90 personas</p>
                        <p><strong>Fecha de inicio:</strong> 20/11/2023 </p>
                        <p><strong>Fecha de regreso:</strong> 20/11/2043 </p>
                        <p><strong>Precio:</strong>$1000.00</p>
                    </div>
                    <div style={{ display: 'flex' }}>
                        {true /*TODO: Luego se verifica si es admin ?*/ && (
                            <><form id="chat-form" method="post" className="package-button">
                                <button type="button" id="reserve-button" className="button button--primary align-center button-info">
                                    ¡Reserva ahora!
                                </button>
                            </form><div className="package-button">
                                    <a href="#" className="button button--secondary align-center button-info">
                                        Chatea con un asesor
                                    </a>
                                </div></>
                        )}
                    </div>
                </div>
            </div>
            {true /*TODO: Luego se verifica si es admin ?*/ && (
                <>
                    <div className="d-flex align-items-end">
                        <a href="" className="button button--secondary" style={{ marginBottom: '5px' }}>
                            <i className="fas fa-edit"></i> Editar información
                        </a>
                    </div>
                    <div className="d-flex align-items-end">
                        <a href="" className="button button--primary">
                            <i className="fas fa-trash"></i> Eliminar tour
                        </a>
                    </div>
                </>
            )}
        </main>
    );
}
