
# Social Media Microservice Architecture

This repository contains a microservices architecture for a social media application built using Docker and various technologies. It provides a flexible and scalable solution with multiple services working together to provide the full functionality of the application.

## Services

The architecture consists of the following services:

1. **API Gateway**: A gateway service that routes requests to the appropriate backend services.
2. **Identity Service**: Handles user authentication and authorization.
3. **Post Service**: Manages user posts and related actions.
4. **Media Service**: Handles media uploads, storage, and retrieval.
5. **Search Service**: Provides search functionality for posts and media.
6. **MongoDB**: A NoSQL database for storing application data.
7. **Redis**: A caching layer for fast data retrieval.
8. **RabbitMQ**: A message broker used for communication between services.

## Requirements

- Docker
- Docker Compose

## Setup

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone <repository_url>
cd <repository_name>
```

### 2. Build the services

Use the following command to build and start all services:

```bash
docker-compose up --build
```

This will:

- Build the Docker images for all services
- Start the containers in the background
- Create the necessary networks and volumes

### 3. Verify the services

You can check the status of the services by running:

```bash
docker-compose ps
```

This will display the status of all containers.

### 4. Access the services

- **API Gateway**: Accessible at `http://localhost:3000`
- **Identity Service**: Accessible at `http://localhost:3001`
- **Post Service**: Accessible at `http://localhost:3002`
- **Media Service**: Accessible at `http://localhost:3003`
- **Search Service**: Accessible at `http://localhost:3004`
- **RabbitMQ**: Accessible at `http://localhost:15673` (management UI)
- **MongoDB**: Accessible at `localhost:27017`

## Environment Variables

Each service requires a `.env` file for environment configuration. The `.env` files for each service are stored in their respective directories (`api-gateway/.env`, `identity-service/.env`, etc.).

### Example `.env` for API Gateway

```env
IDENTITY_SERVICE_URL=http://identity-service:3001
POST_SERVICE_URL=http://post-service:3002
MEDIA_SERVICE_URL=http://media-service:3003
SEARCH_SERVICE_URL=http://search-service:3004
```

### Example `.env` for Identity Service

```env
MONGODB_URI=mongodb://root:root1234@mongodb:27017
REDIS_URL=redis://redis:6379
RABBITMQ_URL=amqp://admin:admin1234@rabbitmq:5672
```

## Stopping the Services

To stop the services without removing the containers, you can run:

```bash
docker-compose down
```

This will stop the services but keep the data intact.

To remove all services and volumes, run:

```bash
docker-compose down -v
```

## Troubleshooting

If you encounter issues with connecting services, check the logs of the affected service using:

```bash
docker-compose logs <service_name>
```

### Common Errors:
- **ECONNREFUSED**: This typically happens if a service is not up yet. Use `depends_on` and health checks to ensure services are ready before starting.
- **MongoDB Authentication Error**: Ensure that MongoDB is initialized with the correct credentials in your `.env` file.

## Contribution

If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. Be sure to follow the code style and include tests for any new features or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

