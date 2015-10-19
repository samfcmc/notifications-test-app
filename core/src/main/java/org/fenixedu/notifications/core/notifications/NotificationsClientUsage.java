package org.fenixedu.notifications.core.notifications;

import org.fenixedu.bennu.notifications.client.NotificationsClient;
import org.fenixedu.bennu.notifications.client.NotificationsClientFactory;

public class NotificationsClientUsage {

    private static NotificationsClient client;

    private NotificationsClientUsage() {
    }

    public static NotificationsClient getClient() {
        if (client == null) {
            client = NotificationsClientFactory.getClientFromPropertiesFile();
        }
        return client;
    }

}
