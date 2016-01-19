--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.4
-- Dumped by pg_dump version 9.4.4
-- Started on 2015-11-03 14:01:12

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- TOC entry 178 (class 3079 OID 11855)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2032 (class 0 OID 0)
-- Dependencies: 178
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 174 (class 1259 OID 16555)
-- Name: connections; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE connections (
    date_time text NOT NULL,
    unit_id text NOT NULL,
    vehicle_id bigint NOT NULL,
    port text,
    value text
);


ALTER TABLE connections OWNER TO postgres;

--
-- TOC entry 172 (class 1259 OID 16545)
-- Name: devices; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE devices (
    device_id text NOT NULL,
    type text
);


ALTER TABLE devices OWNER TO postgres;

--
-- TOC entry 175 (class 1259 OID 16560)
-- Name: events; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE events (
    date_time text NOT NULL,
    unit_id text NOT NULL,
    vehicle_id bigint NOT NULL,
    port text,
    value text
);


ALTER TABLE events OWNER TO postgres;

--
-- TOC entry 176 (class 1259 OID 16565)
-- Name: monitoring; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE monitorings (
	idmon SERIAL,
    unit_id bigint NOT NULL,
    begin_time text NOT NULL,
	end_time text NOT NULL,
    device_id text NOT NULL,
    vehicle_id bigint NOT NULL,
    min text,
    max text,
    sum text
);


ALTER TABLE monitorings OWNER TO postgres;

--
-- TOC entry 177 (class 1259 OID 16570)
-- Name: positions; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE positions (
    date_time text NOT NULL,
    unit_id bigint NOT NULL,
    vehicle_id bigint NOT NULL,
    rdx numeric,
    rdy numeric,
    speed bigint,
    course bigint,
    um_satellites bigint,
    hdop bigint,
    quality text
);


ALTER TABLE positions OWNER TO postgres;

--
-- TOC entry 173 (class 1259 OID 16550)
-- Name: vehicles; Type: TABLE; Schema: public; Owner: postgres; Tablespace: 
--

CREATE TABLE vehicles (
    vehicle_id bigint NOT NULL,
    type text
);


ALTER TABLE vehicles OWNER TO postgres;

--
-- TOC entry 1904 (class 2606 OID 16559)
-- Name: connections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY connections
    ADD CONSTRAINT connections_pkey PRIMARY KEY (date_time, unit_id, port);


--
-- TOC entry 1900 (class 2606 OID 16549)
-- Name: devices_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (device_id);


--
-- TOC entry 1906 (class 2606 OID 16564)
-- Name: events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY events
    ADD CONSTRAINT events_pkey PRIMARY KEY (date_time, unit_id, port);


--
-- TOC entry 1908 (class 2606 OID 16569)
-- Name: monitoring_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY monitorings
    ADD CONSTRAINT monitoring_pkey PRIMARY KEY (idmon);


--
-- TOC entry 1910 (class 2606 OID 16574)
-- Name: positions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY positions
    ADD CONSTRAINT positions_pkey PRIMARY KEY (date_time, unit_id);


--
-- TOC entry 1902 (class 2606 OID 16554)
-- Name: vehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres; Tablespace: 
--

ALTER TABLE ONLY vehicles
    ADD CONSTRAINT vehicles_pkey PRIMARY KEY (vehicle_id);


--
-- TOC entry 1911 (class 2606 OID 16585)
-- Name: connections_vehicle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY connections
    ADD CONSTRAINT connections_vehicle_id_fkey FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id);


--
-- TOC entry 1912 (class 2606 OID 16590)
-- Name: events_vehicle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY events
    ADD CONSTRAINT events_vehicle_id_fkey FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id);


--
-- TOC entry 1913 (class 2606 OID 16575)
-- Name: monitoring_device_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY monitorings
    ADD CONSTRAINT monitoring_device_id_fkey FOREIGN KEY (device_id) REFERENCES devices(device_id);


--
-- TOC entry 1914 (class 2606 OID 16580)
-- Name: monitoring_vehicle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY monitorings
    ADD CONSTRAINT monitoring_vehicle_id_fkey FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id);


--
-- TOC entry 1915 (class 2606 OID 16595)
-- Name: positions_vehicle_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY positions
    ADD CONSTRAINT positions_vehicle_id_fkey FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id);


--
-- TOC entry 2031 (class 0 OID 0)
-- Dependencies: 5
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2015-11-03 14:01:12

--
-- PostgreSQL database dump complete
--
