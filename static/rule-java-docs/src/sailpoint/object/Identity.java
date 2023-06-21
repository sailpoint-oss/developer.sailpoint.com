package sailpoint.object;

import java.util.ArrayList;
import java.util.List;

public class Identity {

    /**
     * Get the calling Identity as a string
     * @return The string representation of the Identity
     */
    public String toString() {
        return "identityString";
    }

    /**
     * Get the calling Identity Id
     * @return The string Id of the Identity
     */
    public String getId() {
        return "id";
    }

    /**
     * Get the calling Identity name
     * @return The string name of the Identity
     */
    public String getName() {
        return "identityName";
    }

    /**
     * Get's the calling Identities Manager Object
     * @return The manager's Identity Object
     */
    public Identity getManager() {
        return new Identity();
    }

    /**
     * Get true/false if the Identity is a manager
     * @return true/false is the Identity a manager
     */
    public boolean getManagerStatus() {
        return false;
    }

    /**
     * Get a list of links that the Identity is connected to
     * @return List of Link Objects
     */
    public List<Link> getLinks() {
        return new ArrayList<Link>();
    }

    /**
     * Get a list of Bundle Objects of the assigned Roles of the Identity
     * @return List of Bundle Objects
     */
    public List<Bundle> getAssignedRoles() {
        return new List<Bundle>();
    }


    public List<Bundle> getBundles() {
        return new List<Bundle>();
    }

    public Attributes<String, Object> getAttributes() {
        return new Attributes<String, Object>();
    }


    public boolean isCorrelated() {
        return false;
    }

    /**
     * Get the first name of the Identity
     * @return the first name as a String
     */
    public String getFirstname() {
        return "name";
    }

    /**
     * Get the last name of the Identity
     * @return the last name as a String
     */
    public String getLastname() {
        return "name";
    }

    /**
     * Get the full name of the Identity
     * @return the full name as a String
     */
    public String getFullName() {
        return "fullName";
    }

    /**
     * Get the display name of the Identity
     * @return the display name as a String
     */
    public String getDisplayName() {
        return "displayName";
    }

    public String getDisplayableName() {
        return "displayableName";
    }

    /**
     * Get the email of the Identity
     * @return the email as a String
     */
    public String getEmail() {
        return "email";
    }

    public boolean isInactive() {
        return false;
    }

    /**
     * Get the attribute value given the name of the attribute
     * @param name The name of the attribute to get on an Identity.
     *             Examples include: manager, administrator, bundles, assignedRoles, capabilities, rights, workgroups, managerStatus, lastRefresh, correlated
     * @return the attribute Object
     */
    public Object getAttribute(String name) {
        return new Object();
    }

    /**
     * Get the attribute value as a string given the name of the attribute on the Identity.
     * @param name
     * @return the attribute value as a string
     */
    public String getStringAttribute(String name) {
        return "attributeValue";
    }


    public Link getLink(Application res) {
        return new Link();
    }

    public Bundle getAssignedRole(String id) {
        return new Bundle();
    }
    public List<RoleAssignment> getRoleAssignments() {
        return new List<RoleAssignment>();
    }

    public String getType() {
        return "type";
    }
}
