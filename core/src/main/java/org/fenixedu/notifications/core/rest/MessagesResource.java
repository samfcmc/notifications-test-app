package org.fenixedu.notifications.core.rest;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.bennu.notifications.client.NotificationsClient;
import org.fenixedu.bennu.notifications.client.NotificationsClientFactory;
import org.fenixedu.notifications.core.domain.Message;
import org.fenixedu.notifications.core.json.MessageJsonCreator;
import org.fenixedu.notifications.core.json.MessageJsonViewer;

import com.google.gson.JsonObject;

@Path("/messages")
public class MessagesResource extends AuthenticatedResource {

    NotificationsClient notificationsClient = NotificationsClientFactory.getClient();

    @GET
    public Response getUserMessages() {
        checkAccess();
        User user = getUser();
        return ok(view(user.getMessageSet(), MessageJsonViewer.class));
    }

    @POST
    public Response createMessage(JsonObject payload) {
        checkAccess();
        Message message = create(payload, Message.class, MessageJsonCreator.class);
        return ok(view(message, MessageJsonViewer.class));
    }
}
