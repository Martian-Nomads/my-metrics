## Initializing DB
https://www.postgresql.org/docs/13/app-initdb.html

## Use Homebrew to manage service
`brew services start postgresql`
(without brew: pg_ctl -D /opt/homebrew/var/postgres start)

## Common commands
| Command | Description |
| ----------- | ----------- |
| `postgres=# \du ` | List Users |
| `postgres=# \dt ` | List Tables |
| `postgres=# \l ` | List Databases |
| `postgres=# \c dbname ` | Switch Database |

## Common queries
| Command | Description |
| ----------- | ----------- |
| `CREATE DATABASE dbname OWNER rolename;` | Create database with owner |
| `CREATE USER username;` | Create user |
| `ALTER USER username WITH SUPERUSER;` | Give user SUPERUSER permissions |


## Links
https://www.postgresql.org/docs/
https://chartio.com/resources/tutorials/how-to-change-a-user-to-superuser-in-postgresql/
https://docs.faculty.ai/how_to/databases/postgresql.html
