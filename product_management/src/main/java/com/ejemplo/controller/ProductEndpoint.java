public class ProductEndpoint {
    
}
package com.ejemplo.productmanagement.controller;

import com.ejemplo.productmanagement.model.Product;
import com.ejemplo.productmanagement.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ws.server.endpoint.annotation.Endpoint;
import org.springframework.ws.server.endpoint.annotation.PayloadRoot;
import org.springframework.ws.server.endpoint.annotation.ResponsePayload;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;
import com.ejemplo.productmanagement.wsdl.GetProductRequest;
import com.ejemplo.productmanagement.wsdl.GetProductResponse;

@Endpoint
public class ProductEndpoint {
    private static final String NAMESPACE_URI = "http://example.com/products";

    @Autowired
    private ProductService productService;

    @PayloadRoot(namespace = NAMESPACE_URI, localPart = "getProductRequest")
    @ResponsePayload
    public GetProductResponse getProduct(@RequestPayload GetProductRequest request) {
        Product product = productService.getProductById(request.getProductId());
        GetProductResponse response = new GetProductResponse();
        response.setProduct(product);
        return response;
    }
}
