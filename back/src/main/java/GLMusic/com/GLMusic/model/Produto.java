package GLMusic.com.GLMusic.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.math.BigDecimal;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name="PRODUTO")
public class Produto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private Long id;
    @Column(name="IMAGEM")
    private String imagem;
    @Column(name="NOME")
    private String nome;
    @Column(name="SLUG")
    private String slug;
    @Column(name="DESCRICAO")
    private String descricao;
    @Column(name="PRECO")
    private BigDecimal preco;
    @Column(name="DATACADASTRO")
    private LocalDate dataCadastro;
    @ManyToOne
    @JoinColumn(name="CATEGORIA")
    private Categoria categoria;

    public Produto(String imagem, String nome, String slug, String descricao, BigDecimal preco,
                   LocalDate dataCadastro, Categoria categoria) {
        this.imagem = imagem;
        this.nome = nome;
        this.slug = slug;
        this.descricao = descricao;
        this.preco = preco;
        this.dataCadastro = dataCadastro;
        this.categoria = categoria;
    }

    public Long getId() {
        return id;
    }
}