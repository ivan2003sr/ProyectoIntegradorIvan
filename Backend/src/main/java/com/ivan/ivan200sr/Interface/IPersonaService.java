package com.ivan.ivan200sr.Interface;

import com.ivan.ivan200sr.Entity.Persona;

import java.util.List;

public interface IPersonaService {
    //Trae lista de personas
    public List<Persona> getPersona();

    //Guardar Personas
    public void savePersona(Persona persona);

    //Eliminar usuario por ID
    public void deletePersona(Long id);

    //Buscar por ID
    public Persona findPersona(Long id);
}
