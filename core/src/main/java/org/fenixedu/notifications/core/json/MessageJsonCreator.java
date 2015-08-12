package org.fenixedu.notifications.core.json;

import org.fenixedu.bennu.core.json.JsonBuilder;
import org.fenixedu.bennu.core.json.JsonCreator;
import org.fenixedu.notifications.core.domain.Message;
import org.fenixedu.notifications.core.service.MessageService;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

public class MessageJsonCreator implements JsonCreator<Message> {

    @Override
    public Message create(JsonElement json, JsonBuilder ctx) {
        JsonObject jsonObject = json.getAsJsonObject();
        String to = jsonObject.get("to").getAsString();
        String text = jsonObject.get("text").getAsString();

        return MessageService.create(to, text);
    }

}
