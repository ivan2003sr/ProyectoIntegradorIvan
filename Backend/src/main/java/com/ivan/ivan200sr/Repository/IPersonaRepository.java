package com.ivan.ivan200sr.Repository;

import com.ivan.ivan200sr.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepository extends JpaRepository<Persona,Long> {

}
