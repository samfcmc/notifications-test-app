package org.fenixedu.notifications.core.service;

import java.util.Locale;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.bennu.notifications.client.Notification;
import org.fenixedu.bennu.notifications.client.NotificationsClient;
import org.fenixedu.notifications.core.domain.Message;
import org.fenixedu.notifications.core.notifications.NotificationsClientUsage;

public class MessageService {

    private static NotificationsClient notificationsClient = NotificationsClientUsage.getClient();

    public static Message create(String from, String to, String text) {
        User fromUser = User.findByUsername(from);
        User toUser = User.findByUsername(to);
        Notification notification = createNewMessageNotification(to);
        notificationsClient.postNotification(notification);
        return new Message(fromUser, toUser, text);
    }

    private static Notification createNewMessageNotification(String to) {
        Notification.Builder builder = new Notification.Builder();
        Notification payload =
                builder.description(Locale.ENGLISH.getDisplayLanguage(), "new message").type("MESSAGE").usernames(to).build();
        return payload;
    }
}
