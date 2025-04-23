CREATE TYPE priorities AS ENUM('low','medium','high');
CREATE TYPE status AS ENUM('todo','in_progress','review','done');
CREATE TYPE roles AS ENUM('user','manager');

CREATE TABLE IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number INTEGER NOT NULL,
    created_at DATE NOT NULL,
    user_role roles NOT NULL
    );

CREATE TABLE IF NOT EXISTS task
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    due_date DATE NOT NULL,
    priority priorities NOT NULL,
    created_by INTEGER NOT NULL,
    FOREIGN KEY(created_by) REFERENCES users(id)
    );

CREATE TABLE IF NOT EXISTS attachment
(
    id SERIAL PRIMARY KEY,
    task_id INTEGER NOT NULL,
    upload_by INTEGER NOT NULL,
    file_url VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMPTZ NOT NULL,
    CONSTRAINT fk_task FOREIGN KEY(task_id) REFERENCES task(id),
    CONSTRAINT fk_user FOREIGN KEY(upload_by) REFERENCES users(id)
    );

CREATE TABLE IF NOT EXISTS comment
(
    id SERIAL PRIMARY KEY,
    task_id INTEGER NOT NULL,
    upload_by INTEGER NOT NULL,
    content VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMPTZ NOT NULL,
    CONSTRAINT fk_task FOREIGN KEY(task_id) REFERENCES task(id),
    CONSTRAINT fk_user FOREIGN KEY(upload_by) REFERENCES users(id)
    );
