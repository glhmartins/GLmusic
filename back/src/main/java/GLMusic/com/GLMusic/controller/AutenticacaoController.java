package GLMusic.com.GLMusic.controller;

import GLMusic.com.GLMusic.model.Usuario;
import GLMusic.com.GLMusic.service.AutenticacaoService;
import GLMusic.com.GLMusic.util.TokenResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("autenticacao")
public class AutenticacaoController {

    @Autowired
    private AutenticacaoService autenticacaoService;

    @PostMapping("login")
    public TokenResponse login(@RequestBody Usuario usuario) {
        System.out.println(usuario.getConta() + " " + usuario.getSenha());
        Usuario usuarioLogado = autenticacaoService.login(usuario);
        if (usuarioLogado != null) {
            return new TokenResponse(usuarioLogado.getId());
        } else {
            return new TokenResponse(0);
        }
    }
}
