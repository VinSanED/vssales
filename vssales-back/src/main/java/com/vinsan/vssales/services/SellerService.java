package com.vinsan.vssales.services;

import com.vinsan.vssales.DTO.SellerDTO;
import com.vinsan.vssales.entities.Seller;
import com.vinsan.vssales.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SellerService {

    @Autowired
    private SellerRepository srepo;

    public List<SellerDTO> findAll(){
      //  List<Seller> sellers = srepo.findAll();
      //  List<SellerDTO> sdto = sellers.stream().map(SellerDTO::new).collect(Collectors.toList());
        return srepo.findAll().stream().map(SellerDTO::new).toList();
    }
}
