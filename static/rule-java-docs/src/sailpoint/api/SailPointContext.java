package sailpoint.api;

import sailpoint.object.Filter;
import sailpoint.object.QueryOptions;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 * A context object class used to query for data
 * This class is for old rules using SailPointContext. Any new rules submitted using the following methods will be blocked and
 * asked to migrate to the replacement methods available in IDNRuleUtil
 *
 * These methods allow you to pass a class name to query on. The two classes supported are `Identity.class` and `Link.class`
 */
public class SailPointContext {

    /**
     * Query the context to get the number of objects for the given query
     * @param className Identity or Link class
     * @param queryOptions options to filter results
     * @return the number of objects found
     */
    public int countObjects(Class className, QueryOptions queryOptions) {
        return 5;
    }

    /**
     * Query the context to get a list of objects for the given query
     * @param className Identity or Link class
     * @param queryOptions options to filter results
     * @return the list of objects found
     */
    public <T> List<T> getObjects(Class className, QueryOptions queryOptions) {
        return new ArrayList<T>();
    }

    /**
     * Query the context to get a list of results only including the attributes provided that match the given query
     * @param className Identity or Link class
     * @param queryOptions options to filter results
     * @param attributes the attributes to return
     * @return
     */
    public Iterator<Object[]> search(Class className, QueryOptions queryOptions, String attributes) {
        return null;
    }

    /**
     * Query the context to get a list of results that match the given query
     * @param className Identity or Link class
     * @param queryOptions options to filter results
     * @return the results of the query
     */
    public Iterator<Object[]> search(Class className, QueryOptions queryOptions) {
        return null;
    }

    /**
     * Query the context to get an object by name
     * @param className Identity or Link class
     * @param name the name of the object to fetch
     * @return the result of the query
     */
    public <T> Object getObjectByName(Class className, String name) {
        return new Object();
    }

    /**
     * Query the context to get a unique object with filters
     * @param className Identity or Link class
     * @param filters options to filter by
     * @return the result of the query
     */
    public <T> Object getUniqueObject(Class className, Filter... filters) {
        return new Object();
    }
}
