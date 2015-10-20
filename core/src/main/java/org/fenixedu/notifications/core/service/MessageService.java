package org.fenixedu.notifications.core.service;

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
        Message message = new Message(fromUser, toUser, text);
        Notification notification = createNewMessageNotification(to, message);
        notificationsClient.postNotification(notification);
        return message;
    }

    private static Notification createNewMessageNotification(String to, Message message) {
        Notification.Builder builder = new Notification.Builder();
        String link = "/api/messages/" + message.getExternalId();
        Notification payload = builder.description("EN", "new message").type("MESSAGE").usernames(to).link(link).build();
        return payload;
    }
}
