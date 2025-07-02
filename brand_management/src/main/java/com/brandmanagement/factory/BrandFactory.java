package com.ejemplo.brandmanagement.factory;

import com.ejemplo.brandmanagement.model.Brand;

public class BrandFactory {
    public static Brand createBrand(String name, String category) {
        return new Brand(name, category);
    }
}
