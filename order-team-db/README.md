# Order Team - Database Design

## Description

This directory contains PostgreSQL database design files for the Order Team application.

## Features

- PostgreSQL schema design
- Table creation and relationship scripts
- Migration files
- ERD (Entity Relationship Diagram)
- Database configuration

## Main Tables (Expected)

- `users` - Team member information
  - id, email, name, password_hash, created_at, updated_at

## Database Connection

- **Engine**: PostgreSQL 15+
- **Connection**: Use environment variables for configuration
- **ORM**: Prisma (as defined in backend)
