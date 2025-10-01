package com.vinsan.vssales.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "tb_sales")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String visited;
    private  Integer deals;
    private Double amount;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name="seller_id")
    private Seller seller;


    public Sale() {
    }
    public Sale(Long id, String visited, Integer deals, Double amount, LocalDate date, Seller seller) {
        this.id = id;
        this.visited = visited;
        this.deals = deals;
        this.amount = amount;
        this.date = date;
        this.seller = seller;
    }
}
