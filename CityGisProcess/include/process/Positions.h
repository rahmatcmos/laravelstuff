#ifndef Positions_H
#define Positions_H
#include <string>

class Positions {
    public:
        std::string DateTime;
        std::string UnitId;
        std::string Rdx;
        std::string Rdy;
        std::string Speed;
        std::string Course;
        std::string NumSatellites;
        std::string HDOP;
        std::string Quality;
};
#endif

// vim:set et sw=4 ts=4: ft=cpp
