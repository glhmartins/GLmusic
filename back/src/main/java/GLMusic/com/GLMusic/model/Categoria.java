package GLMusic.com.GLMusic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "CATEGORIA")
public class Categoria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="ID")
    private Long id;
    @Column(name="NOME")
    private String nome;
    @Column(name="SLUG")
    private String slug;

    @JsonIgnore
    @OneToMany (mappedBy = "categoria")
    private List<Produto> produtos;

    public Categoria(String nome, String slug) {
        this.nome = nome;
        this.slug = slug;
    }
}

