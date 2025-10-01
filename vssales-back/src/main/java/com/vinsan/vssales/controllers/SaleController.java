package com.vinsan.vssales.controllers;

import com.vinsan.vssales.DTO.SaleDTO;
import com.vinsan.vssales.DTO.SaleSuccessDTO;
import com.vinsan.vssales.DTO.SaleSumDTO;
import com.vinsan.vssales.services.SaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sales")
public class SaleController {

    @Autowired
    private SaleService serv;

    @GetMapping
    public ResponseEntity<Page<SaleDTO>> findSales(Pageable pageable){
        return ResponseEntity.ok(serv.findSales(pageable));
    }

    @GetMapping(value = "/sum")
    public ResponseEntity<List<SaleSumDTO>> amountGroupedBySeller(){
        return ResponseEntity.ok(serv.amountGroupedBySeller());
    }

    @GetMapping(value = "/success")
    public ResponseEntity<List<SaleSuccessDTO>> successGroupedBySeller(){
        return ResponseEntity.ok(serv.successGroupedBySeller());
    }
}
