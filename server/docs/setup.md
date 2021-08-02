# Setup server application

## Docker setup

#### Prerequisites
- Install docker and docker-compose.

#### Database container
We use a postgres container as a test database. A pgadmin container is also used to navigate the database contents. The setup can be seen in `docker-compose.yml`. The default credentials for the postgres and pgadmin can be found in `docker.env`.
- When setting up a new connection in pgadmin, do not use 'localhost' like you would for a locally hosted postgres instance, use 'postgres'.