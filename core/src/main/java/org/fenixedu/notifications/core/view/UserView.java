package org.fenixedu.notifications.core.view;

import org.fenixedu.bennu.core.domain.User;

public class UserView {
    User user;
    String notificationsUrl;

    public UserView(User user, String notificationsUrl) {
        this.user = user;
        this.notificationsUrl = notificationsUrl;
    }

    public User getUser() {
        return user;
    }

    public String getNotificationsUrl() {
        return notificationsUrl;
    }
}
