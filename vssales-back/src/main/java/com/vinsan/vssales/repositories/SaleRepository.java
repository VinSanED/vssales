package com.vinsan.vssales.repositories;

import com.vinsan.vssales.DTO.SaleSuccessDTO;
import com.vinsan.vssales.DTO.SaleSumDTO;
import com.vinsan.vssales.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale,Long> {

    @Query("SELECT new com.vinsan.vssales.DTO.SaleSumDTO(obj.seller, SUM(obj.amount))"
        + " FROM Sale AS obj GROUP BY obj.seller"
    )
    List<SaleSumDTO> amountGroupedBySeller();

    @Query("SELECT new com.vinsan.vssales.DTO.SaleSuccessDTO(obj.seller, SUM(obj.visited), SUM(obj.deals))"
        + " FROM Sale AS obj GROUP BY obj.seller"
    )
    List<SaleSuccessDTO> successGroupedBySeller();


}
