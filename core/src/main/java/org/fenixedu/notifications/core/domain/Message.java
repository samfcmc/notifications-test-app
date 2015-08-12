package org.fenixedu.notifications.core.domain;

import org.fenixedu.bennu.core.domain.User;

public class Message extends Message_Base {

    public Message(String text, User user) {
        super();
        setText(text);
        setUser(user);
    }

}
