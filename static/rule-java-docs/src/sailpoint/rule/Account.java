/*
 * Copyright (C) 2019 SailPoint Technologies, Inc., All Rights Reserved.
 */

package sailpoint.rule;

import java.util.HashMap;
import java.util.Map;

/**
 * Definition of an Account interface available to Rule implementors.
 */
public class Account {

    /**
     * Gets the native identity of the account.
     *
     * @return The native identity.
     */
    public String getNativeIdentity() {
        return "nativeIdentity";
    }

    /**
     * Gets the UUID of the account.
     *
     * @return The UUID or null if does not exist.
     */
    public String getUuid() {
        return "uuid";
    }

    /**
     * Gets the id of the source the account is on.
     *
     * @return The source id.
     */
    public String getSourceId() {
        return "sourceId";
    }

    /**
     * Gets the id of the identity that owns the source.
     *
     * @return The identity id.
     */
    public String getIdentityId() {
        return "identityId";
    }

    /**
     * Gets the raw attributes of the account.
     *
     * @return The attributes.
     */
    public Map<String, Object> getAttributes() {
        return new HashMap<>();
    }

    /**
     * Determines whether or not the account is authoritative.
     *
     * @return True if authoritative, false otherwise.
     */
    public boolean isAuthoritative() {
        return false;
    }

    /**
     * Gets the description of the account.
     *
     * @return The description.
     */
    public String getDescription() {
        return "description";
    }

    /**
     * Determines whether or not the account is disabled.
     *
     * @return True if the account is disabled, false otherwise.
     */
    public boolean isDisabled() {
        return false;
    }

    /**
     * Determines whether or not the account is locked.
     *
     * @return True if the account is locked, false otherwise.
     */
    public boolean isLocked() {
        return false;
    }

    /**
     * Determines whether or not the account is a system account. An account is a system account
     * when it is on the IdentityNow application.
     *
     * @return True if the account is a system account, false otherwise.
     */
    public boolean isSystemAccount() {
        return false;
    }

    /**
     * Determines whether or not the account is uncorrelated.
     *
     * @return True if the account is uncorrelated, false otherwise.
     */
    public boolean isUncorrelated() {
        return false;
    }

    /**
     * Determines whether or not the account was manually correlated.
     *
     * @return True if the account was manually correlated, false otherwise.
     */
    public boolean isManuallyCorrelated() {
        return false;
    }

    /**
     * Determines whether or not the account has entitlements.
     *
     * @return True if the account has entitlements, false otherwise.
     */
    public boolean hasEntitlements() {
        return false;
    }

}