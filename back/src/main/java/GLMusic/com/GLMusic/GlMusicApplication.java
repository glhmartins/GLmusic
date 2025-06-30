package GLMusic.com.GLMusic;

import GLMusic.com.GLMusic.repository.CategoriaRepository;
import GLMusic.com.GLMusic.repository.ProdutoRepository;
import GLMusic.com.GLMusic.model.Categoria;
import GLMusic.com.GLMusic.model.Produto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class GlMusicApplication implements CommandLineRunner {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	public static void main(String[] args) {
		SpringApplication.run(GlMusicApplication.class, args);
	}

	public void run(String... args) throws Exception {

		Categoria guitarra = new Categoria("Guitarra", "guitarras");
		categoriaRepository.save(guitarra);

		Categoria baixo = new Categoria("Baixo", "baixos");
		categoriaRepository.save(baixo);

		Categoria pedal = new Categoria("Pedal", "pedais");
		categoriaRepository.save(pedal);

		Categoria amplificador = new Categoria("Amplificador", "amplificadores");
		categoriaRepository.save(amplificador);

		Produto produto = new Produto(
				"A1.6 Canibalismo.png",
				"Solar A1.6 Canibalismo",
				"solar-a1-6-canibalismo",
				"Guitarra elétrica de 6 cordas com design agressivo e captadores de alta saída.",
				new BigDecimal("13999.00"),
				LocalDate.of(2024, 6, 26),
				guitarra);
		produtoRepository.save(produto);

		produto = new Produto(
				"E1.6 Vinter.png",
				"Solar E1.6 Vinter",
				"solar-e1-6-vinter",
				"Modelo Explorer de 6 cordas, cor branca, ideal para estilos de rock e metal.",
				new BigDecimal("8490.00"),
				LocalDate.of(2024, 6, 26),
				guitarra);
		produtoRepository.save(produto);

		produto = new Produto(
				"Ibanez Q.jpg",
				"Ibanez Q",
				"ibanez-q",
				"Guitarra headless (sem headstock) compacta, leve e ergonômica, com 7 cordas.",
				new BigDecimal("10990.00"),
				LocalDate.of(2024, 6, 26),
				guitarra);
		produtoRepository.save(produto);

		produto = new Produto(
				"Ibanez RG.png",
				"Ibanez RG Gio",
				"ibanez-rg-gio",
				"Excelente guitarra para iniciantes da série Gio, ótimo custo-benefício e versatilidade.",
				new BigDecimal("2599.90"),
				LocalDate.of(2024, 6, 26),
				guitarra);
		produtoRepository.save(produto);

		produto = new Produto(
				"Fender Jazz Bass.png",
				"Solar E2.4C Bop",
				"solar-e24c-bop",
				"Contrabaixo elétrico de 4 cordas, um clássico da indústria musical.",
				new BigDecimal("4990.90"),
				LocalDate.of(2025, 6, 26),
				baixo);
		produtoRepository.save(produto);

		produto = new Produto(
				"Ibanez BTB.png",
				"Ibanez BTB 5",
				"ibanez-btb-5",
				"Contrabaixo moderno com design ergonômico e captação ativa versátil.",
				new BigDecimal("13999.00"),
				LocalDate.of(2025, 6, 26),
				baixo);
		produtoRepository.save(produto);

		produto = new Produto(
				"Music Man.png",
				"Ibanez SR",
				"ibanez-sr",
				"Contrabaixo de 5 cordas conhecido por seu timbre potente e definido.",
				new BigDecimal("4000.00"),
				LocalDate.of(2025, 6, 26),
				baixo);
		produtoRepository.save(produto);

		produto = new Produto(
				"Warwick.png",
				"Solar AB2.4 Car",
				"solar-ab24-car",
				"Contrabaixo alemão de 4 cordas, famoso por suas madeiras exóticas e som único.",
				new BigDecimal("6500.00"),
				LocalDate.of(2025, 6, 26),
				baixo);
		produtoRepository.save(produto);

		produto = new Produto(
				"Big Muff.png",
				"Boss Super OverDrive SD-1",
				"boss-super-overdrive-sd1",
				"Pedal de Fuzz clássico, ideal para timbres de rock e stoner.",
				new BigDecimal("549.90"),
				LocalDate.of(2025, 6, 26),
				pedal);
		produtoRepository.save(produto);

		produto = new Produto(
				"Chorus.png",
				"Boss Digital Delay DD-3T",
				"boss-digital-delay-dd3t",
				"Pedal de Chorus que adiciona modulação e profundidade ao som da guitarra.",
				new BigDecimal("449.90"),
				LocalDate.of(2025, 6, 26),
				pedal);
		produtoRepository.save(produto);

		produto = new Produto(
				"Reverb.png",
				"Boss Turbo Distortion DS-2",
				"boss-turbo-distortion-ds2",
				"Pedal de Reverb com múltiplos modos para simular ambientes e espaços.",
				new BigDecimal("749.90"),
				LocalDate.of(2025, 6, 26),
				pedal);
		produtoRepository.save(produto);

		produto = new Produto(
				"Wah Wah.png",
				"Boss Metal Zone MT-2",
				"boss-metal-zone-mt2",
				"Clássico pedal de Wah para expressividade e timbres funkeados.",
				new BigDecimal("849.90"),
				LocalDate.of(2025, 6, 26),
				pedal);
		produtoRepository.save(produto);


		produto = new Produto(
				"Fender.png",
				"Fender Champion",
				"fender-champion",
				"Amplificador valvulado com som cristalino, ideal para blues e rock clássico.",
				new BigDecimal("4199.00"),
				LocalDate.of(2025, 6, 26),
				amplificador);
		produtoRepository.save(produto);

		produto = new Produto(
				"Marshall.png",
				"Marshall MG15",
				"marshall-mg15",
				"Cabeçote valvulado icônico, a cara e o som do rock britânico.",
				new BigDecimal("12990.00"),
				LocalDate.of(2025, 6, 26),
				amplificador);
		produtoRepository.save(produto);

		produto = new Produto(
				"Orange.png",
				"Orange Crush 20",
				"orange-crush-20",
				"Amplificador com drive característico e visual marcante.",
				new BigDecimal("2150.00"),
				LocalDate.of(2025, 6, 26),
				amplificador);
		produtoRepository.save(produto);

		produto = new Produto(
				"Peavey.png",
				"Boss Katana",
				"boss-katana",
				"Amplificador de alto ganho, referência para guitarristas de metal.",
				new BigDecimal("3099.90"),
				LocalDate.of(2025, 6, 26),
				amplificador);
		produtoRepository.save(produto);
}

}
