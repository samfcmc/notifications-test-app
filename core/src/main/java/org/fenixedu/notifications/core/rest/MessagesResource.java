package org.fenixedu.notifications.core.rest;

import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.notifications.core.domain.Message;
import org.fenixedu.notifications.core.json.MessageJsonCreator;
import org.fenixedu.notifications.core.json.MessageJsonViewer;

import com.google.gson.JsonObject;

@Path("/messages")
public class MessagesResource extends AuthenticatedResource {

    private List<Message> getLastNMessages(User user, int limit) {
        return user.getMessageReceivedSet().stream().sorted(new Message.MessageTimestampComparator()).limit(limit)
                .collect(Collectors.toList());
    }

    @GET
    public Response getUserMessages() {
        checkAccess();
        User user = getUser();
        return ok(view(getLastNMessages(user, 25), MessageJsonViewer.class));
    }

    @POST
    public Response createMessage(JsonObject payload) {
        checkAccess();
        Message message = create(payload, Message.class, MessageJsonCreator.class);
        return ok(view(message, MessageJsonViewer.class));
    }
}
