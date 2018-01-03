# SPFX3
Repository for SPFX lab work 3

Web Part Section

It is under lab-webpart.

Debugging:
1. Installed Debugger for Chrome extension in VS Code.
2. Use breakpoint through F9 or clicking on the margin left to the line number.
3. Run "gulp serve --nobrowser" to build SP solution and start the local webserver while preventing serve task from opening a web browser window as the debugger is the one to start its own broswer instance.
4. Upon running, you can now use VS Code to debug using its available options.

Logging:
1. Using the Log class under @microsoft/sp-core-library.


Extension Section

1. Created projects for the different types of extensions namely: Application Customizers, Field Customizers and Command Sets.
2. These are under the following folders: app-extension, field-extension and command-extension respectively.
3. These are tested only by using an SP Tenant Online. In this case it is under https://magenicmi.sharepoint.com/