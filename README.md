# Library Management System - ASPNET Core 7 / Angular 16 project template
A lightweight library management system built in .NET 5.0 with Entity Framework Core.
Enables library administrators to manage Library Books with basic functionality.

## This application consists of:
   - Template pages with Angular 16 and TypeScript
   - RESTful API Backend using ASP.NET Core 7 Web API
   - Database using Entity Framework Core
   - Authentication/Authorization based Jwt Token
   - API Documentation using Swagger
   - Angular CLI for managing client-side libraries

## Installation Notes
   -When creating a new project please wait for all dependencies to be restored; "dotnet restore" 
    for asp.net project & "npm install" for angular project. When using VisualStudio this is 
    automatic, check the output window or status bar to know that the package/dependencies restore 
    process is complete before launching your program for the first time.
    If you get any errors, consider running manually the steps to build the project
    and note where the errors occur. Open command prompt and do the below steps:
    -run 'dotnet restore' from the two project folders - Restore nuget packages
    -run 'npm install' from the project with package.json - Restore npm packages
   Try running the application again - Test to make sure it all works
