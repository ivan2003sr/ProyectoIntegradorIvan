package com.ivan.ivan200sr.Controller;

import com.ivan.ivan200sr.Entity.Persona;
import com.ivan.ivan200sr.Interface.IPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonaController {
    @Autowired
    IPersonaService iPersonaService;

    @GetMapping("usuarios/traer")
    public List<Persona> gerPersona(){
        return iPersonaService.getPersona();
    }

    @PostMapping("/usuarios/crear")
    public String createPersona(@RequestBody Persona persona){
        iPersonaService.savePersona(persona);
        return "Usuario creado correctamente";
    }

    @DeleteMapping("/usuarios/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        iPersonaService.deletePersona(id);
        return "Usuario eliminado correctamente";
    }

    @PutMapping("usuarios/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
                               @RequestParam("nombre") String nuevoNombre,
                               @RequestParam("apellido") String nuevoApellido,
                               @RequestParam("img") String nuevaImagen){
        Persona persona = iPersonaService.findPersona(id);
        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevaImagen);

        iPersonaService.savePersona(persona);
        return persona;
    }

}
