# Build stage
FROM gradle:7.6.4-jdk11 AS build

# Set working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Build with retry mechanism
RUN for i in {1..3}; do \
    gradle :trend-dashboard:build --no-daemon --info && break || \
    if [ $i -eq 3 ]; then exit 1; fi; \
    echo "Build attempt $i failed, retrying in 5 seconds..."; \
    sleep 5; \
    done

# Run stage
FROM openjdk:11-jre-slim

WORKDIR /app

# Copy the built artifact from build stage
COPY --from=build /app/src/trend-dashboard/build/libs/*.jar app.jar

# Expose the service port
EXPOSE 8083

# Command to run the service
CMD ["java", "-jar", "app.jar"] 