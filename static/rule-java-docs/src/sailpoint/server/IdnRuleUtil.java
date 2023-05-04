package sailpoint.server;

import com.sun.tools.javah.Gen;
import sailpoint.object.Identity;
import sailpoint.rule.Account;

import sailpoint.rule.ManagedAttributeDetails;
import sailpoint.tools.GeneralException;

import java.util.List;

/**
 * Utility class containing methods customers can use within a rules to perform common tasks.
 * sailpoint.server.IdnRuleUtil is available in rules as "idn" variable, e.g. "idn.countAccounts("someAppId")".
 * This utility class allows us to abstract out the use of SailPointContext in rules so that we can one day not pass a
 * context to the rule at all.
 */

public interface IdnRuleUtil {
    /**
     * Determines if an account currently exists on an application using the native identity.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @return True if the account exists, false otherwise.
     * @throws GeneralException wrapping underlying DB related errors
     */
    boolean accountExistsByNativeIdentity(String applicationName, String nativeIdentity) throws GeneralException;



    /**
     * Determines if an account currently exists on an application using the display name.
     *
     * @param applicationName The application name.
     * @param displayName The display name of the account.
     * @return True if the account exists, false otherwise.
     * @throws GeneralException wrapping underlying DB related errors
     */
    boolean accountExistsByDisplayName(String applicationName, String displayName) throws GeneralException;



    /**
     * Gets an account on an application using the native identity.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @return The Account representing the account or null if not found. If more than one found then the first
     *         Account in the exists is returned.
     * @throws GeneralException wrapping underlying DB related errors
     */
    Account getAccountByNativeIdentity(String applicationName, String nativeIdentity) throws GeneralException;



    /**
     * Gets an account on an application using the display name.
     *
     * @param applicationName The application name.
     * @param displayName The display name of the account.
     * @return The Account representing the account or null if not found. If more than one found then the first
     *         Account in the exists is returned.
     * @throws GeneralException wrapping underlying DB related errors
     */
    Account getAccountByDisplayName(String applicationName, String displayName) throws GeneralException;



    /**
     * Get the first account for the application and identityName and return the first accounts native sailpoint.object.Identity.
     *
     * @param applicationName The name of the application
     * @param identityName The name of the identity
     * @return The first link's nativeIdentity
     *
     * @throws GeneralException wrapping underlying DB related errors
     */
    String getFirstAccountNativeIdentity(String applicationName, String identityName) throws GeneralException;

    /**
     * Counts the number of accounts on an application.
     *
     * @param applicationName The application name.
     * @return The total number of accounts.
     * @throws GeneralException wrapping underlying DB related errors
     */
    int countAccounts(String applicationName) throws GeneralException;



    /**
     * Gets the value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
    Object getRawAccountAttribute(String applicationName, String nativeIdentity, String attribute) throws GeneralException;



    /**
     * Gets the value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
    Object getRawAccountAttribute(Account account, String attribute) throws GeneralException;



    /**
     * Gets the String value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
    String getAccountAttribute(String applicationName, String nativeIdentity, String attribute) throws GeneralException;



    /**
     * Gets the String value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
    String getAccountAttribute(Account account, String attribute);



    /**
     * Gets the boolean value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or false if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
    boolean getAccountAttributeBool(String applicationName, String nativeIdentity, String attribute) throws GeneralException;



    /**
     * Gets the boolean value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or false if the attribute does not exist.
     */
    boolean getAccountAttributeBool(Account account, String attribute);



    /**
     * Count the accounts that match the searchable attribute and value.
     *
     * @param sourceIds The list of Application ids that represent the sources of the data.
     * @param attributeName  The name of the searchable account attribute. The name parameter is required.
     * @param operation The operation to use when matching, it'll either be Equals or StartsWith.
     * @param values The list of values of that searchable attribute to match. The values parameter is required.
     *
     * @return The number of accounts that match the parameters provided.
     * @throws IllegalStateException wrapping underlying errors
     */
    int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values) throws IllegalStateException;



    /**
     * Get the identity name for the account matching the specified criteria.
     *
     * @param sourceIds The list of Application ids that represent the sources of the data
     * @param attributeName  The name of the searchable account attribute. The name parameter is required.
     * @param operation The operation to use when matching, it'll either be Equals or StartsWith.
     * @param values The list of values of that searchable attribute to match. The values parameter is required.
     *
     * @return The name of the sailpoint.object.Identity that matched the account that match the parameters provided.
     * @throws IllegalStateException wrapping underlying errors
     */
    String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values) throws IllegalStateException;



    /**
     * Gets the int value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or zero if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
    int getAccountAttributeInt(String applicationName, String nativeIdentity, String attribute) throws GeneralException;



    /**
     * Gets the int value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or zero if the attribute does not exist.
     */
    int getAccountAttributeInt(Account account, String attribute);



    /**
     * Finds ManagedAttribute description by provided sourceId/name/value/type.
     *
     * @param sourceId The sourceId used to query the ManagedAttribute.
     * @param name The name of the attribute used to query the ManagedAttribute.
     * @param value The value of the attribute used to query the ManagedAttribute.
     * @param type The type of the attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).
     *             Defaults to Entitlement (if null provided).
     * @return ManagedAttribute's description if found or else null.
     * @throws GeneralException wrapping underlying DB related errors
     */
    String getManagedAttributeDescription(String sourceId, String name, String value, ManagedAttribute.Type type) throws GeneralException;



    /**
     * Finds ManagedAttribute by sourceId/name/value/type and returns its details in ManagedAttributeDetails model.
     *
     * @param sourceId The sourceId used to query the ManagedAttribute.
     * @param name The name of the attribute used to query the ManagedAttribute.
     * @param value The value of the attribute used to query the ManagedAttribute.
     * @param type The type of the attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).
     * Defaults to Entitlement (if null provided).
     * @return ManagedAttributeDetails if found or else null.
     * @throws GeneralException wrapping underlying DB related errors
     */
    public ManagedAttributeDetails getManagedAttributeDetails(String sourceId, String name, String value, ManagedAttribute.Type type) throws GeneralException;



    /**
     * Fetch an identity by the internal id.
     *
     * @param id The id to use when fetching an identity object
     * @return A DTO representing the sailpoint.object.Identity, will throw if identity was not found
     */
    public Identity getIdentityById(String id);



    /**
     * Find and return the users that match the incoming attributeName, operation, value ordered by
     * the specified sortAttribute
     *
     * @param attributeName The attribute that should be searched, must be searchable and non-null
     * @param operation The operation to be used when searching; only Equals and StartsWith are supported
     * @param value The value that should match and must be non-null
     * @param sortAttribute The attribute that should be used while sorting
     * Default ordering will be on uid if not specified and this also must be searchable
     * Sort will always be in ascending order
     *
     * @return The List of users that match the passed in parameters. The max number returned values will be limited to 50.
     *
     * @throws IllegalStateException when attribute provided is not searchable,
     * when operation is not StartsWith or Equals,
     * the sortAttribute is not searahable,
     * or if there are issues during the search
     *
     */
    public List<Identity> findIdentitiesBySearchableIdentityAttribute(String attributeName, String operation,
                                                                      String value, String sortAttribute) throws IllegalStateException;



    /**
     * Count and return the number of users that match the incoming attributeName, operation and value.
     *
     * @param attributeName The attribute that should be searched, must be searchable and non-null
     * @param operation The operation to be used when searching; only Equals and StartsWith are supported
     * @param value The value that should match and must be non-null
     *
     * @return The number of identities that match the parameters
     *
     * @throws IllegalStateException when attribute provided is not searchable,
     * when operation is not StartsWith or Equals,
     * or if there are issues during the count operation
     *
     */
    public int countIdentitiesBySearchableIdentityAttribute(String attributeName, String operation, String value) throws IllegalStateException;


    /**
     * A method that can be used to call LDAP type connectors to look for
     * unique values. The connector is called with a specific search filter
     * based on the attributeName and value that is passed into this method.
     * If there is a value returned the values is considered to be non-unique.
     *
     * @param identityNameOrId The name or ID of the identity we are using
     * @param applicationNameOrId The name or ID of the source we are targeting
     * @param attributeName The name of the attribute we want to validate
     * @param attributeValue The value of the attribute we want to validate
     *
     * @return true if the value is unique AND false otherwise. If the application or identity can't be found an
     * IllegalStateException will be thrown.
     *
     */
    public boolean isUniqueLDAPValue(String identityNameOrId, String applicationNameOrId, String attributeName, String attributeValue);
}