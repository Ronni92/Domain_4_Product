FROM openjdk:11-jre-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivo .jar
COPY target/product-management.jar /app/product-management.jar

# Exponer puerto 8080
EXPOSE 8080

# Comando de ejecución
ENTRYPOINT ["java", "-jar", "product-management.jar"]
