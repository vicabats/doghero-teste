package com.doghero.dogheroapi.services;

import com.doghero.dogheroapi.domain.Client;
import com.doghero.dogheroapi.repositories.ClientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    private final ClientRepository clientRepository;

    public ClientServiceImpl(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Override
    public Client findClientById(Long id) {
        return clientRepository.findById(id).get();
    }

    @Override
    public List<Client> findAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client saveClient(Client client){
        return clientRepository.save(client);
    }
}
