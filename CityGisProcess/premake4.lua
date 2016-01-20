-- A solution contains projects, and defines the available configurations
solution "CityGisProcess"
location("build/" .. _ACTION)
targetdir "bin"
configurations { "Debug", "Release" }

-- A project defines one build target
project "CityGisProcess"
kind "ConsoleApp"
language "C++"
files {
    "source/process/*.cpp",
    "source/filewatcher/*.cpp",
    "CityGisProcess.cpp"
}
includedirs {
    "include",
    "include/process",
    "include/filewatcher",
    "/usr/include/postgresql/",
    "/usr/include"
}
objdir "intermediate"

configuration "Debug"
defines { "DEBUG" }
flags { "Symbols" }
objdir "build/intermediate/Debug"
targetname "CityGisProcess_d"

configuration "Release"
defines { "NDEBUG" }
flags { "Optimize" }
objdir "build/intermediate/Release"
