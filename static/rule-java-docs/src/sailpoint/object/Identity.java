package sailpoint.object;

import java.util.Map;

/**
 * Definition of a User interface available to Rule implementors.
 */
public interface Identity {

    /**
     * Get the internal name of the User.
     * @return the internal name
     */
    String getName();

    /**
     * Get the display name of the identity
     * @return The displayName
     */
    String getDisplayName();

    /**
     * Get the internal unique identifier.
     * @return The id
     */
    String getId();

    /**
     * Get the first name of the User.
     * @return The FirstName
     */
    String getFirstName();

    /**
     * Get the last name of the User.
     * @return The LastName
     */
    String getLastName();

    /**
     * Get the phone of the User.
     * @return The phone
     */
    String getPhone();

    /**
     * Get the work phone of the User.
     * @return The work phone
     */
    String getWorkPhone();

    /**
     * Get the personal email of the User.
     * @return The personal email address
     */
    String getPersonalEmail();

    /**
     * Get the work email of the User.
     * @return The work email
     */
    String getEmail();

    /**
     * Get the current lifecycle state of the User.
     * @return The lifecycle state
     */
    String getLifecycleState();

    /**
     * Get the raw attributes of the User.
     *
     * @return The map attributes derived from attribute promotion.
     */
    Map<String, Object> getAttributes();

    /**
     * Get the uid of the USer;
     * @return The Uid
     */
    String getUid();

    /**
     * Check to see if the current user has reports and is a manager.
     * @return true if the User is a manager, false otherwise
     */
    boolean isManager();

    /**
     * The internal ID of the manager for this User.
     * @return The internal ID of the manager
     */
    String getManagerId();

    /**
     * Gets the name of the user's manager.
     * @return The name of the manager
     */
    String getManagerName();

    /**
     * Get the country of the user
     * @return The country
     */
    String getCountry();

    /**
     * Get the user's employee number;
     * @return The employee number
     */
    String getEmployeeNumber();

    /**
     * Get the user's specified attribute as a string
     * @return The attribute string
     */
    String getStringAttribute(String attributeName);

    /**
     * Get the user's specified attribute as an object
     * @return The attribute object
     */
    Object getAttribute(String attributeName);

}