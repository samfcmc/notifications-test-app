notifications-test-app
======================

Web app to test the [notifications](https://github.com/samfcmc/bennu-notifications) service.
It simulates a messaging app.
When a message is sent from user A to B, B receives a notification.

## Requirements
-	[Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
-	[Maven](https://maven.apache.org/)
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Grunt](http://gruntjs.com/getting-started)
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
To run this web app you first need to tell it where the notifications service is running.
You can do that by creating a `notifications.properties` file in `webapp/src/main/resources/`.
You can simply create a new copy of `notifications.properties-template`:

```shell
cp webapp/src/main/resources/notifications.properties-template webapp/src/main/resources/notifications.properties
```

Edit this new file according to where your notifications service is running.

NOTE: You will notice that this file has something like:
`appId=` and `appSecret=`. These values are not used yet because the notifications service is still a prototype and there is no security protocol like `oAuth` or something like that.

This project has the REST API and UI in separated modules.
To launch the REST API:
```shell
cd webapp
mvn tomcat7:run
```

Now to run the UI open a new shell in the projects root and do the following:
```shell
cd ui
npm install
grun
```
