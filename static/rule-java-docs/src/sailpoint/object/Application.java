package sailpoint.object;

import sailpoint.api.ApplicationConfigChangeListener;
import sailpoint.tools.GeneralException;
import sailpoint.tools.xml.*;

import java.io.Serializable;
import java.util.*;

public interface Application extends PersistentXmlObject, Serializable, XMLReferenceTarget, Cloneable, Describable {
    /**
     * Name of the configuration schema
     */
    String SCHEMA_CONFIG = "configuration";
    /**
     * Name of the group schema
     */
    String SCHEMA_GROUP = "group";
    /**
     * Name of the account schema
     */
    String SCHEMA_ACCOUNT = "account";
    /**
     * Attribute holding the CompositeDefinition.
     */
    String ATTR_COMPOSITE_DEFINITION = "compositeDefinition";
    /**
     * Attribute holding the manager filter.
     */
    String ATTR_MANAGER_FILTER = "managerCorrelationFilter";
    /**
     * Attribute holding the name of the application "template" that was
     * used when this application was created. Template application are
     * stored in the ConnectorRegistry and cross referenced by the UI
     * for "type" specific information.
     */
    String ATTR_TEMPLATE_APPLICATION = "templateApplication";
    /**
     * Attribute holding the path to the xhtml page used to render the
     * configuration attributes for an application. This is typically
     * only stored on the template application.
     */
    String ATTR_FORM_PATH = "formPath";
    /**
     * Attribute to indicate that the aggregation process should track
     * native changes at the application level.
     * <p>
     * This flag alone does not cause change detection, there must
     * also be a life cycle event defined that matches
     * the identity.
     */
    String ATTR_NATIVE_CHANGE_DETECTION_ENABLED = "nativeChangeDetectionEnabled";
    /**
     * List of operations that should be included when performing native change detection.
     */
    String ATTR_NATIVE_CHANGE_OPERATIONS = "nativeChangeDetectionOperations";
    /**
     * List of attribute names that should be included when performing native change detection.
     * When null the entitlement attributes will be used.
     */
    String ATTR_NATIVE_CHANGE_ATTRIBUTES = "nativeChangeDetectionAttributes";
    /**
     * Option that tells the back end which attributes to detect change against.
     * Defaults to "entitlements", but also supports "userDefined" and "all".
     */
    String ATTR_NATIVE_CHANGE_ATTRIBUTE_SCOPE = "nativeChangeDetectionAttributeScope";
    /**
     * Key from the config that holds the value in the config
     * that holds the name of the sever side rules that should
     * be executed before and after provisioning.
     */
    String ATTR_BEFORE_PROVISIONING_RULE = "beforeProvisioningRule";
    /**
     * Key from the config that holds the value in the config that holds the name of the
     * sever side rules that should be executed before and
     * after provisioning.
     */
    String ATTR_AFTER_PROVISIONING_RULE = "afterProvisioningRule";
    /**
     * Key from the config that holds a list of rule names that need to be executed
     * by the connector as part of the connector interaction.  This includes
     * thinks such as the ConnectorBeforeCreate, ConnectorAfterCreate, etc...
     */
    String ATTR_NATIVE_RULES = "nativeRules";
    /**
     * Key from the config that can be set by the Connector to save state
     * for delta aggregation.  Only the connector knows what this is,
     * it can be a simple String, a Date, or a complex Map.
     */
    String ATTR_DELTA_AGGREGATION = "deltaAggregation";
    /**
     * Key from the config that says where customization rules are run
     * when the Connector is being called through a proxy Connector.
     * This was added for the CIB, where there are three choices
     * where the customization rule could run: within the CIB,
     * within IdentityIQ, or both.
     */
    String ATTR_CUSTOMIZATION_RULE_LOCATION = "customizationRuleLocation";
    /**
     * Attribute for the management workgroup, if any, for this Application
     */
    String ATTR_MANAGEMENT_WORKGROUP = "managementWorkgroup";
    /**
     * Attribute for the displayName of the application
     */
    String ATTR_DISPLAY_NAME = "cloudDisplayName";
    /**
     * Value for ATTR_CUSTOMIZATION_RULE_LOCATION that means the
     * rule will be called when the connector calls are NOT being proxied.
     * This is the default if not set.  For CIB, it means that the
     * rule will run within the CIB only.
     * ConnectorProxy._redirectetdConnector must be null.
     */
    String RULE_LOCATION_LOCAL = "local";
    /**
     * Value for ATTR_CUSTOMIZATION_RULE_LOCATION that means the
     * rule will be called when the connector calls are being proxied.
     * For CIB this means from the IdentityIQ side.
     * ConnectorProxy._redirectedConnector must be non null.
     */
    String RULE_LOCATION_PROXY = "proxy";
    /**
     * Value for ATTR_CUSTOMIZATION_RULE_LOCATION that means the
     * rule will be on both the IdentityIQ and CIB sides.  Unlikely to
     * be used in practice but who knows.
     */
    String RULE_LOCATION_BOTH = "both";
    /**
     * CSV list of attribute names that should be encrypted when persisting
     * applications.
     */
    String CONFIG_ENCRYPTED_CONFIG_ATTRIBUTES = "encrypted";
    /**
     * The name of the attribute in the group schema containing the list
     * of members.  This was originally LDAPConnector.CONFIG_GROUP_ATTR but
     * moved here because it is needed in several connectors.
     *
     * @ignore Ideally this would be Schema property like identityAttribute
     * and the others but the old LDAPConnector convention must be supported.
     */
    String ATTR_GROUP_MEMBER_ATTRIBUTE = "groupMemberAttribute";
    /**
     * The name of the IdentityNow application.
     */
    String IDENTITY_NOW_APP_NAME = "IdentityNow";
    /**
     * Key for the connector state map that contains new app config values
     */
    String CONNECTOR_STATE_MAP = "connectorStateMap";
    /**
     * List of secret attributes used in different connector's application attribute.
     */
    String[] SECRET_ATTRIBUTES = {
            "password",                        // "password"
            "cmdClientPassword",               // used by RSA Connector
            "adminPassword",                   // used by Airwatch Connector
            "apikey",                          // used by Airwatch Connector
            "kid",                             // used by AWS Connector
            "secret",                          // used by AWS Connector
            "keystorePwd",                     // used by BMCESS Connector
            "token",                           // used by BOX Net Connector
            "transportUserPassword",           // used by CyberArk Connector
            "group.password",                  // used by JDBC Connector
            "accountId",                       // used by NetSuite Connector
            "keystorepassword",                // used by ServiceNow Connector
            "pkeypassword",                    // used by ServiceNow Connector
            "passwd",                          // used by Siebel Connector
            "admin_password",                  // used by TAM Connector
            "SudoUserPassword",                // used by Unix Connector
            "PassphraseForPrivateKey"          // used by Unix Connector
    };

    static ObjectConfig getObjectConfig() {

        return ObjectConfig.getObjectConfig(Application.class);
    }

    Map<String, Object> getExtendedAttributes();

    boolean isAutoPromotion();

    @XMLProperty(mode = SerializationMode.LIST)
    List<PasswordPolicyHolder> getPasswordPolicies();

    @XMLProperty
    String getFeaturesString();

    List<String> getEntitlementAttributeNames();

    Map<String, String> getEntitlements(Locale locale);

    List<Feature> getFeatures();

    boolean supportsFeature(Feature feature);

    @XMLProperty
    String getProxiedName();

    @XMLProperty(mode = SerializationMode.REFERENCE, xmlname = "ProxyApplication")
    Application getProxy();

    @XMLProperty
    String getConnector();

    @XMLProperty
    String getCluster();

    @XMLProperty
    String getType();

    @XMLProperty
    String getIcon();

    @XMLProperty(mode = SerializationMode.UNQUALIFIED)
    Attributes<String, Object> getAttributes();

    Object getAttributeValue(String name);

    @XMLProperty
    boolean isAuthenticationResource();

    @XMLProperty(mode = SerializationMode.REFERENCE)
    Rule getCorrelationRule();

    @XMLProperty(mode = SerializationMode.REFERENCE)
    Rule getCreationRule();

    @XMLProperty(mode = SerializationMode.REFERENCE)
    Rule getManagerCorrelationRule();

    @XMLProperty(mode = SerializationMode.REFERENCE)
    Rule getCustomizationRule();

    @XMLProperty(mode = SerializationMode.REFERENCE)
    Rule getManagedAttributeCustomizationRule();

    @XMLProperty
    String getProfileClass();

    @XMLProperty
    boolean isCaseInsensitive();

    @XMLProperty(mode = SerializationMode.UNQUALIFIED)
    ProvisioningConfig getProvisioningConfig();

    boolean isManagesOtherApps();

    @XMLProperty(mode = SerializationMode.LIST)
    List<Template> getTemplates();

    Template getAccountTemplate(Template.Usage usage);

    boolean isLogical();

    boolean isSupportsProvisioning();

    boolean isSupportsGroupProvisioning();

    boolean isSupportsAuthenticate();

    boolean isSupportsAccountOnly();

    boolean isSupportsAdditionalAccounts();

    boolean isSupportsDirectPermissions();

    boolean isNoAggregation();

    boolean usesUuid();

    boolean isNoAggregation(String objectType);

    boolean isDirectlyAssignable(String objectType);

    String getStringAttributeValue(String name);

    int getIntAttributeValue(String name);

    Long getLongAttributeValue(String name);

    @SuppressWarnings("rawtypes")
    List getListAttributeValue(String name);

    boolean getBooleanAttributeValue(String name);

    Date getDateAttributeValue(String name);

    @XMLProperty(mode = SerializationMode.LIST)
    List<Schema> getSchemas();

    Schema getSchema(String name);

    Schema getAccountSchema();

    Schema getGroupSchema();

    @SuppressWarnings("deprecation")
    AttributeDefinition getGroupAttribute();

    @XMLProperty(mode = SerializationMode.REFERENCE_LIST)
    List<Identity> getRemediators();

    @XMLProperty
    boolean isAuthoritative();

    CompositeDefinition getCompositeDefinition();

    @XMLProperty(mode = SerializationMode.REFERENCE)
    CorrelationConfig getAccountCorrelationConfig();

    Filter.LeafFilter getManagerCorrelationFilter();

    boolean isNativeChangeDetectionEnabled();

    @SuppressWarnings("unchecked")
    List<String> getNativeChangeOperations();

    @SuppressWarnings("unchecked")
    List<String> getNativeChangeAttributes();

    String getNativeChangeAttributeScope();

    String getManagementWorkgroup();

    String getFormPath();

    String getTemplateApplication();

    PasswordPolicyHolder getPasswordPolicyHolderById(String id);

    @Deprecated
    String getGroupHierarchyAttribute();

    String getGroupHierarchyAttribute(String objectType);

    List<Schema> getGroupSchemas();

    boolean hasGroupSchema(String objectType);

    String getObjectTypeForAttribute(String attributeName);

    List<Schema> getGroupsHaveMembersSchemas();

    AttributeDefinition getGroupAttribute(String objectType);

    @SuppressWarnings("unchecked")
    List<String> getEncrpytedConfigAttributes();

    String getBeforeProvisioningRule();

    String getAfterProvisioningRule();

    @SuppressWarnings("unchecked")
    List<String> getNativeRules();

    @Deprecated
    boolean isComposite();

    @Deprecated
    @XMLProperty(mode = SerializationMode.REFERENCE_LIST)
    List<Identity> getSecondaryOwners();

    @XMLProperty(mode = SerializationMode.REFERENCE_LIST)
    List<Application> getDependencies();

    boolean isSyncProvisioning();

    List<String> getBlockedAccountAttributeNames() throws GeneralException;

    List<String> getBlockedGroupAttributeNames() throws GeneralException;

    @SuppressWarnings("unchecked")
    Map<String, String> getDescriptions();

    String getDescription(String locale);

    String getDescription(Locale locale);

    @Deprecated
    @XMLProperty(mode = SerializationMode.ELEMENT, legacy = true)
    String getDescription();

    String getDisplayName();

    String getDisplayableName();

}
