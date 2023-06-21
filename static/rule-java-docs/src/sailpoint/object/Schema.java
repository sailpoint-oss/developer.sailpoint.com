package sailpoint.object;

import java.util.ArrayList;
import java.util.List;


public class Schema {

    public String getObjectType() {
        return "objectType";
    }

    public String getNativeObjectType() {
        return "nativeObject";
    }

    public List<AttributeDefinition> getAttributes() {
        return new ArrayList<AttributeDefinition>();
    }

    public String getDisplayAttribute() {
        return "displayAttribute";
    }

    public String getIdentityAttribute() {
        return "identityAttribute";
    }

    public AttributeDefinition getAttributeDefinition(String name) {
        return new AttributeDefinition();
    }

    public List<String> getEntitlementAttributeNames() {
        return new ArrayList<>();
    }
}
