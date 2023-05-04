package sailpoint.object;

import sailpoint.tools.GeneralException;
import sailpoint.tools.xml.PersistentXmlObject;
import sailpoint.tools.xml.SerializationMode;
import sailpoint.tools.xml.XMLClass;
import sailpoint.tools.xml.XMLProperty;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface Field extends PersistentXmlObject, Serializable, FormItem {
    /**
     * An attribute that holds a DynamicValue indicating whether this field
     * is hidden.
     */
    String ATTR_HIDDEN = "hidden";
    /**
     * Used in ComboBox
     * Records that are not in the Store via the Proxy
     * This allows IdentityIQ to add certain records to a store that would not normally
     * be there based on the Proxy Filters
     */
    String ATTR_EXTRA_RECS = "extraRecords";
    /**
     * An attribute that holds a DynamicValue indicating whether this field
     * is read only.
     */
    String ATTR_READ_ONLY = "readOnly";
    /**
     * Indicates that this field is stored as a csv string, rather than a list.
     */
    String FORMAT_CSV = "csv";
    /**
     * Display type properties
     * <p>
     * - textarea : forces a single-valued text field to be a textarea
     * - radio : forces a multi-valued field to use radio buttons regardless of size.
     * - combobox : forces a multi-valued field to a combobox  regardless of size.
     * - checkbox : forces a multi-valued field to a series of checkboxes.
     */
    String DISPLAY_TYPE_TEXTAREA = "textarea";
    String DISPLAY_TYPE_RADIO = "radio";
    String DISPLAY_TYPE_COMBOBOX = "combobox";
    String DISPLAY_TYPE_CHECKBOX = "checkbox";
    // Boolean - indicates that this field requires both the date and time
    String RENDER_SHOW_TIME = "showDateTime";
    // Boolean - indicates that this field is the end date
    // in a date range calculation. The selected date should
    // be the end of the day chosen
    String RENDER_END_DATE = "endDate";
    /**
     * Boolean - indicates that this field should always use a combobox
     * rather than a radio
     *
     * @deprecated Use displayType, setting value to Field.DISPLAY_TYPE_COMBOBOX
     */
    @Deprecated
    String RENDER_USE_SELECT_BOX = "useSelectBox";
    // Name of the object property that should be used to set the
    // value of the field. By default the object ID will be used
    String ATTR_VALUE_PROPERTY = "valueProperty";
    // Most common value for ATTR_VALUE_PROPERTY - name
    String ATTR_VALUE_PROPERTY_NAME = "name";
    String ATTR_VALUE_OBJ_COLUMN = "objectColumn";
    //Entry to provide a List of Libraries to use for reconciling calls
    String ATTR_CALL_LIBS = "callLibraries";
    //Entry to provide a List of Rule Libraries to aid in rule evaluation
    String ATTR_RULE_LIBS = "ruleLibraries";
    /**
     * The name of a field that when used in account creation templates
     * will specify the native identity of the new account. This is
     * recognized by the PlanCompiler and set as the nativeIdentity in the
     * AccountRequest rather than a normal AttributeRequest.
     */
    String ACCOUNT_ID = "accountId";
    /**
     * The name of an attribute used to hold another Map containing
     * arguments that will be passed into the evaluation of
     * dynamic scripts in this field.
     */
    String ATT_SCRIPT_ARGS = "scriptArguments";
    /**
     * Argument to specify ManagedAttribute. MAs cannot be treated
     * as normal SailPoint Objects because they do not contain name.
     * There is a special case to deal with MA's as the Field Type.
     */
    String TYPE_MANAGED_ATTR = "ManagedAttribute";
    /**
     * The name of an attribute that holds the ProvisioningPlan.ObjectOperation
     * name if this field was generated from an update policy where
     * the request was something other than op=Modify, such as op=Enable,
     * op=Disable, or op=Lock. The scripts might need to change behavior
     * based on this.
     */
    String ATT_OPERATION = "operation";
    /**
     * A field attribute that controls whether this field will be included
     * during provisioning policy template expansion.
     */
    String ATT_IGNORED = "ignored";
    /**
     * This will be the value of drop downs which need to show null.
     * To explicitly make sure that the value in db is null
     * this is what the value from the UI should be set to.
     */
    String NULL_CONST = "*null*";

    /**
     * Converts a single value into the appropriate type.
     * It only supports primitive types and date.
     * It does not support sailpoint object types.
     * If the type is not defined, then the original object is returned.
     * This can be used in converting field value or field allowed value.
     *
     * @param type  the class type to be converted to
     * @param value the object value to be converted
     * @return the converted value object
     * @throws Exception format exception
     */
    static Object convertSimpleTypeValue(String type, Object value) throws Exception {
        if (type == null || value == null) {
            return value;
        }

        Object newValue = value;
        if (Field.TYPE_DATE.equals(type)) {
            if (!(value instanceof Date)) {
                // note that unlike Util.getDate if we have a string
                // we assume it is the String representation of a Long
                // not a rendered date
                newValue = new Date(Long.valueOf(value.toString()));
            }
        } else if (Field.TYPE_BOOLEAN.equals(type)) {
            // note that this is stricter than Util.otob
            newValue = Boolean.parseBoolean(value.toString());
        } else if (Field.TYPE_LONG.equals(type)) {
            newValue = Long.parseLong(value.toString());
        } else if (Field.TYPE_INT.equals(type)) {
            newValue = Integer.parseInt(value.toString());
        }
        return newValue;
    }

    String getHelpKey();

    String getDisplayType();

    boolean isPostBack();

    String getFilterString();

    String getInputTemplate();

    boolean isPermission();

    boolean isReviewRequired();

    boolean isAuthoritative();

    String getSection();

    @XMLProperty
    String getFormat();

    @XMLProperty
    boolean isSortable();

    @XMLProperty
    int getPriority();

    @XMLProperty(mode = SerializationMode.UNQUALIFIED)
    Attributes<String, Object> getAttributes();

    Object getAttribute(String attribute);

    String getStringAttribute(String name);

    boolean getBooleanAttribute(String name);

    @XMLProperty(mode = SerializationMode.INLINE)
    Script getValidationScript();

    @XMLProperty(mode = SerializationMode.REFERENCE)
    Rule getValidationRule();

    DynamicValue getAllowedValuesDefinition();

    DynamicValue getReadOnlyDefinition(Resolver r) throws GeneralException;

    DynamicValue getHiddenDefinition(Resolver r) throws GeneralException;

    @XMLProperty
    boolean isReadOnly();

    @XMLProperty
    boolean isHidden();

    int getColumnSpan();

    Object getValue();

    @Deprecated
    @XMLProperty(mode = SerializationMode.ATTRIBUTE, xmlname = "value")
    String getValueXmlAttribute();

    @Deprecated
    @XMLProperty(xmlname = "Value")
    Object getValueXmlElement();

    Script getScript();

    Rule getRule();

    String getCallable();

    Rule getFieldRule();

    DynamicValue getValueDefinition();

    Scriptlet getScriptlet();

    Object getPreviousValue();

    @Deprecated
    @XMLProperty(mode = SerializationMode.ATTRIBUTE, xmlname = "previousValue")
    String getPreviousValueXmlAttribute();

    @Deprecated
    @XMLProperty(xmlname = "PreviousValue")
    Object getPreviousValueXmlElement();

    @Deprecated
    DynamicValue getOwnerDefinition();

    @Deprecated
    Script getOwnerScriptXml();

    @XMLProperty
    boolean isDynamic();

    @Deprecated
    boolean isAllowedValuesDynamic();

    @Deprecated
    @XMLProperty(xmlname = "allowedValuesDynamic")
    boolean isXmlAllowedValuesDynamic();

    @XMLProperty
    String getDependencies();

    List<String> getDependencyList();

    @XMLProperty(mode = SerializationMode.INLINE)
    ApplicationDependency getAppDependency();

    boolean isIncomplete();

    String getTemplate();

    String getRole();

    String getApplication();

    String getPrefix();

    Map<String, Object> getScriptArguments();

    String getUnqualifiedName();

    String qualifyName(String prefix, String name);

    Class getTypeClass();

    String getPrompt();

    String getDisplayLabel();

    boolean isAllowed(Object value);

    String getOriginalName();

    @XMLProperty
    boolean isDisplayOnly();

    boolean equals(Object o);

    @XMLClass
    public static class ApplicationDependency {
        String _applicationName;
        String _schemaAttributeName;

        public ApplicationDependency() {

        }

        public ApplicationDependency(String appName, String schemaAtt) {
            this._applicationName = appName;
            this._schemaAttributeName = schemaAtt;
        }

        @XMLProperty
        public String getApplicationName() {
            return _applicationName;
        }

        @XMLProperty
        public String getSchemaAttributeName() {
            return _schemaAttributeName;
        }

    }
}
