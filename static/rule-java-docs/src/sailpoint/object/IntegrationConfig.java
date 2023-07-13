package sailpoint.object;

/**
 * The target integration application object that references this before/after rule.
 */
public class IntegrationConfig {
    public static final String EXEC_STYLE_REQUEST = "request";
    public static final String EXEC_STYLE_SYNCHRONOUS = "synchronous";
    public static final String ATT_HOST = "host";
    public static final String ATT_URL = "url";
    public static final String ATT_USERNAME = "username";
    public static final String ATT_NAME = "name";
    public static final String ATT_PASSWORD = "password";
    public static final String ATT_PASSWORD_CONFIRM = "passwordConfirm";
    public static final String ATT_ROLE_SYNC_HISTORY = "roleSyncHistory";
    public static final String ROLE_SYNC_STYLE_NONE = "none";
    public static final String ROLE_SYNC_STYLE_DETECTABLE = "detectable";
    public static final String ROLE_SYNC_STYLE_ASSIGNABLE = "assignable";
    public static final String ROLE_SYNC_STYLE_DUAL = "dual";
    public static final String ATT_UNIVERSAL_MANAGER = "universalManager";
    public static final String ATT_OPERATIONS = "operations";
    public static final String OP_SET_PASSWORD = "SetPassword";
    public static final String ATT_NO_PROVISIONING_REQUESTS = "noProvisioningRequests";
    public static final String ATT_PROVISIONING_REQUEST_EXPIRATION = "provisioningRequestExpiration";
    public static final String ATT_NO_PERMISSIONS = "noPermissions";
    public static final String ATT_NO_GROUP_PERMISSIONS = "noGroupPermissions";
    public static final String ATT_GROUP_PROVISIONING = "groupProvisioning";
    public static final String ATT_SCHEMA_PROVISIONING_MAP = "schemaProvisioningMap";
    public static final String ATT_STATUS_SUCCESS_IS_COMMITTED = "statusSuccessIsCommitted";

    public Object getAttribute(String name) {
        return new Object();
    }

    public String getName() {
        return "name";
    }

}
