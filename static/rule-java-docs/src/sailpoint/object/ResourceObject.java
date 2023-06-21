package sailpoint.object;

/**
 * Read-only representation of account data that has been aggregated. Use this as a basis to determine correlation linkages with a specific identity.
 */

public class ResourceObject {

    /**
     *
     * @return
     */
    public String getIdentity() {
        return "identity";
    }

    /**
     * Get the attribute value provided as a string
     * @param name The name of the attribute to retrieve
     * @return the string value of the given attribute name
     */
    public String getStringAttribute(String name) {
        return "stringAttribute";
    }

    /**
     * Get the attribute value provided as a string
     * @param name The name of the attribute
     * @return the string value of the given attribute name
     */
    public String getString(String name) {
        return "string";
    }
}
