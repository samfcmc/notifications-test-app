notifications-test-app
======================

Web app to test the [notifications](https://github.com/samfcmc/bennu-notifications) service.
It simulates a messaging app.
When a message is sent from user A to B, B receives a notification.

## Requirements
-	Java 8
-	Maven
- Grunt CLI
-	[notifications-client-java](https://github.com/samfcmc/notifications-client-java)

## Compile
* Clone [notifications-client-java](https://github.com/samfcmc/notifications-client-java) repo and install it:
```shell
cd notifications-client-java && mvn install
```

* Compile this web app
```shell
cd notifications-test-app && mvn install
```

## Run
This project has the REST API and UI in separated modules.
To launch the REST API:
```shell
cd webapp && mvn tomcat7:run
```

To run the UI using grunt:
```shell
cd ui && grunt
```
