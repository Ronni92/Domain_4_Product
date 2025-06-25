package com.ejemplo.gestionproductos.ws;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService
public class ProductoEndpoint {

    @WebMethod
    public String obtenerProducto(String idProducto) {
        // Aquí iría la lógica de la base de datos
        return "Producto con ID: " + idProducto;
    }
}
