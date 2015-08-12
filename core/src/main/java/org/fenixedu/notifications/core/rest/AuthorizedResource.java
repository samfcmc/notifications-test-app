package org.fenixedu.notifications.core.rest;


public abstract class AuthorizedResource extends AbstractResource {

    protected abstract boolean accessAllowed();

}
