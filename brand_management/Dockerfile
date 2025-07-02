FROM openjdk:11-jre-slim

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivo .jar
COPY target/brand-management.jar /app/brand-management.jar

# Exponer puerto 8081
EXPOSE 8081

# Comando de ejecución
ENTRYPOINT ["java", "-jar", "brand-management.jar"]
