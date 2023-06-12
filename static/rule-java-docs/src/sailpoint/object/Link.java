package sailpoint.object;

import java.util.Iterator;
import java.util.List;
import java.util.Locale;

/**
 * The Link class is a reference to a single account within an application (Source)
 */
public class Link {
    Application _application;
    Identity _identity;
    String _nativeIdentity;
    Attributes<String, Object> _attributes;
    String _displayName;


    /**
     * Get the application that this link references
     * @return the application object
     */
    public Application getApplication() {
        return this._application;
    }

    /**
     * Get the application name that this link references
     * @return the application name
     */
    public String getApplicationName() {
        return this.getApplication() != null ? this.getApplication().getName() : null;
    }

    /**
     * Get the application id that this link references
     * @return
     */
    public String getApplicationId() {
        return this.getApplication() != null ? this.getApplication().getId() : null;
    }


    /**
     * Get the Identity object that this link references
     * @return the Identity tied to this link
     */
    public Identity getIdentity() {
        return this._identity;
    }

    /**
     * Get the Entitlement Attributes of the link
     * @return the attributes of the entitlement
     */
    public Attributes getEntitlementAttributes() {
        try {
            Attributes attrs = new Attributes();
            Schema schema = null;
            if (this._application != null) {
                schema = this._application.getSchema("account");
            }

            if (null != this._attributes && null != schema && null != schema.getEntitlementAttributeNames()) {
                Iterator var3 = schema.getEntitlementAttributeNames().iterator();

                while(var3.hasNext()) {
                    String attrName = (String)var3.next();
                    Object val = this._attributes.get(attrName);
                    if (null != val) {
                        attrs.put(attrName, val);
                    }
                }
            }

            return attrs;
        } catch (Throwable var10) {
            throw var10;
        }
    }

    /**
     * Get the string value of the link's native identity.
     * @return the native identity
     */
    public String getNativeIdentity() {
        return this._nativeIdentity;
    }

    /**
     * Get a list of entitlements for the account link
     * @param locale
     * @param attributeFilter
     * @return a list of entitlements
     * @throws GeneralException
     */
    public List<Entitlement> getEntitlements(Locale locale, String attributeFilter) throws GeneralException {
        return Entitlement.getAccountEntitlements(locale, this, attributeFilter);
    }

    /**
     * Get a single attribute of the account link
     * @param name the name of the attribute to retrieve
     * @return the given attributes value
     */
    public Object getAttribute(String name) {
        return this._attributes != null ? this._attributes.get(name) : null;
    }

    /**
     * Get the attributes of the account link
     * @return the attributes of the linked account
     */
    public Attributes<String, Object> getAttributes() {
        return this._attributes;
    }

    /**
     * Get the display name of the account link
     * @return the display name, if the display name is null return the native identity
     */
    public String getDisplayableName() {
        return this._displayName != null && this._displayName.trim().length() > 0 ? this._displayName : this._nativeIdentity;
    }

    /**
     * A true or false value if the account is disabled
     * @return true or false if the account is disabled
     */
    public boolean isDisabled() {
        return false;
    }
}
