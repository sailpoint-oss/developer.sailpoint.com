package sailpoint.object;

public class Field extends BaseAttributeDefinition  {

    public String getUnqualifiedName() {
        return "unqualifiedName";
    }

    public String getStringAttribute(String name) {
        return "attributeValue";
    }

    public String getApplication() {
        return "application";
    }

    public Object getAttribute(String attribute) {
        return new Object();
    }
}
