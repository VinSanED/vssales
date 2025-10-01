package com.vinsan.vssales.repositories;

import com.vinsan.vssales.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller,Long> {
}
