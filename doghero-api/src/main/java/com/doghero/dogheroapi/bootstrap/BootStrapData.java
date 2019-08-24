package com.doghero.dogheroapi.bootstrap;

import com.doghero.dogheroapi.domain.Client;
import com.doghero.dogheroapi.domain.Dog;
import com.doghero.dogheroapi.domain.Walker;
import com.doghero.dogheroapi.repositories.ClientRepository;
import com.doghero.dogheroapi.repositories.DogRepository;
import com.doghero.dogheroapi.repositories.WalkerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class BootStrapData implements CommandLineRunner {

    private final ClientRepository clientRepository;
    private final DogRepository dogRepository;
    private final WalkerRepository walkerRepository;


    public BootStrapData(ClientRepository clientRepository, DogRepository dogRepository,
            WalkerRepository walkerRepository) {

        this.clientRepository = clientRepository;
        this.dogRepository = dogRepository;
        this.walkerRepository = walkerRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        System.out.println("Loading Data");

        Client c1 = new Client();
        c1.setName("Renata Valente");
        c1.setAddress("Rua das Cerejeiras, 22");
        c1.setCpf("23489578455");
        c1.setEmail("renatavalente@brazil.com");
        c1.setPhone("13992384729");
        clientRepository.save(c1);

        Client c2 = new Client();
        c2.setName("Diego Feliz");
        c2.setAddress("Alameda dos Caquis, 345");
        c2.setCpf("34567854322");
        c2.setEmail("diego@feliz.com.br");
        c2.setPhone("11934567895");
        clientRepository.save(c2);

        Client c3 = new Client();
        c3.setName("Carlos Moreira");
        c3.setAddress("Avenida Suspensa, 111");
        c3.setCpf("34567854321");
        c3.setEmail("carlosmoreira@hotmail.com");
        c3.setPhone("11923847562");
        clientRepository.save(c3);

        Walker w1 = new Walker();
        w1.setName("Elias Dias");
        w1.setAddress("Avenida dos Pinhais, 12");
        w1.setCpf("43657486977");
        w1.setEmail("eliasdias@maravilhas.com");
        w1.setPhone("1947586756");
        w1.setDescription("Eu amo cachorros! Desde criança sempre tive mais de 10 em casa");
        walkerRepository.save(w1);

        Walker w2 = new Walker();
        w2.setName("Mariana Fragoso");
        w2.setAddress("Alameda Santos, 364");
        w2.setCpf("12343657488");
        w2.setEmail("mari__fragoso@bol.com.br");
        w2.setPhone("11923456785");
        w2.setDescription("Oi! Moro em São Paulo há 5 anos e gosto de passear com doguinhos pra me distrair "
                + "dos meus problemas");
        walkerRepository.save(w2);

        Walker w3 = new Walker();
        w3.setName("Roberto Pereira");
        w3.setAddress("Rua Domingo, 456");
        w3.setCpf("32457689566");
        w3.setEmail("robertopereirao@hotmail.com");
        w3.setPhone("1198465748");
        w3.setDescription("Gosto de passear com cachorros aos domingos para complementar a renda e casa.");
        walkerRepository.save(w3);

        Dog d1 = new Dog();
        d1.setName("Abacate");
        d1.setAge(3);
        d1.setBreed("Poodle");
        d1.setSex("Female");
        d1.setWeight(9);
        d1.setDescription("Lovely white poodle that likes to take a walk");
        d1.setOwner(c2);
        dogRepository.save(d1);

        Dog d2 = new Dog();
        d2.setName("Eva");
        d2.setAge(7);
        d2.setBreed("Pitbull");
        d2.setSex("Female");
        d2.setWeight(30);
        d2.setDescription("The most adorable black pitbull you'll ever meet");
        d2.setOwner(c1);
        dogRepository.save(d2);

        Dog d3 = new Dog();
        d3.setName("Virgulino");
        d3.setAge(0);
        d3.setBreed("Vira-lata");
        d3.setSex("Male");
        d3.setWeight(2);
        d3.setDescription("A dog that never existed. RIP");
        d3.setOwner(c3);
        dogRepository.save(d3);


        System.out.println("Client Saved: " + clientRepository.count());
        System.out.println("Walker Saved: " + walkerRepository.count());
        System.out.println("Dog Saved: " + dogRepository.count());

    }
}
