package sailpoint.object;

import sailpoint.api.SailPointContext;
import sailpoint.tools.GeneralException;
import sailpoint.tools.Message;
import sailpoint.tools.Util;
import sailpoint.tools.xml.*;
import sailpoint.web.messages.MessageKeys;

import java.io.Serializable;
import java.util.*;

public interface ProvisioningPlan extends PersistentXmlObject, Serializable {
    /**
     * Name of a plan argument holding the name of the identity
     * that is considered to be the requester of the provisioning.
     * This is intended as an replacement for the _requesters property
     * that is easier to pass through the machinery in maps.
     *
     * @ignore !! Can _requesters ever have more than one thing on it?
     * I suppose we could allow this to be a CSV or List<String>
     */
    String ARG_REQUESTER = "requester";
    /**
     * Name of a plan argument that contains the "source" type.
     * The value should be one of the sailpoint.object.Source enumerations
     * but it is allowed to be a custom source.
     */
    String ARG_SOURCE = "source";
    /**
     * Name of a plan argument that contains the database id of
     * an object associated with the source. This is used only
     * for Certification and PolicyViolation sources.
     */
    String ARG_SOURCE_ID = "sourceId";
    /**
     * Name of a plan argument that contains the database name of
     * an object associated with the source. This is used only
     * for Certification and PolicyViolation sources.
     */
    String ARG_SOURCE_NAME = "sourceName";
    /**
     * Name of a plan argument that contains the timeout to be used
     * when acquiring locks on the target Identity. Also used
     * when locking the source or destination identity when moving
     * links. This is intended for use in plans that are being
     * synchronously executed in a UI thread so you do not have to wait
     * the default 1 minute for a lock timeout.
     */
    String ARG_LOCK_TIMEOUT = "lockTimeout";
    /**
     * The name of a special AccountRequest application that represents
     * the IdentityIQ identity.
     */
    String APP_IIQ = "IIQ";
    /**
     * This is the name of the application "IIQ" that goes out in email.
     *
     * @ignore TODO: Maybe we should move it to some other class like 'Consts' or Configuration
     */
    String IIQ_APPLICATION_NAME = "IdentityIQ";
    /**
     * The name of a special AttributeRequest within the IdentityIQ
     * application to modify the assigned role list.
     */
    String ATT_IIQ_ASSIGNED_ROLES = "assignedRoles";
    /**
     * The name of a special AttributeRequest within the IdentityIQ
     * application to modify the detected role list.
     */
    String ATT_IIQ_DETECTED_ROLES = "detectedRoles";
    /**
     * The name of special AttributeRequest within the IdentityIQ
     * application to move or delete links
     */
    String ATT_IIQ_LINKS = "links";
    /**
     * The name of a special AttributeRequest within the IdentityIQ
     * application to modify the workgroup list.
     */
    String ATT_IIQ_WORKGROUPS = "workgroups";
    /**
     * Special attribute name used in AttributeRequests to
     * set an Identity or account's password.
     */
    String ATT_PASSWORD =
            sailpoint.integration.ProvisioningPlan.ATT_PASSWORD;
    /**
     * Special attribute used in the arguments map of a password
     * AttributeRequest that holds the users current password. If not
     * specified, the password will be "reset" rather than "changed".
     */
    String ATT_CURRENT_PASSWORD =
            sailpoint.integration.ProvisioningPlan.ATT_CURRENT_PASSWORD;
    /**
     * Special attribute used in the arguments map of a password
     * AttributeRequest that indicates that the new password should be
     * pre-expired (for example - the user has to change it after first login).
     */
    String ATT_PRE_EXPIRE =
            sailpoint.integration.ProvisioningPlan.ATT_PRE_EXPIRE;
    /**
     * Used to notify email template
     */
    String ATT_GENERATED = "generatedPass";
    /**
     * Constant for the password attribute found in AttributeRequests
     * for IdentityIQ.
     *
     * @deprecated use {@link #ATT_PASSWORD}
     */
    @Deprecated
    String ATT_IIQ_PASSWORD = ATT_PASSWORD;
    /**
     * Attribute holding the capabilities list.
     * Certification has one of these too.
     */
    String ATT_IIQ_CAPABILITIES =
            Certification.IIQ_ATTR_CAPABILITIES;
    /**
     * Preferred camel case version of the capabilities attribute. IIQEvaluator
     * will accept either ATT_IIQ_CAPABILITIES or this attribute, but the IdentityMap
     * will be using this name.
     */
    String ATT_IIQ_CAPABILITIES_NEW = "capabilities";
    /**
     * Attribute holding the controlled scopes.
     */
    String ATT_IIQ_CONTROLLED_SCOPES =
            Certification.IIQ_ATTR_SCOPES;
    /**
     * Preferred camel case version of the authorizedScopes attribute. IIQEvaluator
     * will accept either ATT_IIQ_CONTROLLED_SCOPES or this attribute, but the
     * IdentityMap will be using this name.
     */
    String ATT_IIQ_CONTROLLED_SCOPES_NEW =
            "controlledScopes";
    /**
     * The name of a special AttributeRequest within the IdentityIQ
     * application to modify the authorized scopes list.
     */
    String ATT_IIQ_AUTHORIZED_SCOPES =
            Certification.IIQ_ATTR_SCOPES;
    /**
     * Attribute holding the assigned scope.
     */
    String ATT_IIQ_SCOPE = "scope";
    /**
     * Attribute holding the flag indicating that the identity
     * also controls the assigned scope.
     */
    String ATT_IIQ_CONTROLS_ASSIGNED_SCOPE =
            "controlsAssignedScope";
    /**
     * The name of a special AttributeRequest within the IdentityIQ
     * application to modify the ActivityConfig. The value
     * is normally a String or List of application ids.
     * If the value is Boolean true/false it sets the "enableAll"
     * flag.
     */
    String ATT_IIQ_ACTIVITY_CONFIG = "activityConfig";
    /**
     * A pseudo attribute representing the IdentityArchive list
     * which we display in the UI as "identity history".
     * You can only make Remove requests for this list, adding
     * IdentityArchive objects is only done as a side effect
     * of an identity refresh you cannot make one from a provisioning plan.
     * The value must be a id or list of ids of IdentityArchive objects.
     */
    String ATT_IIQ_ARCHIVES = "archives";
    /**
     * An IdentityIQ pseudo attribute targeting the list of IdentitySnapshots.
     */
    String ATT_IIQ_SNAPSHOTS = "snapshots";
    /**
     * A pseudo attribute representing Request objects associated
     * with this identity which the UI displays as "identity events".
     * You can only make Remove requests for this list, adding
     * Request objects is only done as a side effect of other things
     * like role sunrise/sunset. You cannot make one from a plan.
     * The value must be a id or list of ids of Request objects.
     *
     * @ignore !! I think we also show pending WorkflowCases as events too
     * in which case this may be a mixed list of Request and
     * WorkflowCase ids.  Might want to make these different
     * attributes but we don't really have to as long as we ref
     * them by id.
     */
    String ATT_IIQ_EVENTS = "events";
    /**
     * An IdentityIQ pseudo attribute targeting the list of
     * ProvisioningRequests.
     */
    String ATT_IIQ_PROVISIONING_REQUESTS = "provisioningRequests";
    /**
     * The name of a special AccountRequest application that represents
     * the aggregate identity managed by a provisioning system.
     * This account may have additional attributes not represented
     * in resource accounts, notably a list of provisioning system
     * role assignments.
     *
     * @ignore TODO: This may not be necessary if we have a Link
     * in the identity for each IDM system account.  In that case
     * just use the application name for the IDM system.
     */
    String APP_IDM =
            sailpoint.integration.ProvisioningPlan.APP_IDM;
    /**
     * The name of the attribute in the APP_IDM account that
     * represents the assigned roles. The value must
     * be a List<String>.
     */
    String ATT_IDM_ROLES =
            sailpoint.integration.ProvisioningPlan.ATT_IDM_ROLES;
    /**
     * When logically true, this AccountRequest argument indicates that the
     * user specifically requested to create an account.
     */
    String ARG_FORCE_NEW_ACCOUNT = "forceNewAccount";
    /**
     * The date at which an add or set request is to occur,
     * the "sunrise" date.
     */
    String ARG_ADD_DATE = "addDate";
    /**
     * The date at which a Remove request is to occur,
     * the "sunset" date.
     * This can be combined with addDate in a Set or Add request which
     * is why it needs a different name.
     */
    String ARG_REMOVE_DATE = "removeDate";
    /**
     * The request comments coming in with the request. Need to be shown
     * on the approval.
     */
    String ARG_COMMENTS = "comments";
    /**
     * The role assignment note coming in with the attribute request.
     */
    String ARG_ASSIGNMENT_NOTE = "assignmentNote";
    /**
     * When this is logically true, it means that the link attribute
     * was manually edited. It should be stored in the link similar
     * to the "optimistic provisioning" option, but it should NOT be
     * sent to a provisioning system.
     */
    String ARG_LINK_EDIT = "linkEdit";
    /**
     * When used with ATT_PASSWORD, requests that policy checking
     * be performed before setting.
     */
    String ARG_CHECK_POLICY = "checkPolicy";
    /**
     * When added to the arguments and set to true, will
     * indicate that the AttributeAssignment stored on the identity,
     * which makes it sticky, should also be created or removed.
     *
     * @see AttributeAssignment
     */
    String ARG_ASSIGNMENT = "assignment";
    /**
     * When true indicates that the AttributeRequest value is secret.
     *
     * @ignore This is a semi-kludge for bug#15808 to keep us from including
     * values of secret fields in provisioning policies in the
     * IdentityRequest object to address an urgent customer need.
     * We need to follow this with a more thorough encryption
     * strategy that we can use with secret fields so they remain
     * encrypted while in the workflow rather than just hidden.
     */
    String ARG_SECRET = "secret";
    /**
     * Holds the name of the role which permits the role being requested
     * in a permitted role request.
     */
    String ARG_PERMITTED_BY = "permittedBy";
    /**
     * Request to remove a profile from a role in a role composition certification.
     */
    String ATT_IIQ_ROLE_PROFILES = "profiles";
    /**
     * Request to remove a child role from a role in a role composition certification.
     */
    String ATT_IIQ_ROLE_CHILD = "children";
    /**
     * Request to remove a required role from a role in a role composition certification.
     */
    String ATT_IIQ_ROLE_REQUIREMENT = "requiredRole";
    /**
     * Request to remove a permitted role from a role in a role composition certification.
     */
    String ATT_IIQ_ROLE_PERMIT = "permittedRole";
    /**
     * Request to remove a scope grant from a role.
     */
    String ATT_IIQ_ROLE_GRANTED_SCOPE = "roleGrantedScope";
    /**
     * Request to remove a capability grant from a role.
     */
    String ATT_IIQ_ROLE_GRANTED_CAPABILITY = "roleGrantedCapability";
    /**
     * Optional AttributeRequest argument used to convey
     * the previous values that were assigned.
     */
    String ARG_PREVIOUS_VALUE = "previousValue";
    String ARG_TYPE = "type";
    String ARG_REQUIRED = "required";
    String ARG_TYPE_DATE = "date";
    String ARG_ALLOW_SIMPLIFICATION = "allowSimplification";
    /**
     * Argument for "links" request. To which identity the link
     * should be moved to.
     */
    String ARG_DESTINATION_IDENTITY = "destinationIdentity";
    /**
     * Argument for "links" request. From which identity the link
     * should be moved.
     */
    String ARG_SOURCE_IDENTITY = "sourceIdentity";
    /**
     * A type name used in ObjectRequest to indicate that the request
     * will create or update an IdentityIQ ManagedAttribute object but will
     * not provisioning anything through a Connector. This is necessary
     * to distinguish between ObjectRequests of type "group" that
     * will provision groups, and ORs for other managed attributes.
     *
     * @ignore Originally we allowed the type to be the name of the account
     * schema attribute, but that felt funny since it isn't a Schema
     * name and in theory we might want to have MAs for more than just
     * the account schema.
     */
    String OBJECT_TYPE_MANAGED_ATTRIBUTE = "ManagedAttribute";
    /**
     * A type name used in ObjectRequest to indicate that the request
     * will create or update a group. Use of this constant is not required,
     * any Schema name in the target Application will do, but this
     * is common and consistent with OBJECT_type_MANAGED_ATTRIBUTE.
     */
    String OBJECT_TYPE_GROUP = Application.SCHEMA_GROUP;
    //////////////////////////////////////////////////////////////////////
    //
    // Account Group Attributes
    //
    //////////////////////////////////////////////////////////////////////
    String ACCOUNT_GROUP_NAME = "accountGroupName";
    String ACCOUNT_GROUP_DESCRIPTION = "accountGroupDescription";
    String ACCOUNT_GROUP_OWNER = "accountGroupOwner";
    String ACCOUNT_GROUP_SCOPE = "accountGroupScope";
    String ACCOUNT_GROUP_APPLICATION = "accountGroupApplication";
    String ACCOUNT_GROUP_NATIVE_IDENTITY = "accountGroupNativeIdentity";
    String ACCOUNT_GROUP_REFERENCE_ATTRIBUTE = "accountGroupReferenceAttribute";
    String ATT_PLAN_IDENTITY =
            sailpoint.integration.ProvisioningPlan.ATT_PLAN_IDENTITY;
    String ATT_PLAN_ACCOUNTS =
            sailpoint.integration.ProvisioningPlan.ATT_PLAN_ACCOUNTS;
    String ATT_PLAN_OBJECTS =
            sailpoint.integration.ProvisioningPlan.ATT_PLAN_OBJECTS;
    String ATT_PLAN_REQUESTERS = "requesters";
    String ATT_PLAN_ARGUMENTS =
            sailpoint.integration.ProvisioningPlan.ATT_PLAN_ARGUMENTS;
    String ATT_PLAN_INTEGRATION_DATA =
            sailpoint.integration.ProvisioningPlan.ATT_PLAN_INTEGRATION_DATA;
    String ATT_PLAN_PROFILE_ORINDAL = "profileOrdinal";
    String ATT_OP =
            sailpoint.integration.ProvisioningPlan.ATT_OP;
    String ATT_OBJECT_APPLICATION =
            sailpoint.integration.ProvisioningPlan.ATT_ACCOUNT_APPLICATION;
    String ATT_OBJECT_INSTANCE =
            sailpoint.integration.ProvisioningPlan.ATT_ACCOUNT_INSTANCE;
    String ATT_OBJECT_TYPE = "type";
    // this used to be "nativeIdentity", continue that for backward
    // with the integration/common model.
    String ATT_OBJECT_ID =
            sailpoint.integration.ProvisioningPlan.ATT_ACCOUNT_IDENTITY;
    String ATT_OBJECT_UUID = "uuid";
    String ATT_OBJECT_ATTRIBUTES =
            sailpoint.integration.ProvisioningPlan.ATT_ACCOUNT_ATTRIBUTES;
    String ATT_OBJECT_PERMISSIONS =
            sailpoint.integration.ProvisioningPlan.ATT_ACCOUNT_PERMISSIONS;
    String ATT_OBJECT_ARGUMENTS =
            sailpoint.integration.ProvisioningPlan.ATT_ACCOUNT_ARGUMENTS;
    String ATT_ATTRIBUTE_NAME =
            sailpoint.integration.ProvisioningPlan.ATT_ATTRIBUTE_NAME;
    String ATT_ATTRIBUTE_VALUE =
            sailpoint.integration.ProvisioningPlan.ATT_ATTRIBUTE_VALUE;
    String ATT_PERMISSION_TARGET =
            sailpoint.integration.ProvisioningPlan.ATT_PERMISSION_TARGET;
    String ATT_PERMISSION_RIGHTS =
            sailpoint.integration.ProvisioningPlan.ATT_PERMISSION_RIGHTS;
    String ATT_REQUEST_ARGUMENTS =
            sailpoint.integration.ProvisioningPlan.ATT_REQUEST_ARGUMENTS;
    String ATT_REQUEST_RESULT =
            sailpoint.integration.ProvisioningPlan.ATT_REQUEST_RESULT;
    /**
     * A reserved name that can be set in an AttributeRequest's assignmentId
     * to indicate that a new assignment is to be created. This is an alternative
     * to having the application generate a uuid.
     */
    String ASSIGNMENT_ID_NEW = "new";
    /**
     * List of secret things in provisioning plans.
     *
     * @ignore Moved here from ObjectUtil so we can use it in the object package without crossing
     * into api.  Consider breaking this out into it's own class since
     * we need it in a few places.
     */
    String[] SECRET_ATTRIBUTES = {
            ATT_PASSWORD,                     // "password"
            "USER_PWD",                       // used by PE2
            "*password*",                     // used by openconnector
            "currentPassword",                // seen in arg maps
            "racfPassword",                   // RACF password
            "userPassword",                   // Another password attrd
            "group.password",                 // group password
            "oauthBearerToken",               // SCIM #22736
            "IDFileCurrentPassword",          // used by Lotus Domino Connector #22931
            "tokenPIN",                       // used by RSA Connector
            "passwdPolicyValidation"          // used for validating password against a policy
    };

    /**
     * Return true if the given application name is the IdentityIQ application, either
     * the Certification "IdentityIQ" name or the ProvisioningPlan "IIQ" name.
     */
    static boolean isIIQ(String app) {
        return APP_IIQ.equals(app) || Certification.IIQ_APPLICATION.equals(app);
    }

    /**
     * If appname is {@link #APP_IIQ} we change it to {@link #IIQ_APPLICATION_NAME}
     *
     * @param appName the appname to display
     * @return modified Appname
     * @ignore TODO: Move this to a utility class.
     */
    static String getApplicationDisplayName(String appName) {

        if (ProvisioningPlan.APP_IIQ.equals(appName)) {
            appName = ProvisioningPlan.IIQ_APPLICATION_NAME;
        }
        return appName;
    }

    /**
     * Utility to add values to a multi-valued attribute with
     * necessary coercion. This is generic and could go in Util.
     * Originally this would always coerce the target value to a List
     * but this creates XML clutter during the simplify phase where
     * most AttributeRequests are just for atomic values.
     * <p>
     * When nocase is true, the values are case insensitive.
     */
    static Object addValues(Object something, Object toSomething,
                            boolean nocase) {

        // collapse simple lists
        if (something instanceof List) {
            List lvalue = (List) something;
            int size = lvalue.size();
            if (size == 0)
                something = null;
            else if (size == 1)
                something = lvalue.get(0);
        }

        if (something != null) {

            if (toSomething == null) {
                toSomething = something;
            } else if (!equals(something, toSomething, nocase)) {

                if (!(toSomething instanceof List)) {
                    // promote to a list
                    List newvalue = new ArrayList();
                    newvalue.add(toSomething);
                    toSomething = newvalue;
                }

                List lvalue = (List) toSomething;
                if (!(something instanceof List)) {
                    if (!contains(lvalue, something, nocase))
                        lvalue.add(something);
                } else {
                    for (Object o : (List) something) {
                        if (!contains(lvalue, o, nocase))
                            lvalue.add(o);
                    }
                }
            }
        }

        return toSomething;
    }

    /**
     * Backward compatibility for the Original signature before
     * case insensitivity was added.
     */
    static Object addValues(Object something, Object toSomething) {
        return addValues(something, toSomething, false);
    }

    /**
     * Utility to remove values from a multi-valued attribute.
     * Like addValues, used by Provisioner during plan compilation
     * and during plan application.
     * <p>
     * When nocase is true, the values are case insensitive.
     */
    static Object removeValues(Object something, Object fromSomething,
                               boolean nocase) {

        if (something != null) {
            if (fromSomething instanceof List) {
                List lvalue = (List) fromSomething;

                if (something instanceof List)
                    removeAll(lvalue, (List) something, nocase);
                else
                    remove(lvalue, something, nocase);

                // collapse to null
                if (lvalue.size() == 0)
                    fromSomething = null;
            } else if (fromSomething != null) {
                // I guess it makes sense to have remove collapse a single
                // value to null
                if (something instanceof List) {
                    List lvalue = (List) something;
                    if (contains(lvalue, fromSomething, nocase))
                        fromSomething = null;
                } else if (equals(fromSomething, something, nocase))
                    fromSomething = null;
            }
        }
        return fromSomething;
    }

    /**
     * Backward compatibility for the Original signature before
     * case insensitivity was added.
     */
    static Object removeValues(Object something, Object fromSomething) {
        return removeValues(something, fromSomething, false);
    }

    /**
     * Utility to remove values from a multi-valued attribute that
     * are not in a list.
     * When nocase is true, the values are case insensitive.
     */
    static Object retainValues(Object something, Object fromSomething,
                               boolean nocase) {
        if (something == null) {
            return null;
        } else {
            if (fromSomething instanceof List) {
                List lvalue = (List) fromSomething;
                List retains = null;
                if (something instanceof List)
                    retains = (List) something;
                else {
                    retains = new ArrayList();
                    retains.add(something);
                }
                retainAll(lvalue, retains, nocase);

                // collapse to null
                if (lvalue.size() == 0)
                    fromSomething = null;
            } else if (fromSomething != null) {
                // I guess it makes sense to have retain collapse a single
                // value to null
                if (something instanceof List) {
                    List lvalue = (List) something;
                    if (!contains(lvalue, fromSomething, nocase))
                        fromSomething = null;
                } else if (!equals(fromSomething, something, nocase))
                    fromSomething = null;
            }
        }
        return fromSomething;
    }

    static void removeAll(List list, List values, boolean nocase) {
        if (nocase) {
            for (Object o : values)
                remove(list, o, nocase);
        } else {
            list.removeAll(values);
        }
    }

    static void retainAll(List list, List values, boolean nocase) {

        if (nocase) {
            int max = list.size();
            int psn = 0;
            while (psn < max) {
                Object el = list.get(psn);
                boolean remove = false;
                if (el instanceof String)
                    remove = !contains(values, el, nocase);
                else
                    remove = !values.contains(el);

                if (remove) {
                    list.remove(psn);
                    max--;
                } else
                    psn++;
            }
        } else {
            // retainAll is "optional", better be an ArrayList!
            list.retainAll(values);
        }
    }

    static void remove(List list, Object value, boolean nocase) {
        if (nocase && value instanceof String) {
            String svalue = (String) value;
            ListIterator it = ((List) list).listIterator();
            while (it.hasNext()) {
                Object o = it.next();
                if (o instanceof String && svalue.equalsIgnoreCase((String) o))
                    it.remove();
            }
        } else
            list.remove(value);
    }

    static boolean contains(List list, Object value, boolean nocase) {
        boolean contains = false;
        if (nocase && value instanceof String) {
            String svalue = (String) value;
            for (Object o : list) {
                if (o instanceof String && svalue.equalsIgnoreCase((String) o)) {
                    contains = true;
                    break;
                }
            }
        } else
            contains = list.contains(value);

        return contains;
    }

    static boolean equals(Object o1, Object o2, boolean nocase) {
        boolean eq = false;
        if (nocase && o1 instanceof String && o2 instanceof String)
            eq = ((String) o1).equalsIgnoreCase((String) o2);
        else
            eq = Util.nullSafeEq(o1, o2, true);
        return eq;
    }

    static boolean isSecret(String name) {
        if (ProvisioningPlan.SecretAttributesMap == null) {
            Map<String, String> map = new HashMap<String, String>();
            for (int i = 0; i < SECRET_ATTRIBUTES.length; i++) {
                String sec = SECRET_ATTRIBUTES[i];
                map.put(sec, sec);
            }
            // no need for csect if we build before assigning
            ProvisioningPlan.SecretAttributesMap = map;
        }
        return (ProvisioningPlan.SecretAttributesMap.get(name) != null);
    }

    /**
     * Clone a plan removing passwords and other secret data.
     * This is intended for use when logging plans.
     *
     * @ignore This isn't as generic
     * as it could be, we only look for AttributeRequest and their
     * argument maps.
     */
    static ProvisioningPlan getLoggingPlan(ProvisioningPlan src) {
        ProvisioningPlan filtered = null;
        if (src != null) {
            try {
                XMLObjectFactory xf = XMLObjectFactory.getInstance();
                filtered = (ProvisioningPlan) xf.clone(src, null);
                List<AbstractRequest> requests = filtered.getAllRequests();
                if (requests != null) {
                    for (AbstractRequest req : requests) {
                        List<AttributeRequest> atts = req.getAttributeRequests();
                        if (atts != null) {
                            for (AttributeRequest att : atts) {
                                if (isSecret(att.getName()))
                                    att.setValue("********");

                                Attributes<String, Object> args = att.getArguments();
                                if (args != null) {
                                    Iterator<String> keys = args.keySet().iterator();
                                    while (keys.hasNext()) {
                                        String key = keys.next();
                                        if (isSecret(key))
                                            args.put(key, "********");
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (Throwable t) {
                ProvisioningPlan.log.error("Unable to log plan: ", t);
            }
        }
        return filtered;
    }

    boolean isIdentityPlan();

    void add(AccountRequest account);

    void add(ObjectRequest object);

    void remove(AccountRequest account);

    void addRequest(AbstractRequest req);

    @XMLProperty(mode = SerializationMode.INLINE_LIST_UNQUALIFIED)
    void setAccountRequests(List<AccountRequest> reqs);

    List<AccountRequest> getAccountRequests();

    List<ObjectRequest> getObjectRequests();

    @XMLProperty(mode = SerializationMode.INLINE_LIST_UNQUALIFIED)
    void setObjectRequests(List<ObjectRequest> reqs);

    void addObjectRequest(ObjectRequest request);

    List<AbstractRequest> getAllRequests();

    boolean isEmpty();

    boolean hasRequests();

    List<Identity> getRequesters();

    void addRequester(Identity requester);

    String getComments();

    @XMLProperty(mode = SerializationMode.LIST)
    List<ProvisioningTarget> getProvisioningTargets();

    String getSource();

    String getSourceType();

    String getSourceName();

    String getSourceId();

    Identity getIdentity();

    @XMLProperty
    String getNativeIdentity();

    Attributes<String, Object> getArguments();

    Attributes<String, Object> getIntegrationData();

    @XMLProperty
    String getTargetIntegration();

    @XMLProperty(mode = SerializationMode.UNQUALIFIED)
    ProvisioningResult getResult();

    boolean isIIQ();

    @XMLProperty
    String getTrackingId();

    @Deprecated
    @XMLProperty(xmlname = "sourceType")
    String getXmlSourceType();

    @Deprecated
    @XMLProperty(xmlname = "sourceName")
    String getXmlSourceName();

    @Deprecated
    @XMLProperty(xmlname = "sourceId")
    String getXmlSourceId();

    @Deprecated
    @XMLProperty(xmlname = "status")
    String getXmlStatus();

    @Deprecated
    @XMLProperty(xmlname = "requestID")
    String getXmlRequestID();

    @Deprecated
    @XMLProperty(mode = SerializationMode.LIST, xmlname = "Warnings")
    List<Message> getXmlWarnings();

    @Deprecated
    @XMLProperty(mode = SerializationMode.LIST, xmlname = "Errors")
    List<Message> getXmlErrors();

    AccountRequest add(String appname, String identity, AccountRequest.Operation op);

    AccountRequest add(String appname, String nativeIdentity, String attname,
                       Operation op, Object value);

    void put(String name, Object value);

    Object get(String name);

    String getString(String name);

    AbstractRequest getMatchingRequest(AbstractRequest src);

    AbstractRequest getMatchingRequest(AbstractRequest src, boolean allowGeneratedId);

    <T extends AbstractRequest> AbstractRequest
    getMatchingRequest(List<T> requests, AbstractRequest src);

    <T extends AbstractRequest> AbstractRequest
    getMatchingRequest(List<T> requests, AbstractRequest src, boolean allowGeneratedId);

    AccountRequest getMatchingAccountRequest(AccountRequest src);

    List<AccountRequest> getAccountRequests(String appname);

    @Deprecated
    AccountRequest getAccountRequest(String appname);

    AccountRequest getAccountRequest(String appname, String instance,
                                     String nativeIdentity);

    ObjectRequest getObjectRequest(String appName, String instance, String nativeIdentity);

    AccountRequest getIIQAccountRequest();

    AccountRequest getIDMAccountRequest();

    Collection<EntitlementSnapshot> convertToEntitlementSnapshots()
            throws GeneralException;

    List<String> getApplicationNames();

    List<Application> getApplications(Resolver resolver)
            throws GeneralException;

    List<AccountRequest> getNonModifyAccountRequests();

    List<AccountRequest> getModifyAccountRequests();

    Map toMap();

    void fromMap(Map map);

    ProvisioningPlan collapse(boolean includeNullSet);

    boolean isFullyCommitted();

    String getNormalizedStatus();

    boolean hasBeenExecuted();

    boolean needsRetry();

    @Deprecated
    void add(String appname, String attname, Operation op, Object value);

    @Deprecated
    @SuppressWarnings("deprecation")
    void add(String appname, String attname, Object value);

    @Deprecated
    @SuppressWarnings("deprecation")
    void remove(String appname, String attname, Object value);

    @Deprecated
    @SuppressWarnings("deprecation")
    void set(String appname, String attname, Object value);

    /**
     * Operation codes for attributes and permissions.
     * <p>
     * Set means to replace the current value (the default).
     * Add means to incrementally add something to the current value.
     * Remove means to incrementally remove something to the current value.
     * <p>
     * Revoke is used only during certification to indicate that a role
     * assignment should both be removed, and marked as permanently
     * revoked so the assignment rules don't put it back.
     * <p>
     * Retain means to keep the attribute values if they exist but do not
     * add them if they do not exist. It is only used in high-level
     * plans, never in a compiled plan. The effect is to remove the value
     * from Remove or Revoke operations but not to leave Add operations
     * if one did not already exist.
     */
    @XMLClass
    public enum Operation {
        Set(MessageKeys.PROVISIONING_PLAN_OP_SET),
        Add(MessageKeys.PROVISIONING_PLAN_OP_ADD),
        Remove(MessageKeys.PROVISIONING_PLAN_OP_REMOVE),
        Revoke(MessageKeys.PROVISIONING_PLAN_OP_REVOKE),
        Retain(MessageKeys.PROVISIONING_PLAN_OP_RETAIN);

        private String messageKey;

        private Operation(String messageKey) {
            this.messageKey = messageKey;
        }

        public String getMessageKey() {
            return this.messageKey;
        }
    }

    /**
     * Represents a request for one application account.
     * This exists for backward compatibility with many things prior to 6.0
     * but it is effectively nothing more than an ObjectRequest.
     * <p>
     * Some deprecated methods are carried forward for XML upgrading.
     */
    @XMLClass
    public static class AccountRequest extends AbstractRequest {

        //////////////////////////////////////////////////////////////////////
        //
        // Fields
        //
        //////////////////////////////////////////////////////////////////////

        /**
         * Defines the operation to perform on the account. This values are
         * the same as ObjectRequest.Operation. Either can be used when
         * building the request. This is for backward compatibility with
         * pre-6.0 code.
         *
         * @ignore I couldn't find a way avoid duplicating this.  Old code often
         * does this:  Just inheriting
         * <p>
         * import sailpoint.object.ProvisioningPlan.AccountRequest.Operation;
         * <p>
         * But this results in the error:
         * <p>
         * import requires canonical name forsailpoint.object.ProvisioningPlan.ObjectRequest.Operation
         * <p>
         * Java enums cannot "subclass" like classes can so we cannot create
         * an empty one down here that extends the other.  Since the
         * operation list almost never changes it is duplicated and
         * translation methods are provided.
         */
        @XMLClass(xmlname = "AccountOperation")
        public static enum Operation {
            Create,
            Modify,
            Delete,
            Disable,
            Enable,
            Unlock,
            Lock;
        }

        /**
         * Temporary kludge for role assignment with multiple accounts.
         * If this flag is true, it means this AccountRequest was generated
         * by the role expander and tells PlanCompiler NOT to generate
         * pre-6.3 AccountSelections if the target account is ambiguous.
         * This should be removed by the time 6.3 is over.
         */
        boolean _roleExpansion;

        //////////////////////////////////////////////////////////////////////
        //
        // Constructors
        //
        //////////////////////////////////////////////////////////////////////

        public AccountRequest() {
        }

        public AccountRequest(Map map) {
            super(map);
        }

        public AccountRequest(AccountRequest src) {
            super(src);
        }

        /**
         * @ignore ObjectRequest doesn't have this, but some older code may
         * still use it.
         */
        public AccountRequest(Operation op, String app, String inst, String id) {

            setOperation(op);
            setApplication(app);
            setInstance(inst);
            setNativeIdentity(id);
        }

        /**
         * Temporary transient flag meaning this request came from role expansion.
         * It is no serialized to xml.
         */
        public boolean isRoleExpansion() {
            return _roleExpansion;
        }

        /**
         * @ignore AccountRequest has historically had a clone() method. I don't
         * think we use it in system code but it's been around for a long time
         * so it may be used in custom code.
         */
        public AccountRequest clone() {
            return new AccountRequest(this);
        }

        /**
         * @ignore Not sure who uses this, it wasn't factored up to
         * ObjectRequest, so we need this?
         */
        public boolean hasNoAttributesOrPermissions() {
            return ((_attributes == null || _attributes.size() == 0) &&
                    (_permissions == null || _permissions.size() == 0));
        }

        /**
         * @ignore Backward compatibility accessor for cloneRequestProperties.
         */
        public void cloneAccountProperties(AccountRequest src) {

            cloneRequestProperties(src);
        }

        /**
         * @ignore Backward compatibility property that uses the older operation
         * enumeration.  This is functionally the same as ObjectRequest.setOp()
         */
        public void setOperation(Operation op) {
            if (op != null)
                setOp(Enum.valueOf(ObjectOperation.class, op.toString()));
        }

        /**
         * @ignore Backward compatibility property that uses the older operation
         * enumeration.  This is functionally the same as
         * ObjectRequest.getOp().
         */
        public Operation getOperation() {
            Operation op = null;
            ObjectOperation oop = getOp();
            if (oop != null)
                op = Enum.valueOf(Operation.class, oop.toString());
            return op;
        }

        /**
         * Causes object type to be suppressed from the Map representation.
         */
        public boolean isAccountRequest() {
            return true;
        }

        //////////////////////////////////////////////////////////////////////
        //
        // Upgrades
        //
        //////////////////////////////////////////////////////////////////////

        /**
         * Return the request ID if this request was queued.
         *
         * @ignore requestID used to be a first-class property, now it
         * is stored inside the ProvisioningResult.  Support the
         * old property for backward compatibility with
         * IntegrationExecutors
         * @deprecated use {@link ProvisioningResult#getRequestID()} on {@link #getResult()}
         */
        @Deprecated
        public String getRequestID() {
            return ((_result != null) ? _result.getRequestID() : null);
        }

        /**
          Parallel accessor for the xmlRequestID property upgrade.
         * @deprecated use {@link ProvisioningResult#getRequestID()} on {@link #getResult()}
         */
        @Deprecated
        public String getXmlRequestID() {
            return null;
        }

        /**
         
         * @deprecated Only used for JSON - use {@link #getArguments()} instead.
         */
        @Deprecated
        public Attributes<String, Object> getArgs() {
            return getArguments();
        }

        /**
         
         * @deprecated Only used for JSON - use {@link #setArguments(Attributes)} instead.
         */
        @Deprecated
        public void setArgs(Attributes<String, Object> atts) {
            setArguments(atts);
        }

    }

    /**
     * Represents an operation on a single account attribute.
     * <p>
     * A Script can be used if you need to calculate a value at runtime
     * rather than defining it statically. This is intended for plans
     * attached to roles, not the compiled plans passed to the
     * IntegrationExecutors.
     *
     * @ignore We could take this further and allow
     * "scriptlets" in the _value like we do in the Workflow model
     * but this seems kind of overkill here since only scripts or rule
     * references are meaningful.  Still value='rule:foo' is a lot more
     * convenient than this:
     * <pre>
     *   &lt;Script>
     *     &lt;Source>
     *       import java.util.HashMap;
     *       import sailpoint.object.Rule;
     *       Rule rule = context.getObject(Rule.class, "foo");
     *       HashMap args = new HashMap();
     *       args.put("identity", identity);
     *       context.runRule(rule, args);
     *     &lt;/Source>
     *   &lt;/Script>
     * </pre>
     * I don't like over-using Rules now that we have inline Script
     * capabilities so we'll punt on "rule:foo" for now.
     */
    @XMLClass
    public static class AttributeRequest extends GenericRequest {

        public AttributeRequest() {
        }

        public AttributeRequest(Map map) {
            fromMap(map);
        }

        public AttributeRequest(String name, Object value) {
            _name = name;
            _value = value;
        }

        public AttributeRequest(String name, Operation op, Object value) {
            _name = name;
            _op = op;
            _value = value;
        }

        public AttributeRequest(String name, Operation op, Object value, String assignmentId) {
            this(name, op, value);
            _assignmentId = assignmentId;
        }

        /**
         * Handy constructor for plan transformers.
         */
        public AttributeRequest(AttributeRequest src) {
            super(src);
        }

        //
        // Pseudo properties for XML serialization
        // The inherited properties aren't XMLProperties so we have
        // more control over the names, don't need to change the
        // name here but we do in PermissionRequest.  Put the
        // XML qualifier after the base property name so these
        // continue to sort they would if they actually had the xmlname.
        //

        /**
         
         * @deprecated use {@link #getName()}
         */
        @Deprecated
        @XMLProperty(xmlname = "name")
        public String getNameXml() {
            return _name;
        }

        //
        // This little dance let's us represent strings
        // using an XML element while complex values are
        // wrapped in a <value> element.  Not absolutely necessary
        // but it's what XML authors expect.
        //

        /**
         
         * @deprecated use {@link #getValue()}
         */
        @Deprecated
        @XMLProperty(mode = SerializationMode.ATTRIBUTE, xmlname = "value")
        public String getValueXmlAttribute() {
            return (_value instanceof String) ? (String) _value : null;
        }

        /**
         
         * @deprecated use {@link #getValue()}
         */
        @Deprecated
        @XMLProperty(xmlname = "Value")
        public Object getValueXmlElement() {
            return (_value instanceof String) ? null : _value;
        }

        /**
         
         * @deprecated use {@link #getDisplayValue()}
         */
        @Deprecated
        @XMLProperty(xmlname = "displayValue")
        public String getDisplayValueXml() {
            return this._displayValue;
        }

        //
        // utilities
        //

        /**
         * Returns attribute value. If the value is a reference, the referenced
         * object will be returned.
         *
         * @param ctx SailPointContext
         * @return Attribute value or null
         * @throws GeneralException
         */
        public Object getValue(SailPointContext ctx) throws GeneralException {
            if (_value != null && _value instanceof Reference) {
                Reference ref = (Reference) _value;
                return ctx.getReferencedObject(ref.getClassName(), ref.getId(), ref.getName());
            } else {
                return _value;
            }
        }

        public Map toMap() {
            Map map = new HashMap();
            map.put(ATT_ATTRIBUTE_NAME, _name);
            map.put(ATT_ATTRIBUTE_VALUE, _value);
            if (_op != null)
                map.put(ATT_OP, _op.toString());
            if (_arguments != null)
                map.put(ATT_REQUEST_ARGUMENTS, _arguments);
            if (_result != null)
                map.put(ATT_REQUEST_RESULT, _result.toMap());
            return map;
        }

        public void fromMap(Map map) {
            _name = Util.getString(map, ATT_ATTRIBUTE_NAME);
            _value = map.get(ATT_ATTRIBUTE_VALUE);//Util.getString(map, ATT_ATTRIBUTE_VALUE);
            Object o = map.get(ATT_OP);
            if (o != null)
                _op = Enum.valueOf(Operation.class, o.toString());

            o = map.get(ATT_REQUEST_ARGUMENTS);
            if (o instanceof Map) {
                _arguments = new Attributes<String, Object>();
                _arguments.putAll((Map) o);
            }

            o = map.get(ATT_REQUEST_RESULT);
            if (o instanceof Map) {
                _result = new ProvisioningResult((Map) o);
            }
        }
    }

}
