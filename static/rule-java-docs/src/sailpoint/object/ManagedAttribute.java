package sailpoint.object;

import java.text.Collator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.ListIterator;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.util.Map.Entry;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.JoinPoint.StaticPart;
import org.aspectj.runtime.internal.Conversions;
import org.aspectj.runtime.reflect.Factory;
import sailpoint.tools.GeneralException;
import sailpoint.tools.Index;
import sailpoint.tools.Indexes;
import sailpoint.tools.Localizable;
import sailpoint.tools.Message;
import sailpoint.tools.TracingAspect;
import sailpoint.tools.Util;
import sailpoint.tools.xml.SerializationMode;
import sailpoint.tools.xml.XMLClass;
import sailpoint.tools.xml.XMLProperty;

public class ManagedAttribute implements Cloneable {
    private static final long serialVersionUID = -5357171423090984917L;
    /** @deprecated */
    @Deprecated
    public static final String OLD_PERMISSION_ATTRIBUTE = "-";
    private static final String[] UNIQUE_KEY_PROPERTIES;
    public static final String CONFIG_DEFAULT_LANG = "defaultLanguage";
    public static final String CONFIG_LANGUAGES = "languages";
    public static final String[] SYSTEM_ATTRIBUTES;
    public static final String PROV_ATTRIBUTE = "sysAttribute";
    public static final String PROV_DISPLAY_NAME = "sysDisplayName";
    public static final String PROV_DESCRIPTIONS = "sysDescriptions";
    public static final String PROV_REQUESTABLE = "sysRequestable";
    public static final String PROV_OWNER = "sysOwner";
    public static final String PROV_SCOPE = "sysScope";
    public static final String PROV_MANAGED_ATTRIBUTE_TYPE = "sysManagedAttributeType";
    public static final String PROV_CLASSIFICATIONS = "sysClassifications";
    public static final String[] PROV_ATTRIBUTES;
    private static Map SystemAttributeMap;
    private static CacheReference objectConfig;
    /** @deprecated */
    @Deprecated
    private String _purview;
    private Application _application;
    private String _type;
    private String _attribute;
    private String _value;
    private String _hash;
    private String _displayName;
    private String _uuid;
    Attributes<String, Object> _attributes;
    boolean _requestable;
    private List<Permission> _permissions;
    private List<Permission> _targetPermissions;
    private Date _lastRefresh;
    Date _lastTargetAggregation;
    private boolean _uncorrelated;
    private List<ManagedAttribute> _inheritance;
    private boolean _aggregated;
    private List<TargetAssociation> _associations;
    String _key1;
    String _key2;
    String _key3;
    String _key4;
    public static final Comparator<ManagedAttribute> SP_ACCOUNTGROUP_BY_NAME;
    public static final Comparator<ManagedAttribute> SP_ACCOUNTGROUP_BY_NATIVE_IDENTITY;
    public static final Comparator<ManagedAttribute> SP_ACCOUNTGROUP_BY_OWNER;
    public static final Comparator<ManagedAttribute> SP_ACCOUNTGROUP_BY_MODIFIED;


    public ManagedAttribute() {
    }

    public Application getApplication() {

        try {
            Application var2;
            Application var3 = var2 = this._application;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    @XMLProperty
    public String getType() {

        try {
            String var2;
            String var3 = var2 = this._type;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getAttribute() {

        try {
            String var2;
            String var3 = var2 = this._attribute;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getDisplayName() {

        try {
            String var2;
            String var3 = var2 = this._displayName;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getDisplayableName() {

        try {
            String displayableName;
            if (ManagedAttribute.Type.Permission.name().equals(this._type)) {
                displayableName = this._attribute;
            } else {
                displayableName = this._value;
            }

            if (this._displayName != null && this._displayName.trim().length() != 0) {
                displayableName = this._displayName;
            }

            return displayableName;
        } catch (Throwable var6) {
            throw var6;
        }
    }

    public Attributes<String, Object> getAttributes() {

        try {
            Attributes var2;
            Attributes var3 = var2 = this._attributes;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public Object getAttribute(String name) {

        try {
            Object var10000 = this._attributes != null ? this._attributes.get(name) : null;
            Object var4 = var10000;
            Object var5 = var10000;
            return var4;
        } catch (Throwable var7) {
            throw var7;
        }
    }

    public String getApplicationId() {

        try {
            String var10000 = this._application != null ? this._application.getId() : null;
            String var2 = var10000;
            String var3 = var10000;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public Object get(String name) {

        try {
            Object var10000 = this._attributes != null ? this._attributes.get(name) : null;
            Object var4 = var10000;
            Object var5 = var10000;
            return var4;
        } catch (Throwable var7) {
            throw var7;
        }
    }

    public void put(String name, Object value) {

        try {
            if (name != null) {
                if (value == null) {
                    if (this._attributes != null) {
                        this._attributes.remove(name);
                    }
                } else {
                    if (this._attributes == null) {
                        this._attributes = new Attributes();
                    }

                    this._attributes.put(name, value);
                }
            }

            Object var6 = null;
        } catch (Throwable var8) {
            throw var8;
        }
    }

    public Map<String, String> getDescriptions() {

        try {
            Map map = null;
            Object o = this.get("sysDescriptions");
            if (o instanceof Map) {
                map = (Map)o;
            }

            return map;
        } catch (Throwable var7) {
            throw var7;
        }
    }


    public String toString() {
        String t = this._type != null ? this._type : ManagedAttribute.Type.Entitlement.name();
        return t.toString() + "/" + this._attribute + "/" + this._value;
    }

    static {
        try {
            UNIQUE_KEY_PROPERTIES = new String[]{"application", "type", "attribute", "value"};
            SYSTEM_ATTRIBUTES = new String[]{"sysDescriptions"};
            PROV_ATTRIBUTES = new String[]{"sysAttribute", "sysDisplayName", "sysDescriptions", "sysRequestable", "sysOwner", "sysScope", "sysManagedAttributeType", "sysClassifications"};
            SP_ACCOUNTGROUP_BY_NAME = new Comparator<ManagedAttribute>() {
                public int compare(ManagedAttribute ag1, ManagedAttribute ag2) {
                    Collator collator = Collator.getInstance();
                    collator.setStrength(0);
                    return collator.compare(ag1.getDisplayableName(), ag2.getDisplayableName());
                }
            };
            SP_ACCOUNTGROUP_BY_NATIVE_IDENTITY = new Comparator<ManagedAttribute>() {
                public int compare(ManagedAttribute ag1, ManagedAttribute ag2) {
                    Collator collator = Collator.getInstance();
                    collator.setStrength(0);
                    return collator.compare(ag1.getValue(), ag2.getValue());
                }
            };
            SP_ACCOUNTGROUP_BY_OWNER = new Comparator<ManagedAttribute>() {
                public int compare(ManagedAttribute ag1, ManagedAttribute ag2) {
                    Collator collator = Collator.getInstance();
                    collator.setStrength(0);
                    Identity owner1Id = ag1.getOwner();
                    Identity owner2Id = ag2.getOwner();
                    String owner1 = owner1Id != null ? owner1Id.getName() : "";
                    String owner2 = owner2Id != null ? owner1Id.getName() : "";
                    return collator.compare(owner1, owner2);
                }
            };
            SP_ACCOUNTGROUP_BY_MODIFIED = new Comparator<ManagedAttribute>() {
                public int compare(ManagedAttribute ag1, ManagedAttribute ag2) {
                    Date date1 = ag1.getModified();
                    if (date1 == null) {
                        date1 = new Date();
                    }

                    Date date2 = ag2.getModified();
                    if (date2 == null) {
                        date2 = new Date();
                    }

                    return date1.compareTo(date2);
                }
            };
        } catch (Throwable var1) {
            if (var1 instanceof ExceptionInInitializerError) {
                throw (ExceptionInInitializerError)var1;
            }

            throw var1;
        }

    }

    public static enum Type implements Localizable {
        Entitlement,
        Permission,
        TargetPermission;

        private String messageKey;

        private Type(String messageKey) {
            Object[] var5 = new Object[]{var1, Conversions.intObject(var2), messageKey};

            try {
                this.messageKey = messageKey;
            } catch (Throwable var10) {
                throw var10;
            }
        }

        public String getMessageKey() {

            try {
                String var2;
                String var3 = var2 = this.messageKey;
                return var2;
            } catch (Throwable var5) {
                throw var5;
            }
        }

        public String getLocalizedMessage() {

            try {
                String var2;
                String var3 = var2 = this.getLocalizedMessage(Locale.getDefault(), TimeZone.getDefault());
                return var2;
            } catch (Throwable var5) {
                throw var5;
            }
        }


        static {
            try {
                Entitlement = new ManagedAttribute.Type("Entitlement", 0, "explanation_type_entitlement");
                Permission = new ManagedAttribute.Type("Permission", 1, "explanation_type_permission");
                TargetPermission = new ManagedAttribute.Type("TargetPermission", 2, "explanation_type_target_permission");
            } catch (Throwable var1) {
                if (var1 instanceof ExceptionInInitializerError) {
                    throw (ExceptionInInitializerError)var1;
                }

                throw var1;
            }

        }
    }
}
