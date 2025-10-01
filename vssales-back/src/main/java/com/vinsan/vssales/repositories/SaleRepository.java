package com.vinsan.vssales.repositories;

import com.vinsan.vssales.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale,Long> {
}
