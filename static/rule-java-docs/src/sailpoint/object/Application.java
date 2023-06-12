package sailpoint.object;

import java.util.ArrayList;
import java.util.List;
import sailpoint.object.Filter.LeafFilter;

public class Application {

    public String getId() {
        return "id";
    }

    public String getName() {
        return "name";
    }

    public Attributes<String, Object> getAttributes() {
        return new Attributes<String,Object>();
    }

    public Object getAttributeValue(String name) {
        return new Object();
    }

    public String getStringAttributeValue(String name) {
        return "attributeValue";
    }

    public List<Schema> getSchemas() {
        return new ArrayList<Schema>();
    }

    public int getIntAttributeValue(String name) {
        return 1;
    }

    public LeafFilter getManagerCorrelationFilter() {
        return new LeafFilter();
    }

    public List<PasswordPolicyHolder> getPasswordPolicies() {
        return new ArrayList<PasswordPolicyHolder>();
    }

}
