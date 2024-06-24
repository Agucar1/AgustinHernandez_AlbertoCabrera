package BackEndC3.ClinicaOdontologica.repository;


import BackEndC3.ClinicaOdontologica.entity.Turno;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TurnoRepository extends JpaRepository<Turno,Long> {

}
