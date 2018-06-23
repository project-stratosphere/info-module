
dropdb general-info

create database general-info

psql general-info

CREATE SCHEMA "listing-info"
    AUTHORIZATION humanity;

-- Table: "listing-info".general

-- DROP TABLE "listing-info".general;

CREATE TABLE "listing-info".general
(
    id integer NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    location text COLLATE pg_catalog."default" NOT NULL,
    home_type text COLLATE pg_catalog."default" NOT NULL,
    name character(100) COLLATE pg_catalog."default" NOT NULL,
    avatar_url text COLLATE pg_catalog."default" NOT NULL,
    short_description text COLLATE pg_catalog."default" NOT NULL,
    more_description1_body text COLLATE pg_catalog."default" NOT NULL,
    more_description1_head text COLLATE pg_catalog."default" NOT NULL,
    more_description2_body text COLLATE pg_catalog."default",
    more_description2_head text COLLATE pg_catalog."default",
    more_description3_body text COLLATE pg_catalog."default",
    more_description3_head text COLLATE pg_catalog."default",
    highlights1_body text COLLATE pg_catalog."default",
    highlights1_head text COLLATE pg_catalog."default",
    highlights2_body text COLLATE pg_catalog."default",
    highlights2_head text COLLATE pg_catalog."default",
    highlights3_body text COLLATE pg_catalog."default",
    highlights3_head text COLLATE pg_catalog."default",
    guests smallint,
    bedrooms smallint,
    beds smallint,
    baths smallint,
    CONSTRAINT general_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE "listing-info".general
    OWNER to humanity;


