package br.mpm.service;

//import br.uniceub.rpg.comum.entity.Usuario;
//import br.uniceub.rpg.comum.exception.NegocioException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import br.uniceub.rpg.service.dto.UsuarioDTO;

@Service
@RequiredArgsConstructor
public class CadastrarUsuarioService{
//
//    private final CadastrarUsuarioRepository cadastrarUsuarioRepository;
//
//
//    @Transactional
//    public Usuario cadastrar(UsuarioDTO usuario){
//        Usuario usuarioSalvo = new Usuario();
//        usuarioSalvo.setUsuario(usuario.getUsuario());
//        usuarioSalvo.setPassword(usuario.getPassword());
//        return this.cadastrarUsuarioRepository.save(usuarioSalvo);
//    }
//
//    public Usuario login(String usuario, String password){
//    Usuario usuarioBuscado = this.cadastrarUsuarioRepository.buscaLogin(usuario,password);
//        if(usuarioBuscado != null){
//            return usuarioBuscado;
//        }else{
//            throw new NegocioException(this.getClass().getName(), "Usuario não encontrado");
//        }
//    }
//









}