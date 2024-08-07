package br.uniceub.rpg.service.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class UsuarioDTO {
    Long id;
    String usuario;
    String password;
}