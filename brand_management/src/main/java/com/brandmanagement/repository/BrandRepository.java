package com.ejemplo.brandmanagement.repository;

import com.ejemplo.brandmanagement.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Long> {
}
