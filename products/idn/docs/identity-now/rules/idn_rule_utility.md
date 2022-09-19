---
id: identitynow-rule-utility
title: Using IDNRuleUtil as a Wrapper for Common Rule Operations
sidebar_label: IdentityNow Rule Utility
sidebar_position: 2
---

## Overview

This article with teach you how to configure searchable account attributes within IdentityNow and then leverage them within the IDNRuleUtil wrapper class when searching accounts for things such as uniqueness checks. There are also methods in the IDNRuleUtil wrapper class that you can use without the additional searchable attributes.

Search attributes allow you to search across accounts and sources to determine if a specific attribute value is being used in your IdentityNow environment.

There are a few components that are critical when working with searchable attributes:

- [Configuration of search attributes within the IdentityNow system](#configuration-of-search-attributes-within-the-identitynow-system)
  - Seed data for accounts already aggregated into the system.
  - Ensure attribute promotion happens for new/changed accounts that are aggregated.
- [Create rules that can be used to query the newly created attribute values](#create-rules-that-can-be-used-to-query-the-newly-created-attribute-values)
- [Implement rules within the Create Profile section of each source for which an account is being provisioned](#implement-rules-within-the-create-profile-section-of-each-source-for-which-an-account-is-being-provisioned)

## Configuration of search attributes within the IdentityNow system

When planning to implement search attributes, it is important to consider how new accounts will have their values generated and what attributes should be used as reference.

The information you need to create search attributes:

- IDs for sources that will be searched

- Attribute name for each source that will be searched (such as mail, email, emailAddress)

- A unique name for the new attribute that will become common to all accounts in the Account Search configuration. Ex (newMail, newEmail, newEmailAddress)

- A display name for new attribute configuration.

The following example shows how to create a new attribute via the [Search Attributes API](https://developer.sailpoint.com/apis/beta/#operation/createSearchAttributeConfig)

A company has two sources. The first is Active Directory and the second is Workday. When new accounts are aggregated into the system, they wish to query IdentityNow to see if an email address is in existence. If the email address is not in use, it can be assigned to the new account. If it is in use, we can iterate on the email address value (add a 1 for example). We can then query IdentityNow once more to see if our incremented email address is in use. We can repeat this procedure until we have determined that an email address is unique.

The information needed to create our search attribute:

- IDs for sources that will be searched
  - Active Directory: `4028112837fe14c70177fe1955e9032c`
  - Workday: `4028812877fa18c72177fs195baa0341`

- Attribute name on each source that will be searched (such as mail, email, emailAddress)
  - Active Directory: `mail`
  - Workday: `emailAddress`

- A unique name for the new attribute that will become common to all accounts in the Account Search configuration. Ex (newMail, newEmail, newEmailAddress)
  - `promotedEmailAddress`

- A display name for new attribute configuration.
  - `Promoted Email Address`

### Create the new search attribute in IdentityNow

In order to call the APIs for search attributes you will need a personal access token and the name of your tenant to provide with the request. To retrieve a personal access token, see [Personal Access Tokens](../authentication.md#personal-access-tokens). To get the name of your tenant, see [Finding Your Organization Tenant Name](../getting_started.md#finding-your-org-tenant-name)

This will create an Account Search configuration for the two sources/attributes specified. All new/changed accounts that are aggregated will have this new attribute(“promotedEmailAddress”) created in the account schema and the value of the attribute(“mail” or “emailAddress”) depending on the source will be promoted to that new attribute.

```bash
curl --location -g --request POST 'https://{tenant}.api.identitynow.com/beta/accounts/search-attribute-config' \
--header 'Authorization: Bearer {token}' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "promotedEmailAddress",
  "displayName": "Promoted Email Address",
  "applicationAttributes": 
    {
      "4028112837fe14c70177fe1955e9032c": "mail",
      "4028812877fa18c72177fs195baa0341": "emailAddress"
    }
}'
```

**NOTE: AGGREGATION ONLY PROCESSES NEW AND/OR CHANGED ACCOUNTS FOR MANY SOURCES. THIS MEANS THAT IF AN ACCOUNT IS UNCHANGED, AN AGGREGATION WILL NOT SEED THE NEW ATTRIBUTE OR ITS VALUE FOR THIS ACCOUNT. FOR THIS REASON, IT IS MANDATORY THAT A NON-OPTIMIZED AGGREGATION BE PERFORMED WHEN AN ACCOUNT SEARCH CONFIGURATION IS CREATED/MODIFIED, FOR EACH SOURCE INVOLVED IN THAT CONFIGURATION.**

If this source has already been aggregated before the Account Search configuration was created, a non-optimized aggregation must be performed at this time to seed the new attribute data for all existing accounts.

At this point, the configuration exists to promote attributes on any new/changed account that comes into IdentityNow. These attributes and their associated values are stored for use in custom rules. Each account that exists on either of these sources will now have a new attribute called “promotedEmailAddress”. *The value of this attribute will be the value of `mail` if it was the Active Directory Source or `emailAddress` if it was the Workday source.*

## Create rules that can be used to query the newly created attribute values

To access the promoted attribute data mentioned in the above section, library methods have been implemented to allow access to that data. There are two methods that have been implemented.

```java
/**
 * Count the accounts that match the searchable attribute and value.
 *
 * @param sourceIds The list of Application ids that represent the sources of the data.
 * @param attributeName  The name of the searchable account attribute. The name parameter is required.
 * @param operation The operation to use when matching, it'll either be Operation.Equal OR Operation.StartsWith
 * @param values The value of that searchable attribute to math.  The value parameter is required.
 *
 * @return The number of accounts that match the parameters provided.
 */
public int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values)
```

```java

/**
 * Get the identity name for the account matching the specified criteria.
 *
 * @param sourceIds The list of Application ids that represent the sources of the data
 * @param attributeName  The name of the searchable account attribute. The name parameter is required.
 * @param operation The operation to use when matching, it'll either be Operation.Equal OR Operation.StartsWith
 * @param values The value of that searchable attribute to math.  The value parameter is required.
 *
 * @return The name of the Identity that matched the account that match the parameters provided.
 */
public String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)
```

Each of these utility library methods are loaded into the context that is available from within your custom rule. It can be accessed by appending the prefix “idn.” to the method call.

Example: We want to use the promoted attribute data to determine the uniqueness of an email address before it is used to provision a new account to one of the sources involved in the Account Search configuration. A call to these methods can be used to determine that uniqueness.

```java
import sailpoint.object.*;
import java.util.*;
import sailpoint.rule.*;
import org.apache.commons.lang.StringUtils;

     List SOURCE_IDS = new ArrayList(Arrays.asList(new String[]{"4028112837fe14c70177fe1955e9032c","4028812877fa18c72177fs195baa0341"}));
     String PROMOTED_ATTR_NAME = "promotedEmailAddress";
     String SEARCH_OP = "StartsWith"; //Can also use "Equals"
     List SEARCH_VALUES = new ArrayList(Arrays.asList(new String[]{"jc@sailpoint.com"}));

    //return matching accounts
     return idn.attrSearchCountAccounts(SOURCE_IDS, PROMOTED_ATTR_NAME, SEARCH_OP, SEARCH_VALUES));
     
     //In the event the above call returns non-zero values, it is certain
     //that an email value is already in use.  Should it be required to 
     //know which identity owns the account with this value, this method 
     //can be called.
     //idn.attrSearchGetIdentityName(SOURCE_IDS, PROMOTED_ATTR_NAME, SEARCH_OP, SEARCH_VALUES));
```

Note that there are two method calls from within the example rule above.

Calling the *`idn.attrSearchCountAccounts()`* method with both example source IDs, will cause a search of all accounts for a value “promotedEmailAddress=jc@sailpoint.com”. It will return the count of accounts that contain that attribute value pair.

In the event *`idn.attrSearchCountAccounts()`* returns non zero, it may be useful to determine which identity owns the account(s) contain that value. The *`idn.attrSearchGetIdentityName()`* method will return that identity name.

## Implement rules within the Create Profile section of each source for which an account is being provisioned

Create Profile can be found at **Admin** > **Connections** > **Source** > `SourceName` > **Accounts** > **Create Profile**

Rules can be invoked in different ways but one of the most common implementations involves binding it to the create profile. This will result in the rule being used to generate/check values that are used during new account provisioning.

When a `Generator` is selected for the `distinguishedName` attribute, a rule can be selected that invokes the provided library methods. An example of this would be the following scenario.

Through a Lifecycle State Change, an account needs to be provisioned to an Active Directory source.

When the provisioning plan is created, the rule that generates the value for `distinguishedName` is called. The rule invokes the library methods mentioned earlier to determine the uniqueness of the attribute. In this case it may:

Call *`idn.attrSearchCountAccounts()`* to determine if any other accounts are using first.last as a distinguishedName. If a count of 1 or more is returned, the call can be retried with first.last+1. The call is repeated until a zero is returned. At that point, the value is unique and can be used. The value is returned to the calling rule.

In some cases, where a non zero value is returned, it may be useful to know which identity owns the account to which that value belongs. In order to find out this information, call *`idn.attrSearchGetIdentityName()`* to determine the identity in question.

## IdnRuleUtil.java Descriptors

<u><b>Important Note:</b></u> Both the normal SailPoint context which is passed into the Beanshell rule evaluation and the new IdnRuleUtil class which is referenced below include an "Identity" class:

The SailPoint context Identity class is provided via `sailpoint.object.Identity`
The IdnRuleUtil Identity class is provided via `sailpoint.rule.Identity`
When referencing an Identity class, you must be explicit as to which Identity class you are using to avoid a namespace conflict. For example:

```java
sailpoint.object.Identity identity = plan.getIdentity();
String sAMAccountName = identity.getAttribute("adUsername");

sailpoint.rule.Identity foundIdentity = idn.getIdentityById("uid");
String email = foundIdentity.getAttribute("email");
```

The below section provides a full accounting of the methods available to rule writes via the IdnRuleUtil class:

```java
/**
 * Utility class containing methods customers can use within a rules to perform common tasks. 
 * IdnRuleUtil is available in rules as "idn" variable, e.g. "idn.countAccounts("someAppId")".
 * This utility class allows us to abstract out the use of SailPointContext in rules so that we can one day not pass a
 * context to the rule at all.
 */

import sailpoint.object.Application;
import sailpoint.object.Attributes;
import sailpoint.object.Filter;
import sailpoint.object.Link;
import sailpoint.object.LinkExternalAttribute;
import sailpoint.object.ManagedAttribute;
import sailpoint.object.QueryOptions;
import sailpoint.rule.Account;
import sailpoint.rule.ManagedAttributeDetails;
import sailpoint.rule.RuleObjectFactory;
import sailpoint.tools.GeneralException;
import sailpoint.tools.Util;

class IdnRuleUtil {
    /**
     * Determines if an account currently exists on an application using the native identity.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @return True if the account exists, false otherwise.
     * @throws GeneralException wrapping underlying DB related errors
     */
    boolean accountExistsByNativeIdentity(String applicationName, String nativeIdentity)



    /**
     * Determines if an account currently exists on an application using the display name.
     *
     * @param applicationName The application name.
     * @param displayName The display name of the account.
     * @return True if the account exists, false otherwise.
     * @throws GeneralException wrapping underlying DB related errors
     */
    boolean accountExistsByDisplayName(String applicationName, String displayName)



    /**
     * Gets an account on an application using the native identity.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @return The Account representing the account or null if not found. If more than one found then the first
     *         Account in the exists is returned.
     * @throws GeneralException wrapping underlying DB related errors
     */
    Account getAccountByNativeIdentity(String applicationName, String nativeIdentity)



    /**
     * Gets an account on an application using the display name.
     *
     * @param applicationName The application name.
     * @param displayName The display name of the account.
     * @return The Account representing the account or null if not found. If more than one found then the first
     *         Account in the exists is returned.
     * @throws GeneralException wrapping underlying DB related errors
     */
    Account getAccountByDisplayName(String applicationName, String displayName)



    /**
    * Get the first account for the application and identityName and return the first accounts native Identity.
    * 
    * @param applicationName The name of the application 
    * @param identityName The name of the identity
    * @return The first link's nativeIdentity
    * 
    * @throws GeneralException wrapping underlying DB related errors
    */
    public String getFirstAccountNativeIdentity(String applicationName, String identityName)

    /**
     * Counts the number of accounts on an application.
     *
     * @param applicationName The application name.
     * @return The total number of accounts.
     * @throws GeneralException wrapping underlying DB related errors
     */
    int countAccounts(String applicationName)



    /**
     * Gets the value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
    Object getRawAccountAttribute(String applicationName, String nativeIdentity, String attribute)



    /**
     * Gets the value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
    Object getRawAccountAttribute(Account account, String attribute)

 
 
    /**
     * Gets the String value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
     String getAccountAttribute(String applicationName, String nativeIdentity, String attribute)

 
 
    /**
     * Gets the String value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
     String getAccountAttribute(Account account, String attribute)

 
 
    /**
     * Gets the boolean value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or false if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
    boolean getAccountAttributeBool(String applicationName, String nativeIdentity, String attribute)

 
 
    /**
     * Gets the boolean value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or false if the attribute does not exist.
     */
    boolean getAccountAttributeBool(Account account, String attribute)

 
 
    /**
     * Count the accounts that match the searchable attribute and value.
     *
     * @param sourceIds The list of Application ids that represent the sources of the data.
     * @param attributeName  The name of the searchable account attribute. The name parameter is required.
     * @param operation The operation to use when matching, it'll either be Operation.Equal OR Operation.StartsWith
     * @param values The list of values of that searchable attribute to match. The values parameter is required.
     *
     * @return The number of accounts that match the parameters provided.
     * @throws IllegalStateException wrapping underlying errors
     */
    int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values)



    /**
     * Get the identity name for the account matching the specified criteria.
     *
     * @param sourceIds The list of Application ids that represent the sources of the data
     * @param attributeName  The name of the searchable account attribute. The name parameter is required.
     * @param operation The operation to use when matching, it'll either be Operation.Equal OR Operation.StartsWith
     * @param values The list of values of that searchable attribute to match. The values parameter is required.
     *
     * @return The name of the Identity that matched the account that match the parameters provided.
     * @throws IllegalStateException wrapping underlying errors
     */
    String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)

 
 
    /**
     * Gets the int value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or zero if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors
     */
    int getAccountAttributeInt(String applicationName, String nativeIdentity, String attribute)

 
 
    /**
     * Gets the int value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or zero if the attribute does not exist.
     */
    int getAccountAttributeInt(Account account, String attribute) 



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
    String getManagedAttributeDescription(String sourceId, String name, String value, ManagedAttribute.Type type)



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
    public ManagedAttributeDetails getManagedAttributeDetails(String sourceId, String name, String value, ManagedAttribute.Type type)



   /**
    * Fetch an identity by the internal id.
    * 
    * @param id The id to use when fetching an identity object
    * @return A DTO representing the Identity, will throw if identity was not found
    */
    public sailpoint.rule.Identity getIdentityById(String id) ...



    /**
    * Find and return the users that match the incoming attributeName, operation, value ordered by
    * the specified sortAttribute
    *
    * @param attributeName The attribute that should be searched, must be searchable and non-nul
    * @param operation The operation to be used when searching and only allowed equals and starts wit
    * @param value The value that should match and must be non-null
    * @param sortAttribute The attribute that should be used while sorting. 
    * Default ordering will be on uid if not specified and this also must be searchable.
    * Sort will always be in ascending order
    * 
    * @return The List of users that match the passed in parameters. The max number returned values will be limited to 50.
    * 
    * @throws IllegalStateException when attribute provided is not searchable, 
    * when operation is not StartsWith or Equals, 
    * the sortAttribute is not searahable,
    * or if there are issues during the search
    * 
    * @see #EQUALS_FILTER
    * @see #STARTS_WITH_FILTER
    */
    public List<sailpoint.rule.Identity> findIdentitiesBySearchableIdentityAttribute(String attributeName, String operation, 
String value, String sortAttribute)



    /**
    * Count and return the number of users that match the incoming attributeName, operation and value.
    *
    * @param attributeName The attribute that should be searched, must be searchable and non-null.
    * @param operation The operation to be used when searching and only allowed equals and starts with
    * @param value The value that should match and must be non-null
    *
    * @return The number of identities that match the parameters
    *
    * @throws IllegalStateException when attribute provided is not searchable, 
    * when operation is not StartsWith or Equals, 
    * or if there are issues during the count operation
    *
    * @see #EQUALS_FILTE
    * @see #STARTS_WITH_FILTER
    */
    public int countIdentitiesBySearchableIdentityAttribute(String attributeName, String operation, String value)
}
```

## Example Usage

### Get an entitlement description

```java
//IdnRuleUtil is available in rules as "idn" variable, the same way we can currently use context
/*
  * In before provisioning rules (where this will likely be used), the Source that is being provisioned to 
  * is passed in via "application" variable. This can then be used to get sourceId using application.getId()
  * e.g. String sourceId = application.getId();
*/
String entitlementDescription = idn.getManagedAttributeDescription(sourceId, attributeName, attributeValue, Type.Entitlement);
```

### Check if an accountID is unique

```java
//IdnRuleUtil is available in rules as "idn" variable, the same way we can currently use context
/*
  * In Attribute Generator rules (where this will likely be used), the Source that is being provisioned to 
  * is passed in via "application" variable. This can then be used to get applicationName using application.getName()
  * e.g. String applicationName = application.getName();
*/
boolean exists = idn.accountExistsByNativeIdentity(applicationName, nativeIdentity);
```

### Get the name of the identity which matches a specific account search result

```java
//IdnRuleUtil is available in rules as "idn" variable, the same way we can currently use context
String identityName = idn.attrSearchGetIdentityName(sourceIdsAsList, attributeName, Operation.Equal, valuesToMatchAsList);
```

### Get multiple attributes from the first account retreived from a source

```java
//IdnRuleUtil is available in rules as "idn" variable, the same way we can currently use context
//Account objects are used with the import statement import sailpoint.rule.Account;
Account acct = idn.getFirstAccount("HR [source]", identity.getName());
Map acctAttrs = acct.getAttributes();
String firstName = acctAttrs.get("First Name");
String lastName = acctAttrs.get("Last Name");
```
