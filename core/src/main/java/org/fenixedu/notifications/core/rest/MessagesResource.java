package org.fenixedu.notifications.core.rest;

import java.util.List;
import java.util.stream.Collectors;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.notifications.core.domain.Message;
import org.fenixedu.notifications.core.json.MessageJsonCreator;
import org.fenixedu.notifications.core.json.MessageJsonViewer;
import org.fenixedu.notifications.core.json.UserViewJsonViewer;
import org.fenixedu.notifications.core.notifications.NotificationsClientUsage;
import org.fenixedu.notifications.core.view.UserView;

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

    @GET
    @Path("/{id}")
    public Response getMessage(@PathParam("id") String id) {
        checkAccess();
        return ok(view(readDomainObject(id), MessageJsonViewer.class));
    }

    @POST
    public Response createMessage(JsonObject payload) {
        checkAccess();
        Message message = create(payload, Message.class, MessageJsonCreator.class);
        return ok(view(message, MessageJsonViewer.class));
    }

    @GET
    @Path("/user")
    public Response getUserData() {
        checkAccess();
        UserView userView = new UserView(getUser(), NotificationsClientUsage.getClient().getConfig().getUrl());
        return ok(view(userView, UserViewJsonViewer.class));
    }
}
