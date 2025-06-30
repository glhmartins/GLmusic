package GLMusic.com.GLMusic.controller;

import GLMusic.com.GLMusic.model.Produto;
import GLMusic.com.GLMusic.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("produtos")
public class ProdutoController {

    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public List<Produto> recuperarProdutos() {
        return produtoService.recuperarProdutos();
    }

    @PostMapping
    public Produto cadastraProduto(@RequestBody Produto produto) {
        return produtoService.cadastrarProduto(produto);
    }

    @PutMapping
    public Produto alterarProduto(@RequestBody Produto produto) {
        return produtoService.alterarProduto(produto);
    }

    @DeleteMapping  ("{idProduto}")
    public void removerProduto(@PathVariable("idProduto") long id) {
        produtoService.removerProduto(id);
    }
}
