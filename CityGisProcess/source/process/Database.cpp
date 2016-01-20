#include <iostream>
// #include <pqxx/pqxx>
#include <libpq-fe.h>
#include <cstdio>
#include <exception>
#include <string>
#include <Database.h>
#include <Positions.h>
#include <Connections.h>
using namespace std;
/* ************************************************ Connection Manager ************************************************ */

class myexception : public exception
{
    virtual const char* what() const throw()
    {
        return "Connection failed";
    }
} myex;

/* Close connection to database */
void CloseConn(PGconn *conn)
{
    PQfinish(conn);
    // conn=NULL;
}


/* Establish connection to database */
PGconn *ConnectDB()
{
    PGconn *conn = NULL;

    // Make a connection to the database
    conn = PQconnectdb("user=homestead password=secret dbname=project hostaddr=127.0.0.1 port=5432");

    // Check to see that the backend connection was successfully made 
    if (PQstatus(conn) != CONNECTION_OK)
    {
        cerr << "Connection to database failed\n";
        CloseConn(conn);
    } else {
        cout << "Connection to database - OK\n";
    }

    return conn;
}

/* ************************************************ Connection QueryHandler ************************************************ */

/* Append SQL statement and insert record into connections table */
void InsertConnectionRec(PGconn *conn, std::string date_time, std::string unit_id, std::string vehicle_id, std::string port, std::string value)
{
    // Append the SQL statment
    std::string sSQL;
    sSQL.append("INSERT INTO connections VALUES ('");
    sSQL.append(date_time);
    sSQL.append("', '");
    sSQL.append(unit_id);
    sSQL.append("', '");
    sSQL.append(vehicle_id);
    sSQL.append("', '");
    sSQL.append(port);
    sSQL.append("', '");
    sSQL.append(value);
    sSQL.append("')");

    // Execute with sql statement
    PGresult *res = PQexec(conn, sSQL.c_str());

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        throw myexception();
        cerr << "Insert connection record failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Insert connection record - OK\n";
        // Clear result
        PQclear(res);
    }
}

/* Fetch Connection record and display it on screen */
void FetchConnectionRec(PGconn *conn)
{
    // Will hold the number of field in connections table
    int nFields;

    // Start a transaction block
    PGresult *res = PQexec(conn, "BEGIN");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "BEGIN command failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout  << "BEGIN command - OK\n";
        // Clear result
        PQclear(res);
    }

    // Fetch rows from connections table
    res = PQexec(conn, "DECLARE emprec CURSOR FOR select * from connections");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr <<"DECLARE CURSOR failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "DECLARE CURSOR - OK\n";
        // Clear result
        PQclear(res);

    }

    res = PQexec(conn, "FETCH ALL in emprec");

    if (PQresultStatus(res) != PGRES_TUPLES_OK)
    {
        cerr << "FETCH ALL failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "FETCH ALL - OK\n";
        // Get the field name
        nFields = PQnfields(res);

        // Prepare the header with connections table field name
        printf("\nFetch connection records:");
        printf("\n*************************************************************************************\n");
        for (int i = 0; i < nFields; i++)
            printf("%-20s", PQfname(res, i));
        printf("\n*************************************************************************************\n");

        // Next, print out the connection record for each row
        for (int i = 0; i < PQntuples(res); i++)
        {
            for (int j = 0; j < nFields; j++)
                printf("%-20s", PQgetvalue(res, i, j));
            printf("\n");
        }

        PQclear(res);

        // Close the emprec
        res = PQexec(conn, "CLOSE emprec");
        PQclear(res);

        // End the transaction
        res = PQexec(conn, "END");

        // Clear result
        PQclear(res);
    }

}

/* Erase all record in connections table */
void RemoveAllConnectionRec(PGconn *conn)
{
    // Execute with sql statement
    PGresult *res = PQexec(conn, "DELETE FROM connections");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr <<"Delete connection records failed.\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Delete connection records - OK\n";

        // Clear result
        PQclear(res);
    }

}

/* ************************************************ Vehicles QueryHandler ************************************************ */

/* Append SQL statement and insert record into vehicles table */
void InsertVehicleRec(PGconn *conn, std::string vehicle_id, std::string type)
{
    // Append the SQL statment
    std::string sSQL;
    sSQL.append("INSERT INTO vehicles VALUES ('");
    sSQL.append(vehicle_id);
    sSQL.append("', '");
    sSQL.append(type);
    sSQL.append("')");

    // Execute with sql statement
    PGresult *res = PQexec(conn, sSQL.c_str());

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        throw myexception();
        cerr <<"Insert vehicles record failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Insert vehicles record - OK\n";
        // Clear result
        PQclear(res);
    }

}

/* Fetch vehicle record and display it on screen */
void FetchVehicleRec(PGconn *conn)
{
    // Will hold the number of field in vehicle table
    int nFields;

    // Start a transaction block
    PGresult *res = PQexec(conn, "BEGIN");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "BEGIN command failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "BEGIN command - OK\n";
        // Clear result
        PQclear(res);
    }


    // Fetch rows from vehicle table
    res = PQexec(conn, "DECLARE emprec CURSOR FOR select * from vehicles");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "DECLARE CURSOR failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "DECLARE CURSOR failed\n";
        // Clear result
        PQclear(res);
    }

    res = PQexec(conn, "FETCH ALL in emprec");
    if (PQresultStatus(res) != PGRES_TUPLES_OK)
    {
        cerr << "FETCH ALL failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "FETCH ALL - OK\n";
        // Get the field name
        nFields = PQnfields(res);

        // Prepare the header with vehicle table field name
        printf("\nFetch vehicle records:");
        printf("\n*************************************************************************************\n");
        for (int i = 0; i < nFields; i++)
            printf("%-20s", PQfname(res, i));
        printf("\n*************************************************************************************\n");

        // Next, print out the vehicle record for each row
        for (int i = 0; i < PQntuples(res); i++)
        {
            for (int j = 0; j < nFields; j++)
                printf("%-20s", PQgetvalue(res, i, j));
            printf("\n");
        }

        PQclear(res);

        // Close the emprec
        res = PQexec(conn, "CLOSE emprec");
        PQclear(res);

        // End the transaction
        res = PQexec(conn, "END");

        // Clear result
        PQclear(res);
    }

}

/* Erase all record in vehicle table */
void RemoveAllVehicleRec(PGconn *conn)
{
    // Execute with sql statement
    PGresult *res = PQexec(conn, "DELETE FROM vehicles");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "Delete vehicle records failed.\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Delete vehicle records - OK\n";
        // Clear result
        PQclear(res);
    }

}



/* ************************************************ Devices QueryHandler ************************************************ */

/* Append SQL statement and insert record into devices table */
void InsertDeviceRec(PGconn *conn, std::string device_id, std::string type)
{
    // Append the SQL statment
    std::string sSQL;
    sSQL.append("INSERT INTO devices VALUES ('");
    sSQL.append(device_id);
    sSQL.append("', '");
    sSQL.append(type);
    sSQL.append("')");

    // Execute with sql statement
    PGresult *res = PQexec(conn, sSQL.c_str());

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        throw myexception();
        cerr << "Insert device record failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Insert device record - OK\n";
        // Clear result
        PQclear(res);
    }
}

/* Fetch device record and display it on screen */
void FetchDeviceRec(PGconn *conn)
{
    // Will hold the number of field in device table
    int nFields;

    // Start a transaction block
    PGresult *res = PQexec(conn, "BEGIN");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr <<"BEGIN command failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {

        cout <<"BEGIN command - OK\n";
        // Clear result
        PQclear(res);
    }


    // Fetch rows from devices table
    res = PQexec(conn, "DECLARE emprec CURSOR FOR select * from devices");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "DECLARE CURSOR failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "DECLARE CURSOR - OK\n";
        // Clear result
        PQclear(res);
    }

    res = PQexec(conn, "FETCH ALL in emprec");

    if (PQresultStatus(res) != PGRES_TUPLES_OK)
    {
        cerr << "FETCH ALL failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "FETCH ALL - OK\n";
        // Get the field name
        nFields = PQnfields(res);

        // Prepare the header with vehicle table field name
        printf("\nFetch device records:");
        printf("\n*************************************************************************************\n");
        for (int i = 0; i < nFields; i++)
            printf("%-20s", PQfname(res, i));
        printf("\n*************************************************************************************\n");

        // Next, print out the device record for each row
        for (int i = 0; i < PQntuples(res); i++)
        {
            for (int j = 0; j < nFields; j++)
                printf("%-20s", PQgetvalue(res, i, j));
            printf("\n");
        }

        PQclear(res);

        // Close the emprec
        res = PQexec(conn, "CLOSE emprec");
        PQclear(res);

        // End the transaction
        res = PQexec(conn, "END");

        // Clear result
        PQclear(res);
    }
}

/* Erase all record in devices table */
void RemoveAllDeviceRec(PGconn *conn)
{
    // Execute with sql statement
    PGresult *res = PQexec(conn, "DELETE FROM devices");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "Delete device records failed.\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Delete device records - OK.\n";
        // Clear result
        PQclear(res);
    }
}



/* ************************************************ Events QueryHandler ************************************************ */

/* Append SQL statement and insert record into events table */
void InsertEventRec(PGconn *conn, std::string date_time, std::string unit_id, std::string vehicle_id, std::string port, std::string value)
{
    // Append the SQL statment
    std::string sSQL;
    sSQL.append("INSERT INTO events VALUES ('");
    sSQL.append(date_time);
    sSQL.append("', '");
    sSQL.append(unit_id);
    sSQL.append("', '");
    sSQL.append(vehicle_id);
    sSQL.append("', '");
    sSQL.append(port);
    sSQL.append("', '");
    sSQL.append(value);
    sSQL.append("')");

    // Execute with sql statement
    PGresult *res = PQexec(conn, sSQL.c_str());

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        throw myexception();
        cerr << "Insert event record failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {

        cout << "Insert event record - OK\n";

        // Clear result
        PQclear(res);
    }
}

/* Fetch event record and display it on screen */
void FetchEventRec(PGconn *conn)
{
    // Will hold the number of field in monitor table
    int nFields;

    // Start a transaction block
    PGresult *res = PQexec(conn, "BEGIN");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "BEGIN command failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "BEGIN command - OK\n";
        // Clear result
        PQclear(res);
    }

    // Fetch rows from events table
    res = PQexec(conn, "DECLARE emprec CURSOR FOR select * from events");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr <<"DECLARE CURSOR failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "DECLARE CURSOR - OK\n";
        // Clear result
        PQclear(res);
    }


    res = PQexec(conn, "FETCH ALL in emprec");

    if (PQresultStatus(res) != PGRES_TUPLES_OK)
    {
        cerr << "FETCH ALL failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "FETCH ALL - OK\n";

        // Get the field name
        nFields = PQnfields(res);

        // Prepare the header with events table field name
        printf("\nFetch event records:");
        printf("\n*************************************************************************************\n");
        for (int i = 0; i < nFields; i++)
            printf("%-20s", PQfname(res, i));
        printf("\n*************************************************************************************\n");

        // Next, print out the event record for each row
        for (int i = 0; i < PQntuples(res); i++)
        {
            for (int j = 0; j < nFields; j++)
                printf("%-20s", PQgetvalue(res, i, j));
            printf("\n");
        }

        PQclear(res);

        // Close the emprec
        res = PQexec(conn, "CLOSE emprec");
        PQclear(res);

        // End the transaction
        res = PQexec(conn, "END");

        // Clear result
        PQclear(res);
    }
}

/* Erase all record in events table */
void RemoveAllEventRec(PGconn *conn)
{
    // Execute with sql statement
    PGresult *res = PQexec(conn, "DELETE FROM events");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "Delete event records failed.\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Delete event records - OK\n";
        // Clear result
        PQclear(res);
    }
}

/* ************************************************ Monitor QueryHandler ************************************************ */

/* Append SQL statement and insert record into monitoring table */
void InsertMonitorRec(PGconn *conn, std::string unit_id, std::string begin_time, std::string end_time, std::string device_id, std::string vehicle_id, std::string min, std::string max, std::string sum)
{
    // Append the SQL statment
    std::string sSQL;
    sSQL.append("INSERT INTO monitorings (unit_id, begin_time, end_time, device_id, vehicle_id, min, max, sum) VALUES ('");
    sSQL.append(unit_id);
    sSQL.append("', '");
    sSQL.append(begin_time);
    sSQL.append("', '");
    sSQL.append(end_time);
    sSQL.append("', '");
    sSQL.append(device_id);
    sSQL.append("', '");
    sSQL.append(vehicle_id);
    sSQL.append("', '");
    sSQL.append(min);
    sSQL.append("', '");
    sSQL.append(max);
    sSQL.append("', '");
    sSQL.append(sum);
    sSQL.append("')");

    // Execute with sql statement
    PGresult *res = PQexec(conn, sSQL.c_str());

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        throw myexception();
        cerr << "Insert monitor record failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Insert monitor record - OK\n";
        // Clear result
        PQclear(res);
    }
}

/* Fetch monitor record and display it on screen */
void FetchMonitorRec(PGconn *conn)
{
    // Will hold the number of field in monitor table
    int nFields;

    // Start a transaction block
    PGresult *res = PQexec(conn, "BEGIN");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr<< "BEGIN command failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "BEGIN command - OK\n";

        // Clear result
        PQclear(res);

    }
    // Fetch rows from monitoring table
    res = PQexec(conn, "DECLARE emprec CURSOR FOR select * from monitoring");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "DECLARE CURSOR failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "DECLARE CURSOR failed\n";
        // Clear result
        PQclear(res);
    }

    res = PQexec(conn, "FETCH ALL in emprec");

    if (PQresultStatus(res) != PGRES_TUPLES_OK)
    {
        cerr << "FETCH ALL failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cerr << "FETCH ALL - OK\n";

        // Get the field name
        nFields = PQnfields(res);

        // Prepare the header with monitor table field name
        printf("\nFetch monitor records:");
        printf("\n*************************************************************************************\n");
        for (int i = 0; i < nFields; i++)
            printf("%-20s", PQfname(res, i));
        printf("\n*************************************************************************************\n");

        // Next, print out the monitor record for each row
        for (int i = 0; i < PQntuples(res); i++)
        {
            for (int j = 0; j < nFields; j++)
                printf("%-20s", PQgetvalue(res, i, j));
            printf("\n");
        }

        PQclear(res);

        // Close the emprec
        res = PQexec(conn, "CLOSE emprec");
        PQclear(res);

        // End the transaction
        res = PQexec(conn, "END");

        // Clear result
        PQclear(res);
    }
}

/* Erase all record in monitoring table */
void RemoveAllMonitorRec(PGconn *conn)
{
    // Execute with sql statement
    PGresult *res = PQexec(conn, "DELETE FROM monitoring");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "Delete monitor records failed.\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Delete monitor records - OK\n";
        // Clear result
        PQclear(res);
    }

}



/* ************************************************ Positions QueryHandler ************************************************ */

/* Append SQL statement and insert record into positions table */
void InsertPositionRec(PGconn *conn, std::string date_time, std::string unit_id, std::string vehicle_id, std::string rdx, std::string rdy, std::string speed, std::string course, std::string um_satellites, std::string hdop, std::string quality)
{
    // Append the SQL statment
    std::string sSQL;
    sSQL.append("INSERT INTO positions VALUES ('");
    sSQL.append(date_time);
    sSQL.append("', '");
    sSQL.append(unit_id);
    sSQL.append("', '");
    sSQL.append(vehicle_id);
    sSQL.append("', '");
    sSQL.append(rdx);
    sSQL.append("', '");
    sSQL.append(rdy);
    sSQL.append("', '");
    sSQL.append(speed);
    sSQL.append("', '");
    sSQL.append(course);
    sSQL.append("', '");
    sSQL.append(um_satellites);
    sSQL.append("', '");
    sSQL.append(hdop);
    sSQL.append("', '");
    sSQL.append(quality);
    sSQL.append("')");

    // Execute with sql statement
    PGresult *res = PQexec(conn, sSQL.c_str());

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        throw myexception();
        cerr << "Insert position record failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Insert position record - OK\n";
        // Clear result
        PQclear(res);
    }
}

/* Fetch position record and display it on screen */
void FetchPositionRec(PGconn *conn)
{
    // Will hold the number of field in positions table
    int nFields;

    // Start a transaction block
    PGresult *res = PQexec(conn, "BEGIN");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "BEGIN command failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "BEGIN command - OK\n";
        // Clear result
        PQclear(res);

    }

    // Fetch rows from positionss table
    res = PQexec(conn, "DECLARE emprec CURSOR FOR select * from positions");
    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "DECLARE CURSOR failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "DECLARE CURSOR - OK\n";
        // Clear result
        PQclear(res);
    }


    res = PQexec(conn, "FETCH ALL in emprec");

    if (PQresultStatus(res) != PGRES_TUPLES_OK)
    {
        cerr << "FETCH ALL failed\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "FETCH ALL - OK\n";

        // Get the field name
        nFields = PQnfields(res);

        // Prepare the header with positions table field name
        printf("\nFetch position records:");
        printf("\n*************************************************************************************\n");
        for (int i = 0; i < nFields; i++)
            printf("%-20s", PQfname(res, i));
        printf("\n*************************************************************************************\n");

        // Next, print out the position record for each row
        for (int i = 0; i < PQntuples(res); i++)
        {
            for (int j = 0; j < nFields; j++)
                printf("%-20s", PQgetvalue(res, i, j));
            printf("\n");
        }

        PQclear(res);

        // Close the emprec
        res = PQexec(conn, "CLOSE emprec");
        PQclear(res);

        // End the transaction
        res = PQexec(conn, "END");

        // Clear result
        PQclear(res);
    }
}

/* Erase all records in positions table */
void RemoveAllPositionRec(PGconn *conn)
{
    // Execute with sql statement
    PGresult *res = PQexec(conn, "DELETE FROM positions");

    if (PQresultStatus(res) != PGRES_COMMAND_OK)
    {
        cerr << "Delete position records failed.\n";
        PQclear(res);
        CloseConn(conn);
    } else {
        cout << "Delete position records - OK\n";
        // Clear result
        PQclear(res);
    }
}

PGconn *conn = NULL;

void CreateConnection() {
    conn = ConnectDB();
}

void CloseConnection() {
    CloseConn(conn);
}

void savePositions(Positions p1) {
    try {
        InsertVehicleRec(conn, p1.UnitId, "Police");
    }
    catch (const std::exception&) {
        std::cerr << "\nInsert VehicleRec Failed " << std::endl;
    }
    try {
        InsertPositionRec(conn, p1.DateTime, p1.UnitId, p1.UnitId, p1.Rdx, p1.Rdy, p1.Speed, p1.Course, p1.NumSatellites, p1.HDOP, p1.Quality);
    }
    catch (const std::exception&) {
        std::cerr << "\nInsert PositionRec Failed " << std::endl;
    }
}

void saveMonitoring(Monitoring m1) {
    try {
        InsertVehicleRec(conn, m1.UnitId, "Police");
    }
    catch (const std::exception&) {
        std::cerr << "\nInsert VehicleRec Failed " << std::endl;
    }
    try {
        InsertDeviceRec(conn, m1.UnitId, m1.Type);
    }
    catch (const std::exception&) {
        std::cerr << "\nInsert DeviceRec Failed " << std::endl;
    }
    try {
        InsertMonitorRec(conn, m1.UnitId, m1.BeginTime, m1.EndTime, m1.UnitId, m1.UnitId, m1.Min, m1.Max, m1.Sum);
    }
    catch (const std::exception&) {
        std::cerr << "\nInsert MonitorRec Failed " << std::endl;
    }
}

void saveEvents(Events e1) {
    try
    {
        InsertVehicleRec(conn, e1.UnitId, "Police");
    }
    catch (const std::exception&) {
        std::cerr << "\nInsert VehicleRec Failed " << std::endl;
    }
    try
    {
        InsertEventRec(conn, e1.DateTime, e1.UnitId, e1.UnitId, e1.Port, e1.Value);
    }
    catch (const std::exception&) {
        std::cerr << "\nInsert EventsRec Failed ";
    }
}

void saveConnections(Connections c1) {
    try
    {
        InsertVehicleRec(conn, c1.UnitId, "police");

    }
    catch (const std::exception&)
    {
        std::cerr << "\nInsert VehicleRec Failed "<< std::endl;
    }
    try
    {
        InsertConnectionRec(conn, c1.DateTime, c1.UnitId, c1.UnitId, c1.Port, c1.Value);
    }
    catch (const std::exception&)
    {
        std::cerr << "\nInsert ConnectionRec Failed\nUnit_id: " + c1.UnitId << std::endl;
    }
}

void removeAll() {
    RemoveAllConnectionRec(conn);
    RemoveAllEventRec(conn);
    RemoveAllPositionRec(conn);
    RemoveAllMonitorRec(conn);
    RemoveAllDeviceRec(conn);
    RemoveAllVehicleRec(conn);
}

// vim:set et sw=4 ts=4: ft=cpp
