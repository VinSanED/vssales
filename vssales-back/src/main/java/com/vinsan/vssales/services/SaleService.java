package com.vinsan.vssales.services;

import com.vinsan.vssales.DTO.SaleDTO;
import com.vinsan.vssales.DTO.SaleSuccessDTO;
import com.vinsan.vssales.DTO.SaleSumDTO;
import com.vinsan.vssales.repositories.SaleRepository;
import com.vinsan.vssales.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaleService {

    @Autowired
    private SaleRepository srepo;

    @Autowired
    private SellerRepository seRepo;

    @Transactional(readOnly = true)
    public Page<SaleDTO> findSales(Pageable pageable){
        seRepo.findAll();
        return    srepo.findAll(pageable)
                    .map(SaleDTO::new);
    }

    @Transactional(readOnly = true)
    public List<SaleSumDTO> amountGroupedBySeller(){
        return  srepo.amountGroupedBySeller();
    }

    @Transactional(readOnly = true)
    public  List<SaleSuccessDTO> successGroupedBySeller(){
        return srepo.successGroupedBySeller();
    }
}
