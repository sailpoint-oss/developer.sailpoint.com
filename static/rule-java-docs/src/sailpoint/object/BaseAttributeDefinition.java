package sailpoint.object;

import java.util.List;

public abstract class BaseAttributeDefinition {
    public static final String TYPE_STRING = "string";
    public static final String TYPE_SECRET = "secret";
    public static final String TYPE_LONG = "long";
    public static final String TYPE_INT = "int";
    public static final String TYPE_BOOLEAN = "boolean";
    public static final String TYPE_DATE = "date";
    public static final String TYPE_PERMISSION = "permission";

    String _name;
    String _displayName;
    String _type;
    boolean _multi;
    String _description;
    protected String _categoryName;
    private Object _defaultValue;
    protected List<Object> _allowedValues;
    protected boolean _required;

    public String getName() {
        return this._name;
    }

    public void setName(String name) {
        this._name = name;
    }

    public String getDisplayName() {
        return this._displayName;
    }

    public void setDisplayName(String name) {
        this._displayName = name;
    }

    public String getType() {
        return this._type;
    }

    public void setType(String type) {
        this._type = type;
    }

    public boolean isMulti() {
        return this._multi;
    }

    public void setMulti(boolean b) {
        this._multi = b;
    }

    public boolean isMultiValued() {
        return this._multi;
    }

    public void setMultiValued(boolean b) {
        this._multi = b;
    }

    public String getDescription() {
        return this._description;
    }

    public void setDescription(String description) {
        this._description = description;
    }

    public String getCategoryName() {
        return this._categoryName;
    }

    public void setCategoryName(String categoryName) {
        this._categoryName = categoryName;
    }

    public boolean isRequired() {
        return this._required;
    }

    public void setRequired(boolean required) {
        this._required = required;
    }

    public Object getDefaultValue() {
        return this._defaultValue;
    }

    public void setDefaultValue(Object defaultValue) {
        this._defaultValue = defaultValue;
    }

}
