package org.fenixedu.notifications.core.service;

import java.util.Locale;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.bennu.notifications.client.Notification;
import org.fenixedu.bennu.notifications.client.NotificationsClient;
import org.fenixedu.bennu.notifications.client.NotificationsClientFactory;
import org.fenixedu.notifications.core.domain.Message;

public class MessageService {

    private static NotificationsClient notificationsClient = NotificationsClientFactory.getClientFromPropertiesFile();

    public static Message create(String to, String text) {
        User user = User.findByUsername(to);
        Notification.Builder builder = new Notification.Builder();
        Notification payload =
                builder.description(Locale.ENGLISH.getDisplayLanguage(), "new message").type("MESSAGE").usernames(to).build();
        notificationsClient.postNotification(payload);
        return new Message(text, user);
    }
}
