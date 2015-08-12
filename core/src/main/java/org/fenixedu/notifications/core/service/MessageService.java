package org.fenixedu.notifications.core.service;

import java.util.Locale;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.bennu.notifications.client.NotificationsClient;
import org.fenixedu.bennu.notifications.client.NotificationsClientFactory;
import org.fenixedu.bennu.notifications.client.payload.NotificationPayload;
import org.fenixedu.notifications.core.domain.Message;

public class MessageService {

    private static NotificationsClient notificationsClient = NotificationsClientFactory.getClient();

    public static Message create(String to, String text) {
        User user = User.findByUsername(to);
        NotificationPayload.Builder builder = new NotificationPayload.Builder();
        NotificationPayload payload =
                builder.description(Locale.ENGLISH.getDisplayLanguage(), "new message").type("MESSAGE").build();
        notificationsClient.postNotification(user, payload);
        return new Message(text, user);
    }
}
