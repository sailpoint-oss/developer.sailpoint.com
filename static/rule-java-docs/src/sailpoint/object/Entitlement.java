package sailpoint.object;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

public class Entitlement {
    private String applicationName;
    private String attributeName;
    private String attributeValue;
    private String description;


    public String getApplicationName() {
        try {
            String var2;
            String var3 = var2 = this.applicationName;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getAttributeName() {

        try {
            String var2;
            String var3 = var2 = this.attributeName;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getAttributeValue() {

        try {
            String var2;
            String var3 = var2 = this.attributeValue;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public String getDescription() {

        try {
            String var2;
            String var3 = var2 = this.description;
            return var2;
        } catch (Throwable var5) {
            throw var5;
        }
    }

    public static List<Entitlement> getAccountEntitlements(Locale locale, Link link, String attributeFilter) {
        Object[] var17 = new Object[]{locale, link, attributeFilter};

        try {
            List accountEntitlements = new ArrayList();
            Application app = link.getApplication();
            String appName = "unknown";
            if (app != null) {
                appName = app.getName();
                if (appName == null) {
                    appName = app.getId();
                }
            }

            Schema schema = app.getAccountSchema();
            List attrs = schema.getEntitlementAttributeNames();
            Iterator var8 = attrs.iterator();

            while(true) {
                String attr;
                List values;
                do {
                    do {
                        if (!var8.hasNext()) {
                            return accountEntitlements;
                        }

                        attr = (String)var8.next();
                    } while(attributeFilter != null && (attr == null || !attr.startsWith(attributeFilter)));

                    Object v = link.getAttribute(attr);
                    values = Util.asList(v);
                } while(values == null);

                Iterator var12 = values.iterator();

                while(var12.hasNext()) {
                    Object obj = var12.next();
                    String strVal = obj.toString();
                    String description = Explanator.getDescription(app, attr, strVal, locale);
                    accountEntitlements.add(new Entitlement(appName, attr, strVal, description, locale));
                }
            }
        } catch (Throwable var24) {
            throw var24;
        }
    }
}
