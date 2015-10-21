package org.fenixedu.notifications.core.json;

import org.fenixedu.bennu.core.json.JsonBuilder;
import org.fenixedu.bennu.core.json.JsonViewer;
import org.fenixedu.notifications.core.view.UserView;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;

public class UserViewJsonViewer implements JsonViewer<UserView> {

    @Override
    public JsonElement view(UserView obj, JsonBuilder ctx) {
        JsonObject jsonObject = new JsonObject();
        jsonObject.add("user", ctx.view(obj.getUser()));
        jsonObject.addProperty("notifications", obj.getNotificationsUrl());

        return jsonObject;
    }

}
