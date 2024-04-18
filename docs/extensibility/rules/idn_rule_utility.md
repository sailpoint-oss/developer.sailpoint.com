---
id: rule-utility
title: Using ISCRuleUtil as a Wrapper for Common Rule Operations
pagination_label: Identity Security Cloud Rule Utility
sidebar_label: Identity Security Cloud Rule Utility
sidebar_position: 4
sidebar_class_name: ruleUtility
keywords: ['rule', 'utility']
description: Using ISCRuleUtil as a Wrapper for Common Rule Operations
slug: /extensibility/rules/rule-utility
tags: ['Rules']
---

## Overview

Use this guide to learn how to configure searchable account attributes within Identity Security Cloud and then leverage them within the ISCRuleUtil wrapper class when searching accounts for attributes such as uniqueness checks. There are also methods in the ISCRuleUtil wrapper class you can use without the additional searchable attributes.

Search attributes allow you to search across accounts and sources to determine whether a specific attribute value is being used in your Identity Security Cloud environment.

There are three critical components involves with working with searchable attributes:

- [Configuration of search attributes within Identity Security Cloud](#configuration-of-search-attributes-within-identitynow)
  - Seed data for accounts already aggregated into the system.
  - Ensure attribute promotion happens for new/changed accounts that are aggregated.
- [Create rules that can be used to query the newly created attribute values](#create-rules-that-can-be-used-to-query-the-newly-created-attribute-values)
- [Implement rules within the Create Profile section of each source an account is being provisioned for](#implement-rules-within-the-create-profile-section-of-each-source-for-which-an-account-is-being-provisioned)

## Configuration of Search Attributes within Identity Security Cloud

When you are planning to implement search attributes, it is important that you consider the way new accounts' values will be generated and which attributes should be used as references.

You need the following information to create search attributes:

- IDs for sources that will be searched.

- Attribute name for each source that will be searched (such as mail, email, emailAddress).

- Unique name for the new attribute that will become common to all accounts in the account search configuration (e.g., newMail, newEmail, newEmailAddress).

- Display name for the new attribute configuration.

The following example shows how to create a new attribute with the [Search Attributes API](/docs/api/beta/create-search-attribute-config):

Your company has two sources. The first is Active Directory, and the second is Workday. When the system aggregates new accounts, the company wants to query Identity Security Cloud to see whether an email address already exists. If the email address is not in use, you can assign it to the new account. If it is in use, you can iterate on the email address value (add a 1 for example). You can then query Identity Security Cloud once more to see whether your incremented email address is in use. You can repeat this procedure until you have determined that an email address is unique.

The following information is necessary to create your search attribute:

- IDs for sources that will be searched:

  - Active Directory: `4028112837fe14c70177fe1955e9032c`
  - Workday: `4028812877fa18c72177fs195baa0341`

- Attribute name on each source that will be searched (such as mail, email, emailAddress):

  - Active Directory: `mail`
  - Workday: `emailAddress`

- Unique name for the new attribute that will become common to all accounts in the account search configuration (e.g., newMail, newEmail, newEmailAddress):

  - `promotedEmailAddress`

- Display name for the new attribute configuration:
  - `Promoted Email Address`

### Create the New Search Attribute in Identity Security Cloud

To call the APIs for search attributes, you need a personal access token and the name of your tenant to provide with the request. To retrieve a personal access token, see [Personal Access Tokens](../../api/authentication.md#personal-access-tokens). To get the name of your tenant, see [Finding Your Organization Tenant Name](../../api/getting-started.md#find-your-tenant-name)

Doing so creates an account search configuration for the two sources/attributes specified. All new/changed accounts that are aggregated have this new attribute(“promotedEmailAddress”) created in the account schema and the value of the attribute(“mail” or “emailAddress”), depending on the source, is promoted to that new attribute.

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

:::caution

Aggregation only processes new and/or changed accounts for many sources. If an account is unchanged, an aggregation will not seed the new attribute or its value for this account. Therefore, it is mandatory that a non-optimized aggregation be performed when an account search configuration is created/modified for each source involved in that configuration.

:::

If this source has already been aggregated before the account search configuration was created, a non-optimized aggregation must now be performed to seed the new attribute data for all existing accounts.

At this point, the configuration exists to promote attributes on any new/changed account that comes into Identity Security Cloud. These attributes and their associated values are stored for use in custom rules. Each account that exists on either of these sources will now have a new attribute called “promotedEmailAddress”. _The value of this attribute will be the value of `mail` if it is the Active Directory Source or `emailAddress` if it is the Workday source._

## Create Rules that Can Be Used to Query the Newly Created Attribute values

To access the promoted attribute data mentioned in the above section, you can use library methods that have been implemented to allow access to that data. There are two methods that have been implemented:

```java
/**
 * Count the accounts that match the searchable attribute and value.
 *
 * @param sourceIds The list of application IDs that represent the sources of the data.
 * @param attributeName  The name of the searchable account attribute. The name parameter is required.
 * @param operation The operation to use when matching, it will either be Operation.Equal OR Operation.StartsWith
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
 * @param sourceIds The list of application IDs that represent the sources of the data.
 * @param attributeName  The name of the searchable account attribute. The name parameter is required.
 * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.
 * @param values The value of that searchable attribute to math.  The value parameter is required.
 *
 * @return The name of the identity that matched the account that match the parameters provided.
 */
public String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)
```

Each of these utility library methods are loaded into the context that is available from within your custom rule. It can be accessed by appending the prefix “idn.” to the method call.

Example: You want to use the promoted attribute data to determine an email address's uniqueness before using it to provision a new account to one of the sources involved in the account search configuration. You can call these methods to determine that uniqueness.

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

     //In the event that the earlier call returns non-zero values, it is certain
     //that an email value is already in use.  If it is required to
     //know which identity owns the account with this value, you can call this method:
     //idn.attrSearchGetIdentityName(SOURCE_IDS, PROMOTED_ATTR_NAME, SEARCH_OP, SEARCH_VALUES));
```

:::info

Note that there are two method calls within the earlier example rule.

:::

Calling the _`idn.attrSearchCountAccounts()`_ method with both example source IDs causes a search of all accounts for a value “promotedEmailAddress=jc@sailpoint.com”. The search returns the count of accounts containing that attribute value pair.

If _`idn.attrSearchCountAccounts()`_ returns non-zero, it may be useful to determine which identity owns the account(s) containing that value. The _`idn.attrSearchGetIdentityName()`_ method will return that identity name.

## Implement Rules within the Create Profile Section of Each Source for an Acount is Being Provisioned For

Create Profile can be found at **Admin** > **Connections** > **Source** > `SourceName` > **Accounts** > **Create Profile**

You can invoke rules in different ways, but one of the most common implementations involves binding it to the Create Profile. This results in the rule's being used to generate/check the values used during new account provisioning.

When a `Generator` is selected for the `distinguishedName` attribute, a rule that invokes the provided library methods can be selected. This is an example of such a scenario:

Through a lifecycle state change, an account needs to be provisioned to an Active Directory source.

When the provisioning plan is created, the rule that generates the value for `distinguishedName` is called. The rule invokes the library methods mentioned earlier to determine the uniqueness of the attribute. In this case it may do the following:

Call _`idn.attrSearchCountAccounts()`_ to determine whether any other accounts are using first.last as a distinguishedName. If a count of 1 or more is returned, the call can be retried with first.last+1. The call is repeated until a zero is returned. At that point, the value is unique and can be used. The value is returned to the calling rule.

In some cases where a non zero value is returned, it may be useful to know which identity owns the account that value belongs to. To find out this information, call _`idn.attrSearchGetIdentityName()`_ to determine the identity in question.

## IdnRuleUtil.java Descriptors

:::caution

Both the normal SailPoint context passed into the Beanshell rule evaluation and the new IdnRuleUtil referenced here include an "Identity" class:

The SailPoint context Identity class is provided via `sailpoint.object.Identity` The IdnRuleUtil Identity class is provided via `sailpoint.rule.Identity` When referencing an Identity class, you must be explicit as to which Identity class you are using to avoid a namespace conflict. For example:

:::

```java
sailpoint.object.Identity identity = plan.getIdentity();
String sAMAccountName = identity.getAttribute("adUsername");

sailpoint.rule.Identity foundIdentity = idn.getIdentityById("uid");
String email = foundIdentity.getEmail();
```

The below section provides a full accounting of the methods available to rule writers using the IdnRuleUtil class:

```java
/**
 * Utility class containing methods customers can use within rules to perform common tasks.
 * IdnRuleUtil is available in rules as "idn" variable, e.g. "idn.countAccounts("someAppId")".
 * This utility class allows you to abstract out the use of SailPointContext in rules so you can one day not pass a
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
     * Determines whether an account currently exists on an application using the native identity.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param nativeIdentity The account's native identity.
     * @return True if the account exists, false otherwise.
     * @throws GeneralException wrapping underlying DB related errors.
     */
    boolean accountExistsByNativeIdentity(String applicationName, String nativeIdentity)



    /**
     * Determines if an account currently exists on an application using the display name.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param displayName The account's display name.
     * @return True if the account exists, false otherwise.
     * @throws GeneralException wrapping underlying DB related errors.
     */
    boolean accountExistsByDisplayName(String applicationName, String displayName)



    /**
     * Gets an account on an application using the native identity.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param nativeIdentity The account's native identity.
     * @return The account or null if not found. If more than one is found, the first
     *         account in the exists is returned.
     * @throws GeneralException wrapping underlying DB related errors
     */
    Account getAccountByNativeIdentity(String applicationName, String nativeIdentity)



    /**
     * Gets an account on an application using the display name.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param displayName The account's display name.
     * @return The account or null if not found. If more than one is found, the first
     *         account in the exists is returned.
     * @throws GeneralException wrapping underlying DB related errors.
     */
    Account getAccountByDisplayName(String applicationName, String displayName)



    /**
    * Get the first account for the application and identityName and return the first account's native identity.
    *
    * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
    * @param identityName The identity name.
    * @return The first link's nativeIdentity.
    *
    * @throws GeneralException wrapping underlying DB related errors.
    */
    public String getFirstAccountNativeIdentity(String applicationName, String identityName)

    /**
     * Counts the number of accounts on an application.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @return The total number of accounts.
     * @throws GeneralException wrapping underlying DB related errors.
     */
    int countAccounts(String applicationName)



    /**
     * Gets the value of an attribute from an account on an application.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param nativeIdentity The account's native identity.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors.
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
     * Gets the string value of an attribute from an account on an application.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param nativeIdentity The account's native identity.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors.
     */
     String getAccountAttribute(String applicationName, String nativeIdentity, String attribute)



    /**
     * Gets the string value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
     String getAccountAttribute(Account account, String attribute)



    /**
     * Gets the boolean value of an attribute from an account on an application.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param nativeIdentity The account's native identity.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or false if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors.
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
     * @param sourceIds The list of application IDs that represent the sources of the data.
     * @param attributeName  The name of the searchable account attribute. The name parameter is required.
     * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.
     * @param values The list of values of the searchable attribute to match. The values parameter is required.
     *
     * @return The number of accounts matching the parameters provided.
     * @throws IllegalStateException wrapping underlying errors
     */
    int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values)



    /**
     * Get the identity name for the account matching the specified criteria.
     *
     * @param sourceIds The list of application IDs that represent the sources of the data
     * @param attributeName  The name of the searchable account attribute. The name parameter is required.
     * @param operation The operation to use when matching. It will either be Operation.Equal OR Operation.StartsWith.
     * @param values The list of values of the searchable attribute to match. The values parameter is required.
     *
     * @return The name of the Identity that matched the account, matching the parameters provided.
     * @throws IllegalStateException wrapping underlying errors
     */
    String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values)



    /**
     * Gets the int value of an attribute from an account on an application.
     *
     * @param applicationName The application name, this is typically in the format of "appName [source]". Can be pulled via application.getName()
     * @param nativeIdentity The account's native identity.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or zero if the attribute does not exist.
     * @throws GeneralException wrapping underlying DB related errors.
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
     * Finds the ManagedAttribute description by provided sourceId/name/value/type.
     *
     * @param sourceId The sourceId used to query the ManagedAttribute.
     * @param name The name of the attribute used to query the ManagedAttribute.
     * @param value The value of the attribute used to query the ManagedAttribute.
     * @param type The type of attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).
     *             Defaults to Entitlement (if null provided).
     * @return ManagedAttribute's description if found or else null.
     * @throws GeneralException wrapping underlying DB related errors.
     */
    String getManagedAttributeDescription(String sourceId, String name, String value, ManagedAttribute.Type type)



    /**
    * Finds the ManagedAttribute by sourceId/name/value/type and returns its details in ManagedAttributeDetails model.
    *
    * @param sourceId The sourceId used to query the ManagedAttribute.
    * @param name The name of the attribute used to query the ManagedAttribute.
    * @param value The value of the attribute used to query the ManagedAttribute.
    * @param type The type of attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).
    * Defaults to Entitlement (if null provided).
    * @return ManagedAttributeDetails if found or else null.
    * @throws GeneralException wrapping underlying DB related errors.
    */
    public ManagedAttributeDetails getManagedAttributeDetails(String sourceId, String name, String value, ManagedAttribute.Type type)



   /**
    * Fetch an identity by the internal ID.
    *
    * @param id The ID to use when fetching an identity object
    * @return A DTO representing the Identity. It will throw if the identity is not found.
    */
    public sailpoint.rule.Identity getIdentityById(String id) ...



    /**
    * Find and return the users that match the incoming attributeName, operation, value ordered by
    * the specified sortAttribute.
    *
    * @param attributeName The attribute to be searched. It must be searchable and non-null.
    * @param operation The operation to be used when searching. It only allows Equals and StartsWith.
    * @param value The value to match. It must be non-null.
    * @param sortAttribute The attribute to be used when sorting.
    * Default ordering is on uid if it is not specified and this also must be searchable.
    * Sort is always be in ascending order.
    *
    * @return The list of users matching the passed in parameters. The max number of returned values is limited to 50.
    *
    * @throws IllegalStateException when attribute provided is not searchable,
    * when the operation is not StartsWith or Equals,
    * the sortAttribute is not searchable,
    * or if there are issues during the search.
    *
    * @see #EQUALS_FILTER
    * @see #STARTS_WITH_FILTER
    */
    public List<sailpoint.rule.Identity> findIdentitiesBySearchableIdentityAttribute(String attributeName, String operation,
String value, String sortAttribute)



    /**
    * Count and return the number of users matching the incoming attributeName, operation and value.
    *
    * @param attributeName The attribute to be searched. It must be searchable and non-null.
    * @param operation The operation to be used when searching. It only allows Equals and StartsWith.
    * @param value The value to match. It must be non-null.
    *
    * @return The number of identities matching the parameters.
    *
    * @throws IllegalStateException when attribute provided is not searchable,
    * when the operation is not StartsWith or Equals,
    * or if there are issues during the count operation.
    *
    * @see #EQUALS_FILTE
    * @see #STARTS_WITH_FILTER
    */
    public int countIdentitiesBySearchableIdentityAttribute(String attributeName, String operation, String value)
}

    /**
    * Use this method to call LDAP type connectors to look for
    * unique values. This method calls the connector with a specific search filter
    * based on the attributeName and value passed into the method.
    * Any returned value is considered non-unique.
    *
    * @param identityNameOrId The name or ID of the identity you are using
    * @param applicationNameOrId The name or ID of the source you are targeting
    * @param attributeName The name of the attribute you want to validate
    * @param attributeValue The value of the attribute you want to validate
    *
    * @return true if the value is unique AND false otherwise. If the application or identity can't be found, an
    * IllegalStateException will be thrown.
    *
    */
    public boolean isUniqueLDAPValue(String identityNameOrId, String applicationNameOrId, String attributeName, String attributeValue)
```

## Example Usage

### Get an Entitlement Description

```java
//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.
/*
  * In Before Provisioning rules (where this will likely be used), the source being provisioned to
  * is passed in by the "application" variable. You can use this to get sourceId using application.getId().
  * e.g. String sourceId = application.getId();
*/
String entitlementDescription = idn.getManagedAttributeDescription(sourceId, attributeName, attributeValue, Type.Entitlement);
```

### Check whether an accountID is Unique

```java
//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.
/*
  * In Attribute Generator rules (where this will likely be used), the source being provisioned to
  * is passed in by the "application" variable. You can use this to get applicationName using application.getName().
  * e.g. String applicationName = application.getName();
*/
boolean exists = idn.accountExistsByNativeIdentity(applicationName, nativeIdentity);
```

### Get the Name of the Identity Matching a Specific Account Search Result

```java
//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.
String identityName = idn.attrSearchGetIdentityName(sourceIdsAsList, attributeName, Operation.Equal, valuesToMatchAsList);
```

### Get Multiple Attributes from the First Account Retreived From a Source

```java
//IdnRuleUtil is available in rules as the "idn" variable, which you can use the same way you can currently use context.
//Account objects are used with the import statement import sailpoint.rule.Account;
Account acct = idn.getFirstAccount("HR [source]", identity.getName());
Map acctAttrs = acct.getAttributes();
String firstName = acctAttrs.get("First Name");
String lastName = acctAttrs.get("Last Name");
```
