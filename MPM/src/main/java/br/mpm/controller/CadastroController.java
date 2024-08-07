package br.mpm.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import br.uniceub.rpg.service.dto.UsuarioDTO;

@RestController
@RequestMapping("")
@RequiredArgsConstructor
public class CadastroController {



//    @PostMapping("cadastrar-usuario")
//    @PreAuthorize("isAuthenticated()")
//    @ResponseStatus(HttpStatus.OK)
//    public ResponseEntity<Usuario> cadastrarUsuario(@RequestBody UsuarioDTO usuario){
//        return ResponseEntity.ok(this.cadastrarUsuarioService.cadastrar(usuario));
//    };
//
//    @GetMapping("login-usuario/{usuario}/{password}")
//    @PreAuthorize("isAuthenticated()")
//    public ResponseEntity<Usuario> logarUsuario(@PathVariable("usuario") String usuario, @PathVariable("password") String password){
//        return ResponseEntity.ok(this.cadastrarUsuarioService.login(usuario, password));
//    };

}