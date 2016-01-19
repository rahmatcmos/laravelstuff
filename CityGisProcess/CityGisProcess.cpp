// CityGisProces.cpp : Defines the entry point for the console application.

#include <string>
#include <iostream>
// #include <pqxx/pqxx>
#include <libpq-fe.h>
#include <ParseCSV.h>
#include <Database.h>
#include <FileWatcher.h>
using namespace std;

#define MAX_NUM_THREADS 20

// Processes a file action
class UpdateListener : public FW::FileWatchListener
{
    public:
        UpdateListener() {}
        void handleFileAction(FW::WatchID watchid, const FW::String& dir, const FW::String& filename,
                FW::Action action)
        {
            std::string file = "uploads/" + filename;
            getDataCSV(file);
            std::cout << "DIR (" << dir + ") FILE (" + filename + ") has event " << action << std::endl;
        }
};

int main()
{
    try
    {
        // Log material
        // freopen( "output.txt", "w", stdout );
        // freopen( "error.txt", "w", stderr );
        // create the file watcher object
        FW::FileWatcher fileWatcher;

        // add a watch to the system
        FW::WatchID watchID = fileWatcher.addWatch("./uploads", new UpdateListener(), true);

        // std::cout << "Press ^C to exit" << std::endl;

        // loop until a key is pressed
        while(1)
        {
            fileWatcher.update();
            sleep (1);
        }
    }
    catch( std::exception& e ) 
    {
        fprintf(stderr, "An exception has occurred: %s\n", e.what());
    }

    return 0;
}

// vim:set et sw=4 ts=4: ft=cpp
