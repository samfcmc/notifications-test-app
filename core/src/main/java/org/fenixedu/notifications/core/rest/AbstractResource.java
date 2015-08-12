package org.fenixedu.notifications.core.rest;

import javax.ws.rs.core.Response;

import org.fenixedu.bennu.core.domain.User;
import org.fenixedu.bennu.core.rest.BennuRestResource;
import org.fenixedu.bennu.core.security.Authenticate;

public abstract class AbstractResource extends BennuRestResource {

    protected Response ok(Object object) {
        return Response.ok(object).build();
    }

    protected User getUser() {
        return Authenticate.getUser();
    }
}
