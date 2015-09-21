package org.fenixedu.notifications.core.notifications;

import org.fenixedu.bennu.notifications.client.NotificationsClient;
import org.fenixedu.bennu.notifications.client.NotificationsClientFactory;
import org.fenixedu.notifications.client.ff.backend.NotificationsClientFFBackend;

public class NotificationsService {

    private static NotificationsClient notificationsClient = NotificationsClientFactory
            .getClientFromPropertiesFile(new NotificationsClientFFBackend());

}
