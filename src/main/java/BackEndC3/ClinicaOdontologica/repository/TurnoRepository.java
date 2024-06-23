package BackEndC3.ClinicaOdontologica.repository;


import BackEndC3.ClinicaOdontologica.entity.Turno;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TurnoRepository extends JpaRepository<Turno,Long> {

}
