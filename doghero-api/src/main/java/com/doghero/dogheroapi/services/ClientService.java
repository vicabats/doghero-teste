package com.doghero.dogheroapi.services;

import com.doghero.dogheroapi.domain.Client;

import java.util.List;

public interface ClientService {

    Client findClientById(Long id);

    List<Client> findAllClients();

    Client saveClient(Client client);
}