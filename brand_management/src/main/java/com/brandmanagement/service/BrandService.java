package com.ejemplo.brandmanagement.service;

import com.ejemplo.brandmanagement.model.Brand;
import com.ejemplo.brandmanagement.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandService {

    @Autowired
    private BrandRepository brandRepository;

    public Brand getBrandById(Long id) {
        return brandRepository.findById(id).orElse(null);
    }
}
