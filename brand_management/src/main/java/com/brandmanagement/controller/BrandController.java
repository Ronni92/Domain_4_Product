package com.ejemplo.brandmanagement.controller;

import com.ejemplo.brandmanagement.model.Brand;
import com.ejemplo.brandmanagement.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/brands")
public class BrandController {

    @Autowired
    private BrandService brandService;

    @GetMapping("/{id}")
    public Brand getBrand(@PathVariable Long id) {
        return brandService.getBrandById(id);
    }
}
