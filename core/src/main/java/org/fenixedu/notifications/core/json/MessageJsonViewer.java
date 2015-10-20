package org.fenixedu.notifications.core.json;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.bennu.core.json.JsonBuilder;
import org.fenixedu.bennu.core.json.JsonViewer;
import org.fenixedu.notifications.core.domain.Message;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

public class MessageJsonViewer implements JsonViewer<Message> {

    @Override
    public JsonElement view(Message obj, JsonBuilder ctx) {
        JsonObject jsonObject = new JsonObject();
        User from = obj.getFrom();
        User to = obj.getTo();
        jsonObject.addProperty("id", obj.getExternalId());
        jsonObject.add("from", ctx.view(from));
        jsonObject.add("to", ctx.view(to));
        jsonObject.addProperty("text", obj.getText());
        jsonObject.addProperty("timestamp", obj.getTimestamp().getMillis());

        return jsonObject;
    }

}
