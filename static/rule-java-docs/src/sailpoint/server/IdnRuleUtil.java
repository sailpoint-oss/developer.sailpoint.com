/*
 * Copyright (C) 2019-2022 SailPoint Technologies, Inc., All Rights Reserved.
 */

package sailpoint.server;

import com.google.common.annotations.VisibleForTesting;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import sailpoint.api.CisServiceFactory;
import sailpoint.api.ManagedAttributer;
import sailpoint.api.SailPointContext;
import sailpoint.api.interfaces.ConnectorServiceResolver;
import sailpoint.api.interfaces.LDAPConnectorServiceResolver;
import sailpoint.object.Application;
import sailpoint.object.Attributes;
import sailpoint.object.Filter;
import sailpoint.object.Identity;
import sailpoint.object.Link;
import sailpoint.object.LinkExternalAttribute;
import sailpoint.object.ManagedAttribute;
import sailpoint.object.ObjectAttribute;
import sailpoint.object.ObjectConfig;
import sailpoint.object.QueryOptions;
import sailpoint.object.SailPointObject;
import sailpoint.rule.Account;
import sailpoint.rule.IdentityRuleDTOAssembler;
import sailpoint.rule.ManagedAttributeDetails;
import sailpoint.rule.RuleObjectFactory;
import sailpoint.tools.GeneralException;
import sailpoint.tools.Util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Optional;
import java.util.TimeZone;

import static java.util.Objects.requireNonNull;
import static sailpoint.object.ManagedAttribute.DESCRIPTION_ATTRIBUTE;

/**
 * Utility class containing methods customers can use within a rules to perform common tasks. This utility
 * class allows us to abstract out the use of SailPointContext in rules so that we can one day not pass a
 * context to the rule at all.
 */
public class IdnRuleUtil {

    private static final Log _log = LogFactory.getLog(IdnRuleUtil.class);

    /**
     * Constant for the application name property query options filter.
     */
    private static final String FILTER_APP_NAME = "application.name";

    /**
     * Constant for the accounts reference to the identity name.
     */
    private static final String FILTER_IDENTITY_NAME = "identity.name";

    /**
     * Constant for the native identity property query options filter.
     */
    private static final String FILTER_LINK_NATIVE_ID = "nativeIdentity";

    /**
     * Constant for the display name property query options filter.
     */
    private static final String FILTER_LINK_DISPLAY_NAME = "displayName";

    private final SailPointContext _context;

    private final RuleObjectFactory _ruleObjectFactory;

    public static final String STARTS_WITH_FILTER = "StartsWith";

    public static final String EQUALS_FILTER = "Equals";

    IdnRuleUtil(SailPointContext context, RuleObjectFactory ruleObjectFactory) {
        _context = context;
        _ruleObjectFactory = ruleObjectFactory;
    }

    /**
     * Determines if an account currently exists on an application using the native identity.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @return True if the account exists, false otherwise.
     */
    public boolean accountExistsByNativeIdentity(String applicationName, String nativeIdentity) throws GeneralException {
        QueryOptions queryOptions = createLinkQueryOptions(applicationName, FILTER_LINK_NATIVE_ID, nativeIdentity);

        int count = _context.countObjects(Link.class, queryOptions);

        return count > 0;
    }

    /**
     * Determines if an account currently exists on an application using the display name.
     *
     * @param applicationName The application name.
     * @param displayName The display name of the account.
     * @return True if the account exists, false otherwise.
     */
    public boolean accountExistsByDisplayName(String applicationName, String displayName) throws GeneralException {
        QueryOptions queryOptions = createLinkQueryOptions(applicationName, FILTER_LINK_DISPLAY_NAME, displayName);

        int count = _context.countObjects(Link.class, queryOptions);

        return count > 0;
    }

    /**
     * Gets an account on an application using the native identity.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @return The Account representing the account or null if not found. If more than one found then the first
     *         Account in the exists is returned.
     */
    public Account getAccountByNativeIdentity(String applicationName, String nativeIdentity) throws GeneralException {
        Link link = getLink(applicationName, FILTER_LINK_NATIVE_ID, nativeIdentity);
        if (link == null) {
            return null;
        }

        return _ruleObjectFactory.createAccount(link);
    }

    /**
     * Gets an account on an application using the display name.
     *
     * @param applicationName The application name.
     * @param displayName The display name of the account.
     * @return The Account representing the account or null if not found. If more than one found then the first
     *         Account in the exists is returned.
     */
    public Account getAccountByDisplayName(String applicationName, String displayName) throws GeneralException {
        Link link = getLink(applicationName, FILTER_LINK_DISPLAY_NAME, displayName);
        if (link == null) {
            return null;
        }

        return _ruleObjectFactory.createAccount(link);
    }

    /**
     * Given the name of the application and the identity name return the list of
     * Account objects found for the identity.
     *
     * @param applicationName The name of the application
     * @param identityName The name of the identity
     * @return List of AccountObjects required
     *
     * @throws GeneralException wrapping underlying DB related errors
     */
    public List<Account> getAllAccounts(String applicationName, String identityName) throws GeneralException {

        if (identityName == null) {
            _log.error("Null identityName was passed into getAllAccounts, returning null.");
            return null;
        }
        if (applicationName == null) {
            _log.error("Null applicationName was passed into getAllAccounts, returning null.");
            return null;
        }

        QueryOptions queryOptions = createFindFirstLinkQueryOptions(applicationName, identityName);

        List<Link> links = _context.getObjects(Link.class, queryOptions);
        if (links.isEmpty()) {
            return null;
        }

        List<Account> accountList = new ArrayList<>();
        for (Link link: links) {
            if (link != null) {
                accountList.add(_ruleObjectFactory.createAccount(link));
            }
        }
        return accountList;
    }

    /**
     * Get the first account found for the application and identityName.
     * IF there is more then on e account the first account will be returned.
     *
     * @param applicationName The name of the application
     * @param identityName The name of the Identity
     * @return The account object
     *
     * @throws GeneralException wrapping underlying DB related errors
     */
    public Account getFirstAccount(String applicationName, String identityName) throws GeneralException {

        if (identityName == null) {
            _log.error("Null identityName was passed into getFirstAccount, returning null.");
            return null;
        }
        if (applicationName == null) {
            _log.error("Null applicationName was passed into getFirstAccount, returning null.");
            return null;
        }
        QueryOptions queryOptions = createFindFirstLinkQueryOptions(applicationName, identityName);

        List<Link> links = _context.getObjects(Link.class, queryOptions);
        if (links.isEmpty()) {
            return null;
        }

        if (links.size() > 1) {
            _log.warn("Found more than one link on application " + applicationName +
                    " for identity " + identityName);
        }

        // make sure to visit all of the links in the collection set to avoid open ResultSets
        Link firstLink = null;
        for (int i=0; i<links.size(); i++) {
            Link link = links.get(i);
            if (i == 0) {
                firstLink = link;
            }
        }

        return _ruleObjectFactory.createAccount(firstLink);
    }

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
            throws GeneralException {

        if (identityName == null) {
            _log.error("Null identityName was passed into getFirstAccountNativeIdentity, returning null.");
            return null;
        }
        if (applicationName == null) {
            _log.error("Null applicationName was passed into getFirstAccountNativeIdentity, returning null.");
            return null;
        }
        QueryOptions queryOptions = createFindFirstLinkQueryOptions(applicationName, identityName);

        Iterator<Object[]> rows = _context.search(Link.class, queryOptions, "nativeIdentity");
        if (rows == null ) {
            return null;
        }

        String nativeIdentity = null;
        int count = 0;
        while (rows.hasNext()) {
            Object[] row = rows.next();
            if (row != null) {
                count++;
                if (nativeIdentity == null) {
                    nativeIdentity = (String) row[0];
                }
            }
        }

        if (count > 1) {
            _log.warn("getFirstAccountNativeIdentity : Found more than one link on application " + applicationName +
                    " for identity " + identityName);
        }

        return nativeIdentity;
    }

    /**
     * Gets a Link object on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @return The Link representing the account or null if not found. If more than one found then the first
     *         Link in the exists is returned.
     */
    private Link getLink(String applicationName, String linkAttribute, String nativeIdentity) throws GeneralException {
        QueryOptions queryOptions = createLinkQueryOptions(applicationName, linkAttribute, nativeIdentity);

        List<Link> links = _context.getObjects(Link.class, queryOptions);
        if (links.isEmpty()) {
            return null;
        }

        if (links.size() > 1) {
            _log.warn("Found more than one link on application " + applicationName +
                    " with native identity " + nativeIdentity);
        }

        return links.get(0);
    }

    /**
     * Counts the number of accounts on an application.
     *
     * @param applicationName The application name.
     * @return The total number of accounts.
     */
    public int countAccounts(String applicationName) throws GeneralException {
        QueryOptions queryOptions = new QueryOptions();
        queryOptions.add(Filter.eq(FILTER_APP_NAME, applicationName));

        return _context.countObjects(Link.class, queryOptions);
    }

    /**
     * Gets the value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
    public Object getRawAccountAttribute(String applicationName, String nativeIdentity, String attribute)
            throws GeneralException {

        return getRawAccountAttribute(getAccountByNativeIdentity(applicationName, nativeIdentity), attribute);
    }

    /**
     * Gets the value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
    public Object getRawAccountAttribute(Account account, String attribute) {
        if (account == null || account.getAttributes() == null) {
            return null;
        }

        return account.getAttributes().get(attribute);
    }

    /**
     * Gets the String value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
    public String getAccountAttribute(String applicationName, String nativeIdentity, String attribute)
            throws GeneralException {

        return getAccountAttribute(getAccountByNativeIdentity(applicationName, nativeIdentity), attribute);
    }

    /**
     * Gets the String value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or null if the attribute does not exist.
     */
    public String getAccountAttribute(Account account, String attribute) {
        Object accountAttribute = getRawAccountAttribute(account, attribute);
        if (accountAttribute == null) {
            return null;
        }

        return accountAttribute.toString();
    }

    /**
     * Gets the boolean value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or false if the attribute does not exist.
     */
    public boolean getAccountAttributeBool(String applicationName, String nativeIdentity, String attribute)
            throws GeneralException {

        return getAccountAttributeBool(getAccountByNativeIdentity(applicationName, nativeIdentity), attribute);
    }

    /**
     * Gets the boolean value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or false if the attribute does not exist.
     */
    public boolean getAccountAttributeBool(Account account, String attribute) {
        Object accountAttribute = getRawAccountAttribute(account, attribute);
        if (accountAttribute == null) {
            return false;
        }

        return Util.otob(accountAttribute);
    }

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
    public int attrSearchCountAccounts(List<String> sourceIds, String attributeName, String operation, List<String> values) {
        String error = "IdnRuleUtil.attrSearchCountAccounts() rule library method produced an error.";
        checkOperation(operation);

        QueryOptions queryOptions = setupQueryOptions(sourceIds, attributeName, operation, values, false);
        try {
            return _context.countObjects(LinkExternalAttribute.class, queryOptions);
        } catch (Exception e) {
            throw new IllegalStateException(error + "An error occurred while querying the database.", e);
        }
    }

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
    public String attrSearchGetIdentityName(List<String> sourceIds, String attributeName, String operation, List<String> values) {
        String error = "IdnRuleUtil.attrSearchGetIdentityName() rule library method produced an error.";
        checkOperation(operation);

        QueryOptions queryOptions = setupQueryOptions(sourceIds, attributeName, operation, values, true);

        Iterator<Object[]> iterator = null;
        try {
            iterator = _context.search(LinkExternalAttribute.class, queryOptions, "Link.identity.name");
        } catch (Exception e) {
            throw new IllegalStateException(error + "An error occurred while querying the database.", e);
        }

        Object[] result = null;
        if (iterator.hasNext()) {
            result = iterator.next();
        }

        if (result == null) {
            _log.error(error+" No results from query criteria were returned.  Please correct query parameters.");
            return null;
        }
        //if there is still another result in the iterator, we got back too many results.
        if (iterator.hasNext()) {
            while (iterator.hasNext()) iterator.next(); // exhausts the iterator
            _log.error(error+" More than one result was returned.  Please narrow the query critera.");
            return null;
        }
        return (String)result[0];
    }

    /**
     * Fetch an identity by the internal id.
     *
     * @param id The id to use when fetching
     * @return A DTO representing the Identity, will throw if identity was not found.
     */
    public sailpoint.rule.Identity getIdentityById(String id) {
        Identity identity;
        try {
            identity = _context.getObjectById(Identity.class, id);
        } catch(GeneralException e) {
            throw new IllegalStateException("Unable to retrieve user with id '" + id +"'", e);
        }
        if (identity == null) {
            throw new IllegalStateException("Identity with id '"+id+"' was not found.");
        }
        return IdentityRuleDTOAssembler.assemble(identity);
    }

    /**
     * Find and return the users that match the incoming attributeName, operation, value ordered by
     * the specified sortAttribute
     *
     * @param attributeName The attribute that should be searched, must be searchable and non-null.
     * @param operation The operation to be used when searching and only allowed equals and starts with
     * @param value The value that should match and must be non-null
     * @param sortAttribute The attribute that should be used while sorting.
     *                      Default ordering will be on uid if not specified and this also must be searchable.
     *                      Sort will always be in ascending order
     *
     * @return The List of users that match the passed in parameters. The max number returned values will be
     * 50 refine search to reduce results.
     *
     * @throws IllegalStateException when attribute provided is not searchable,
     *    when operation is not StartsWith or Equals,
     *    the sortAttribute is not searahable,
     *    or if there are issues during the search
     *
     * @see #EQUALS_FILTER
     * @see #STARTS_WITH_FILTER
     */
    public List<sailpoint.rule.Identity> findIdentitiesBySearchableIdentityAttribute(String attributeName, String operation,
                                                                                     String value, String sortAttribute) {

        QueryOptions ops = createIdentityAttributeQueryOptions(attributeName, operation, value);
        ops.setResultLimit(50);

        if (sortAttribute != null) {
            ensureSearchable(sortAttribute, true);
            ops.addOrdering(sortAttribute, true);
        } else {
            ops.addOrdering("uid", true);
        }

        List<sailpoint.rule.Identity> users = new ArrayList<>();
        try {
            Iterator<Identity> identities = _context.search(Identity.class, ops);
            while (identities.hasNext()) {
                Identity identity = identities.next();
                users.add(IdentityRuleDTOAssembler.assemble(identity));
            }
        } catch(GeneralException e) {
            throw new IllegalStateException("Unable to search identities by identity attributes.", e);
        }
        return (users.size() > 0) ? users : null;
    }

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
     *    when operation is not StartsWith or Equals,
     *    or if there are issues during the count operation
     *
     * @see #EQUALS_FILTER
     * @see #STARTS_WITH_FILTER
     */
    public int countIdentitiesBySearchableIdentityAttribute(String attributeName, String operation, String value) {
        int count;
        try {
            QueryOptions ops = createIdentityAttributeQueryOptions(attributeName, operation, value);
            count = _context.countObjects(Identity.class, ops);
        } catch(GeneralException e) {
            throw new IllegalStateException("Unable to count identities by identity attributes.", e);
        }
        return count;
    }

    /**
     * Create the QueryOptions for the given parameters. Used for both searching and counting Identities.
     *
     * @param attributeName The attribute that should be searched, must be searchable and non-null.
     * @param operation The operation to be used when searching and only allowed equals and starts with
     * @param value The value that should match and must be non-null
     *
     * @return The QueryOptions of Identity search and counting:w
     *
     */
    protected QueryOptions createIdentityAttributeQueryOptions(String attributeName, String operation, String value) {
        ensureSearchable(attributeName,false);
        checkOperation(operation);
        if (value == null) {
            throw new IllegalStateException("Must specify a value to search against.");
        }

        QueryOptions ops = new QueryOptions();
        if (STARTS_WITH_FILTER.equals(operation)) {
            ops.add(Filter.like(attributeName, value, Filter.MatchMode.START));
        } else if (EQUALS_FILTER.equals(operation)) {
            ops.add(Filter.eq(attributeName, value));
        }
        return ops;
    }

    /**
     * Ensure the Identity attribute being searched non null and is marked searchable.
     *
     * @param attributeName The name of the attribute being searched
     * @throws IllegalStateException when the attribute is not found OR the attribute is not searchable
     */
    private void ensureSearchable(String attributeName, boolean forSorting) {
        if (attributeName == null) {
            throw new IllegalStateException("Must specify an attribute to search.");
        }

        try {
            ObjectConfig config = _context.getObject(ObjectConfig.class, ObjectConfig.IDENTITY);

            ObjectAttribute objectAttribute = config.getObjectAttribute(attributeName);
            if (objectAttribute == null) {
                throw new IllegalStateException("Unable to find definition of attribute named '"+attributeName+"'");
            }

            if (!objectAttribute.isSearchable()) {
                if (forSorting) {
                    throw new IllegalStateException("'" + attributeName + "', cannot be used for sorting because its not searchable.");
                } else {
                    throw new IllegalStateException("'" + attributeName + "', cannot be used for searching because its not searchable.");
                }
            }
        } catch(GeneralException e) {
            throw new IllegalStateException("Unable to load IdentityConfig to verify searchable attributes.",e);
        }
    }

    /**
     * Setup the common query options for both search attribute count accounts and search attribute get identity name.
     * @param sourceIds The list of source IDs.
     * @param attributeName The attribute name.
     * @param operation The operation value.
     * @param values The list of values.
     * @param distinct Whether or not to set distinct on the query.
     *
     * @return The QueryOptions object.
     */
    private QueryOptions setupQueryOptions(List<String> sourceIds, String attributeName, String operation, List<String> values, boolean distinct) {
        QueryOptions queryOptions = new QueryOptions();
        Filter joinFilter = Filter.join("objectId", "Link.id");
        queryOptions.add(joinFilter);
        queryOptions.add(Filter.eq("attributeName", attributeName));
        if (distinct) {
            queryOptions.setDistinct(true);
        }

        //build the or filter for each attribute name either startsWith or Equal
        List filters = new ArrayList<>();
        values.forEach(attributeValue -> {
            filters.add(STARTS_WITH_FILTER.equals(operation) ?
                    Filter.like("value", attributeValue, Filter.MatchMode.START) :
                    Filter.eq("value", attributeValue));
        });

        Filter orFilter = Filter.or(filters);
        queryOptions.add(orFilter);
        queryOptions.add(Filter.in("Link.application.id", sourceIds));
        return queryOptions;
    }

    /**
     * Verify that the supplied operation string matches either "Equals" or "StartsWith".
     * @param operation The supplied operation.
     */
    private void checkOperation(String operation) {
        if (!STARTS_WITH_FILTER.equals(operation) && !EQUALS_FILTER.equals(operation)) {
            throw new IllegalArgumentException("Supported operations include \"StartsWith\" and \"Equals\" only.");
        }
    }

    /**
     * Gets the int value of an attribute from an account on an application.
     *
     * @param applicationName The application name.
     * @param nativeIdentity The native identity of the account.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or zero if the attribute does not exist.
     */
    public int getAccountAttributeInt(String applicationName, String nativeIdentity, String attribute)
            throws GeneralException {

        return getAccountAttributeInt(getAccountByNativeIdentity(applicationName, nativeIdentity), attribute);
    }

    /**
     * Gets the int value of an attribute from an account on an application.
     *
     * @param account The account on the application.
     * @param attribute The name of the attribute to retrieve.
     * @return The attribute value or zero if the attribute does not exist.
     */
    public int getAccountAttributeInt(Account account, String attribute) {
        Object accountAttribute = getRawAccountAttribute(account, attribute);
        if (accountAttribute == null) {
            return 0;
        }

        return Util.otoi(accountAttribute);
    }

    /**
     * Creates the QueryOptions used to query for an account on an application.
     *
     * @param applicationName The application name.
     * @param linkAttribute The attribute to query on the Link, e.g. nativeIdentity.
     * @param attributeValue The value of the attribute used to query the account.
     * @return The query options.
     */
    @VisibleForTesting
    QueryOptions createLinkQueryOptions(String applicationName, String linkAttribute, String attributeValue) {
        QueryOptions queryOptions = new QueryOptions();
        queryOptions.add(Filter.eq(FILTER_APP_NAME, applicationName));
        queryOptions.add(Filter.eq(linkAttribute, attributeValue));

        return queryOptions;
    }

    /**
     * Create the QueryOptions used to query accounts on application and identity
     *
     * @param applicationName The application name
     * @param identityName The name of identity
     * @return The query options
     */
    QueryOptions createFindFirstLinkQueryOptions(String applicationName, String identityName) {
        QueryOptions queryOptions = new QueryOptions();
        queryOptions.add(Filter.eq(FILTER_APP_NAME, applicationName));
        queryOptions.add(Filter.eq( FILTER_IDENTITY_NAME, identityName));

        return queryOptions;
    }

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
    public String getManagedAttributeDescription(String sourceId, String name, String value, ManagedAttribute.Type type)
            throws GeneralException {
        return getManagedAttribute(sourceId, name, value, type)
                .map(this::getManagedAttributeDescription)
                .orElse(null);
    }

    /**
     * Finds ManagedAttribute by sourceId/name/value/type and returns its details in ManagedAttributeDetails model.
     *
     * @param sourceId The sourceId used to query the ManagedAttribute.
     * @param name The name of the attribute used to query the ManagedAttribute.
     * @param value The value of the attribute used to query the ManagedAttribute.
     * @param type The type of the attribute used to query the ManagedAttribute (see enum ManagedAttribute.Type).
     *             Defaults to Entitlement (if null provided).
     * @return ManagedAttributeDetails if found or else null.
     * @throws GeneralException wrapping underlying DB related errors
     */
    public ManagedAttributeDetails getManagedAttributeDetails(String sourceId, String name, String value, ManagedAttribute.Type type)
            throws GeneralException {
        return getManagedAttribute(sourceId, name, value, type)
                .map(ma -> new ManagedAttributeDetails()
                        .setDescription(getManagedAttributeDescription(ma))
                        .setAttributes(Util.isEmpty(ma.getAttributes())
                                ? Collections.emptyMap()
                                : new HashMap<>(ma.getAttributes()))
                        .setName(ma.getAttribute())
                        .setValue(ma.getValue())
                        .setType(ma.getType()))
                .orElse(null);
    }

    /**
     * Finds ManagedAttribute.
     * @return Optional with ManagedAttribute if found or empty Optional if not found.
     */
    private Optional<ManagedAttribute> getManagedAttribute(String sourceId, String name, String value, ManagedAttribute.Type type) throws GeneralException {
        requireNonNull(sourceId, "sourceId must not be null");

        boolean isPermission = ManagedAttribute.Type.Permission == type;
        List<ManagedAttribute> managedAttributes = ManagedAttributer.getAll(_context, sourceId, isPermission, name, value);
        return Util.isEmpty(managedAttributes)
                ? Optional.empty()
                : Optional.ofNullable(managedAttributes.get(0));
    }

    /**
     * Try to find description in following places in given order:
     *   1 ManagedAttribute.getAttribute("description")
     *   2 ManagedAttribute.getDescription(Locale.US)
     * Description is found if it is not null/blank/empty.
     *
     * @return found description or null.
     */
    private String getManagedAttributeDescription(ManagedAttribute ma) {
        return Optional
                .ofNullable(ma.getAttribute(DESCRIPTION_ATTRIBUTE))
                .map(Object::toString)
                .filter(StringUtils::isNotBlank)
                .orElseGet(() -> StringUtils.trimToNull(ma.getDescription(Locale.US)));
    }

    /**
     * Get a single Source string attribute from an Application using the applicationId
     *
     * @param sourceId The id of the source
     * @param attributeName The name/key of the attribute to return
     * @return The value if found in the attributes
     *
     * @throws GeneralException wrapping underlying DB related errors
     */
    public String getSourceAttributeBySourceId(String sourceId, String attributeName)
            throws GeneralException {

        QueryOptions queryOptions = createSourceQueryOptionsById(sourceId);
        return getSourceAttribute(queryOptions, attributeName);
    }

    /**
     * Get a single Source string attribute from an Application using the applicationId
     *
     * @param sourceName (internal name i.e. application.getName() vs displayName of the application
     * @param attributeName The name/key of the attribute to return
     * @return The value if found in the attributes
     *
     * @throws GeneralException wrapping underlying DB related errors
     */
    public String getSourceAttributeBySourceName(String sourceName, String attributeName)
            throws GeneralException {

        QueryOptions queryOptions = createSourceQueryOptionsByName(sourceName);
        return getSourceAttribute(queryOptions, attributeName);
    }

    /**
     * A method that can be used to call LDAP type connectors to look for
     * unique values.  The connector is called with a specific search filter
     * based on the attributeName and value that is passed into this method.
     * If there is a value returned the values is considered to be non-unique.
     *
     * @param identityNameOrId  The name or ID of the identity we are using
     * @param applicationNameOrId The name or ID of the source we are targeting
     * @param attributeName  The name of the attribute we want to validate
     * @param attributeValue The value of the attribute we want to validate
     *
     * @return true if the value is unique AND false otherwise. If the application or identity can't be found an
     * IllegalStateException will be thrown.
     *
     */
    public boolean isUniqueLDAPValue(String identityNameOrId,
                                     String applicationNameOrId,
                                     String attributeName,
                                     String attributeValue) {

        if (identityNameOrId == null) {
            _log.error("Null identityNameOrId was passed into isUniqueLDAPValue and is required.");
            throw new IllegalStateException("Identity name or id was not specified to isUniqueLDAPValue and is required.");
        }

        if (applicationNameOrId == null) {
            _log.error("Null applicationNameOrId was passed into isUniqueLDAPValue and is required.");
            throw new IllegalStateException("Application name or id was not specified to isUniqueLDAPValue and is required.");
        }

        Application source = (Application)getRequiredObject(Application.class, applicationNameOrId);
        Identity identity = (Identity)getRequiredObject(Identity.class, identityNameOrId);

        LDAPConnectorServiceResolver ldapService = getLDAPConnectorService();
        return ldapService.isUniqueAttributeValue(_context, identity, source, attributeName, attributeValue);
    }

    /**
     * Method is separate from main code to allow me to mock out the connector interaction as part of
     * an integration test.
     *
     * @return An instance of the LDAPConnectorServiceResolver which will be plugged into the system on the
     * mantis platform size.
     */
    @VisibleForTesting
    protected LDAPConnectorServiceResolver getLDAPConnectorService() {
        return CisServiceFactory.getService(LDAPConnectorServiceResolver.class);
    }

    /**
     * A method that will call getObject() on the connector for the Account type
     * and test if an account with the given accountId exists.  If the account exists the method
     * will return false, otherwise true.
     *
     * @param identityNameOrId  The name or ID of the identity we are using
     * @param applicationNameOrId The name or ID of the source we are targeting
     * @param accountId  The accountId we are trying to validate
     *
     * @return true if the account is unique, false otherwise
     */
    public boolean isUniqueAccountId(String identityNameOrId,
                                     String applicationNameOrId,
                                     String accountId) {

        if (identityNameOrId == null) {
            _log.error("Null identityNameOrId was passed into isUniqueAccountID, returning null.");
            throw new IllegalStateException("Identity name or id was not specified to isUniqueAccountID and is required.");
        }

        if (applicationNameOrId == null) {
            _log.error("Null applicationNameOrId was passed into isUniqueAccountID, returning null.");
            throw new IllegalStateException("Application name or id was not specified to isUniqueAccountID and is required.");
        }

        Application source = (Application)getRequiredObject(Application.class, applicationNameOrId);
        Identity identity = (Identity)getRequiredObject(Identity.class, identityNameOrId);

        ConnectorServiceResolver connectorService = getConnectorService();
        return connectorService.isUniqueAccountId(_context, identity, source, accountId);
    }

    /**
     * Method is separate from main code to allow me to mock out the connector interaction as part of
     * an integration test.
     *
     * @return An instance of the ConnectorServiceResolver which will be plugged into the system on the
     * mantis platform size.
     */
    @VisibleForTesting
    protected ConnectorServiceResolver getConnectorService() {
        return CisServiceFactory.getService(ConnectorServiceResolver.class);
    }

    /**
     * Build query options for source search by id
     * @param id The id of the source
     * @return the query options with appropriate filter
     */
    @VisibleForTesting
    QueryOptions createSourceQueryOptionsById(String id) {
        QueryOptions queryOptions = new QueryOptions();
        queryOptions.add(Filter.eq("id", id));
        return queryOptions;
    }

    /**
     * Build query options for source search by id
     * @param name The name of the source
     * @return the query options with appropriate filter
     */
    @VisibleForTesting
    QueryOptions createSourceQueryOptionsByName(String name) {
        QueryOptions queryOptions = new QueryOptions();
        queryOptions.add(Filter.eq("name", name));
        return queryOptions;
    }

    /**
     * Return a specific value from the attributes map of an Application given the QueryOptions to resolve the app
     * and the name/key of the value stored in the Map.
     *
     * @param queryOptions The QueryOptions to find the Application object in the db
     * @param attributeName The name/key of the attribute wanting to be resolved
     * @return The String value of the attribute OR null
     *
     * @throws GeneralException wrapping underlying DB related errors
     */
    private String getSourceAttribute(QueryOptions queryOptions, String attributeName) throws GeneralException {

        String attributeValue = null;
        Iterator<Object[]> rows = _context.search(Application.class, queryOptions, "attributes");
        while (rows.hasNext()) {
            Object[] row = rows.next();
            if (row != null) {
                Attributes<String,Object> attrs = (Attributes<String,Object>)row[0];
                if (attrs != null) {
                    attributeValue = attrs.getString(attributeName);
                }
            }
        }
        return attributeValue;
    }

    /**
     * Internal method that will get an object that is required and throw if not found.
     * Also eats GeneralException to prevent having to expose that to callers.
     * (even though there are other methods currently throwing it)
     *
     * @param cls The class of the object
     * @param identifier The name or id of the object
     * @return The object if found otherwise an IllegalException is thrown
     */
    private SailPointObject getRequiredObject(Class cls, String identifier) {
        SailPointObject object = null;
        try {
            object = _context.getObject(cls, identifier);
            if (object == null) {
                throw new IllegalStateException("Unable to find object of type '" + cls.getSimpleName() + "' and identifier '" + identifier + "'");
            }
        } catch(GeneralException e){
            throw new IllegalStateException("Error finding object of type '" + cls.getSimpleName() + "' and identifier '" + identifier + "'", e);
        }
        return object;
    }

    //
    // Utilities from Util.java in cis-core to prevent customers from calling it directly.
    //

    /**
     * Convert object to a string.
     *
     * @param object object to convert
     * @return String value for non null objects, null otherwise
     */
    public String otoa(Object object) {
        return Util.otoa(object);
    }

    /**
     * Convert object to a boolean.
     *
     * @param object object to convert
     * @return Returns true if object is found true value or the String value "true" (ignoring case).
     */
    public static boolean otob(Object object) {
        return Util.otob(object);
    }

    /**
     * Return a List with the given object. If the object is a List, it is
     * returned. If the object is a collection, a List with all of the elements
     * of the collection is returned. If the object is a non-collection, a new
     * List containing the given object is returned. If the object is null,
     * null is returned.
     *
     * @param object The object to return as a list.
     */
    public static List asList(Object object) {
        return Util.asList(object);
    }

    /**
     * This method performs a null-safe equality comparison between the two
     * given objects. If both objects are null, this returns false.
     *
     * @param o1 The first object to compare.
     * @param o2 The second object to compare.
     * @return True if both objects are non-null and equal.
     */
    public static boolean nullSafeEq(Object o1, Object o2) {
        return Util.nullSafeEq(o1, o2);
    }

    /**
     * This method performs a null-safe equality comparison between the two
     * given objects. This will return true if both objects are null and
     * nullsEq is true. Empty or "null" strings will be converted to null
     * before checking if emptyStringToNull is true.
     */
    public static boolean nullSafeEq(Object o1, Object o2, boolean nullsEq) {
        return Util.nullSafeEq(o1, o2, nullsEq, false);
    }

    /**
     * This method performs a null-safe equality comparison between the two strings.
     * This will return true if both objects are null and nullsEq is true.
     * Empty or "null" strings will be converted to null before checking if emptyStringToNull is true.
     */
    public static boolean nullSafeCaseInsensitiveEq(String o1, String o2) {
        return Util.nullSafeCaseInsensitiveEq(o1, o2);
    }

    /**
     * Return the compareTo() value for two objects that may be null. Nulls
     * are considered equal, and null is greater than non-null.
     */
    public static <T extends Comparable> int nullSafeCompareTo(T o1, T o2) {
        return Util.nullSafeCompareTo(o1, o2);
    }

    /**
     * Format a Date value as a String, using the JVMs default
     * timezone.
     *
     * @param src The source String
     * @param format The date format to apply
     * @return The formatted date in String format specified
     */
    static public String dateToString(Date src, String format) {
        return Util.dateToString(src, format, TimeZone.getDefault());
    }

    /**
     * Format a Date value as a String, using the JVMs default
     * timezone.
     *
     * @param src The source String
     * @param format The date format to apply
     * @param tz
     * @return The formatted date in String format specified
     */
    static public String dateToString(Date src, String format, TimeZone tz ) {
        return Util.dateToString(src,format,tz);
    }

}