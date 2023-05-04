/*
 * Copyright (C) 2019 SailPoint Technologies, Inc., All Rights Reserved.
 */

package sailpoint.rule;

import java.util.Map;

/**
 * Definition of an Account interface available to Rule implementors.
 */
public interface Account {

    /**
     * Gets the native identity of the account.
     *
     * @return The native identity.
     */
    String getNativeIdentity();

    /**
     * Gets the UUID of the account.
     *
     * @return The UUID or null if does not exist.
     */
    String getUuid();

    /**
     * Gets the id of the source the account is on.
     *
     * @return The source id.
     */
    String getSourceId();

    /**
     * Gets the id of the identity that owns the source.
     *
     * @return The identity id.
     */
    String getIdentityId();

    /**
     * Gets the raw attributes of the account.
     *
     * @return The attributes.
     */
    Map<String, Object> getAttributes();

    /**
     * Determines whether or not the account is authoritative.
     *
     * @return True if authoritative, false otherwise.
     */
    boolean isAuthoritative();

    /**
     * Gets the description of the account.
     *
     * @return The description.
     */
    String getDescription();

    /**
     * Determines whether or not the account is disabled.
     *
     * @return True if the account is disabled, false otherwise.
     */
    boolean isDisabled();

    /**
     * Determines whether or not the account is locked.
     *
     * @return True if the account is locked, false otherwise.
     */
    boolean isLocked();

    /**
     * Determines whether or not the account is a system account. An account is a system account
     * when it is on the IdentityNow application.
     *
     * @return True if the account is a system account, false otherwise.
     */
    boolean isSystemAccount();

    /**
     * Determines whether or not the account is uncorrelated.
     *
     * @return True if the account is uncorrelated, false otherwise.
     */
    boolean isUncorrelated();

    /**
     * Determines whether or not the account was manually correlated.
     *
     * @return True if the account was manually correlated, false otherwise.
     */
    boolean isManuallyCorrelated();

    /**
     * Determines whether or not the account has entitlements.
     *
     * @return True if the account has entitlements, false otherwise.
     */
    boolean hasEntitlements();

}