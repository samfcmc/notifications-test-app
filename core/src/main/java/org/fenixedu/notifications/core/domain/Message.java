package org.fenixedu.notifications.core.domain;

import java.util.Comparator;

import org.fenixedu.bennu.core.domain.User;
import org.joda.time.DateTime;

public class Message extends Message_Base {

    public Message(User from, User to, String text) {
        this(from, to, text, DateTime.now());
    }

    public Message(User from, User to, String text, DateTime timestamp) {
        super();
        setText(text);
        setFrom(from);
        setTo(to);
        setTimestamp(timestamp);
    }

    public static class MessageTimestampComparator implements Comparator<Message> {

        @Override
        public int compare(Message left, Message right) {
            if (right.getTimestamp().isAfter(left.getTimestamp())) {
                return 1;
            } else if (right.getTimestamp().isBefore(left.getTimestamp())) {
                return -1;
            } else {
                return 0;
            }
        }

    }

}
