#ifndef Monitoring_H
#define Monitoring_H
#include <string>

class Monitoring {
    public:
        std::string UnitId;
        std::string DateTime;
        std::string BeginTime;
        std::string EndTime;
        std::string Type;
        std::string Min;
        std::string Max;
        std::string Sum;
};
#endif

// vim:set et sw=4 ts=4: ft=cpp
