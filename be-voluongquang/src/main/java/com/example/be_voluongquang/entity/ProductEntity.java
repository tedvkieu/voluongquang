package com.example.be_voluongquang.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "product")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductEntity extends BaseEntity {
    @Id
    @Column(name = "prd_id")
    private String prdId;

    @Column(name = "prd_name")
    private String name;

    @Column(name = "price")
    private double price;

    @Column(name = "cost_price")
    private double costPrice;

    @Column(name = "wholescale_price")
    private double wholeScalePrice;

    @Column(name = "stock_quantity")
    private int stockQuantity;

    @Column(name = "unit")
    private String unit;

    @Column(name = "image_url")
    private String imageUrl;

    @Column(name = "weight")
    private String weight;

    @ManyToOne
    @JoinColumn(name = "brand_id", nullable = false)
    private BrandEntity brand;

}
