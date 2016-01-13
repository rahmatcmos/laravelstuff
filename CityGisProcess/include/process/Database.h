#ifndef Database_H
#define Database_H
#include <string>
// #include <pqxx/pqxx>
#include <libpq-fe.h>
#include <Positions.h>
#include <Connections.h>
#include <Events.h>
#include <Monitoring.h>

void savePositions(Positions p1);
void saveMonitoring(Monitoring m1);
void saveEvents(Events e1);
void saveConnections(Connections c1);
void removeAll();
void CloseConnection();
void CreateConnection();
PGconn *ConnectDB();
void CloseConn(PGconn *conn);
void InsertEventRec(PGconn *conn, std::string date_time, std::string unit_id, std::string vehicle_id, std::string port, std::string value);
void InsertMonitorRec(PGconn *conn, std::string unit_id, std::string begin_time, std::string device_id, std::string vehicle_id, std::string min, std::string max, std::string sum);
void InsertPositionRec(PGconn *conn, std::string date_time, std::string unit_id, std::string vehicle_id, std::string rdx, std::string rdy, std::string speed, std::string course, std::string um_satellites, std::string hdop, std::string quality);
void InsertVehicleRec(PGconn *conn, std::string vehicle_id, std::string type);
void InsertConnectionRec(PGconn *conn, std::string date_time, std::string unit_id, std::string vehicle_id, std::string port, std::string value);


#endif
