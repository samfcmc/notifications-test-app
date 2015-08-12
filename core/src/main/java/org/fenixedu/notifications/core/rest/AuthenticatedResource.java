package org.fenixedu.notifications.core.rest;

import org.fenixedu.bennu.core.domain.exceptions.AuthorizationException;
import org.fenixedu.bennu.core.json.JsonCreator;

import com.google.gson.JsonElement;

public class AuthenticatedResource extends AuthorizedResource {

    @Override
    protected boolean accessAllowed() {
        return getUser() != null;
    }

    protected void checkAccess() {
        if (!accessAllowed()) {
            throw AuthorizationException.unauthorized();
        }
    }

    public <T> T create(JsonElement jsonData, Class<T> clazz, Class<? extends JsonCreator<? extends T>> jsonCreatorClass) {
        return create(jsonData.toString(), clazz, jsonCreatorClass);
    }

}
