# Build stage
FROM gradle:7.6.4-jdk11 AS build

# Set working directory
WORKDIR /app

# Copy Gradle files
COPY build.gradle settings.gradle ./
COPY gradle ./gradle
COPY src ./src

# Build the application
RUN gradle build --no-daemon

# Run stage
FROM openjdk:11-jre-slim

WORKDIR /app

# Copy the built artifact from build stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"] 