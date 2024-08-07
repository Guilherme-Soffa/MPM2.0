package br.mpm.comum.entity;

import lombok.*;

import javax.persistence.*;

@Table(name = "tb_usuario")
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pk_usuario")
    private Long id;

    @Column(name = "no_usuario")
    private String usuario;

    @Column(name = "nu_password")
    private String password;

}