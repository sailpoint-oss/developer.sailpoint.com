package sailpoint.connector.webservices;

import java.util.Map;

public interface Endpoint {

    /**
     * Use this method to get the name of the rule to run after the webservice request completes.
     */
    void getAfterRule();

    /**
     * Use this method to get the name of the rule to run before the webservice request completes
     */
    void getBeforeRule();

    /**
     * Use this method to set the context url for the particular operation (create user, update user, account aggregation, etc...)
     * @param value the name of the context url
     */
    void setContextUrl(java.lang.String value);

    /**
     * Use this method to get the context url for the particular operation (create user, update user, account aggregation, etc...)
     */
    void getContextUrl();

    /**
     * Use this method to set the http method type (put, post, get, patch, delete) for the particular operation (create user, update user, account aggregation, etc...)
     * @param value the name of the http method type [get, post, put, patch, delete]
     */
    void setHttpMethodType(java.lang.String value);

    /**
     * Use this method to get the http method type (put, post, get, patch, delete) for the particular operation (create user, update user, account aggregation, etc...)
     */
    void getHttpMethodType();

    /**
     * Use this method to set the operation type (Account Aggregation, Group Aggregation, Create Account, etc...) for the particular operation record (create user, update user, account aggregation, etc...)
     * @param value the name of the operation type
     */
    void setOperationType(java.lang.String value);

    /**
     * Use this method to get the operation type (Account Aggregation, Group Aggregation, Create Account, etc...) for the particular operation record (create user, update user, account aggregation, etc...)
     */
    void getOperationType();

    /**
     * Use this method to set the root of the JSON response returned from the managed source for the particular operation (create user, update user, account aggregation, etc...)
     * <br>
     * Example root path for the json below: {@code $.results }
     * <pre>
     *     {
     *         "results": [
     *         {
     *             "id": "12345",
     *             "name": "John Doe"
     *             "email": "john.doe@sailpoint.com"
     *         },
     *         {
     *             "id": "54321",
     *             "name": "Jane Doe",
     *             "email": "jane.doe@sailpoint.com"
     *         }
     *         ]
     *     }
     * </pre>
     * @param value the name of the root of the JSON response results
     */
    void setRootPath(java.lang.String value);

    /**
     * Use this method to get the root of the JSON response returned from the managed source for the particular operation (create user, update user, account aggregation, etc...)
     * <br>
     * Example root path for the json below: {@code $.results }
     * <pre>
     *     {
     *         "results": [
     *         {
     *             "id": "12345",
     *             "name": "John Doe"
     *             "email": "john.doe@sailpoint.com"
     *         },
     *         {
     *             "id": "54321",
     *             "name": "Jane Doe",
     *             "email": "jane.doe@sailpoint.com"
     *         }
     *         ]
     *     }
     * </pre>
     */
    void getRootPath();

    /**
     * Use this method to set the complete url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *   Example full url for Airtable Get Users call
     *   ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg/Users
     * </pre>
     * @param value the full url as a string
     */
    void setFullUrl(java.lang.String value);

    /**
     * Use this method to get the complete url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *   Example full url for Airtable Get Users call
     *   ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg/Users
     * </pre>
     */
    void getFullUrl();

    /**
     * Use this method to set the base url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *     Example base url for Airtable Get Users call
     *     ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg
     * </pre>
     * @param value the base url as a string
     */
    void setBaseUrl(java.lang.String value);

    /**
     * Use this method to get the base url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *     Example base url for Airtable Get Users call
     *     ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg
     * </pre>
     */
    void getBaseUrl();

    /**
     * Use this method to get the sequence number for the particular operation (create user, update user, account aggregation, etc...)
     */
    void getSequenceNumberForEndpoint();

    /**
     * Use this method to get the unique operation name for the particular operation (create user, update user, account aggregation, etc...)
     */
    void getUniqueNameForEndPoint();

    /**
     * Use this method to set the response mapping for the response attributes returned from the JSON response of the managed source.
     * <br>
     * The key would be the attribute name from the source account schema and the value would be the JSON path after the root path.
     * <pre>
     {
     *         "results": [
     *         {
     *          "fields": {
     *             "id": "12345",
     *             "name": "John Doe"
     *             "email": "john.doe@sailpoint.com"
     *          }
     *         },
     *         {
     *          "fields": {
     *             "id": "54321",
     *             "name": "Jane Doe",
     *             "email": "jane.doe@sailpoint.com"
     *          }
     *         }
     *         ]
     *     }
     * </pre>
     * Root path: $.results
     * <br>
     * Response Map
     * <pre>
     *     {
     *         "id": "fields.id",
     *         "name": "fields.name",
     *         "email": "fields.email"
     *     }
     * </pre>
     *
     * @param value the mapping of account schema attribute to the JSON path value in the JSON response
     */
    void setResMappingObj(Map value);


    /**
     * Use this method to get the response mapping for the response attributes returned from the JSON response of the managed source.
     * <br>
     * The key would be the attribute name from the source account schema and the value would be the JSON path after the root path.
     * <pre>
     {
     *         "results": [
     *         {
     *          "fields": {
     *             "id": "12345",
     *             "name": "John Doe"
     *             "email": "john.doe@sailpoint.com"
     *          }
     *         },
     *         {
     *          "fields": {
     *             "id": "54321",
     *             "name": "Jane Doe",
     *             "email": "jane.doe@sailpoint.com"
     *          }
     *         }
     *         ]
     *     }
     * </pre>
     * Root path: $.results
     * <br>
     * Response Map
     * <pre>
     *     {
     *         "id": "fields.id",
     *         "name": "fields.name",
     *         "email": "fields.email"
     *     }
     * </pre>
     *
     */
    void getResMappingObj();

    /**
     * Use this method to set the header values for the request
     * <pre>
     *     //Set Header Content-Type
     *     Map headerMap = requestEndPoint.getHeader();
     *     headerMap.put("Content-Type", "application/json");
     *     requestEndPoint.setHeader(headerMap);
     * </pre>
     * @param value the map of http headers to send with the request
     */
    void setHeader(Map value);

    /**
     * Use this method to get the header values for the request
     * <pre>
     *     //Set Header Content-Type
     *     Map headerMap = requestEndPoint.getHeader();
     *     headerMap.put("Content-Type", "application/json");
     *     requestEndPoint.setHeader(headerMap);
     * </pre>
     */
    void getHeader();


    /**
     * Use this method to add a header value to the existing http header map for the request
     * <pre>
     *     requestEndPoint.addHeader("Authorization", "Bearer " + accessToken);
     * </pre>
     * @param entry the key for the header
     * @param value the value for the header
     */
    void addHeader(java.lang.String entry, java.lang.String value);

    /**
     * Use this method to set the http payload information as a map.
     * <br>
     * The map must contain three keys {@code  bodyFormat, bodyFormData, jsonBody}. The bodyFormat value can be {@code raw}
     * <br>
     * which means the user has provided values as a raw JSON string, otherwise the user has provided the value in the key,value format that must be converted into JSON
     * @param value the http payload map
     */
    void setBody(Map value);

    /**
     * Use this method to get the http payload information as a map.
     * <br>
     * The map contains three keys {@code  bodyFormat, bodyFormData, jsonBody}.
     */
    void getBody();

    /**
     * Use this method to set the value of successful response codes as a list (200,201,299). This will be respected by the connector.
     * <br>
     * If any other response codes are returned this would be considered as a request failure.
     * @param value the list of successful response code values
     */
    void setResponseCode(java.util.List value);

    /**
     * Use this method to get the value of successful response codes as a list (200,201,299).
     */
    void getResponseCode();

    /**
     * Use this method to get all the available attributes
     * @return
     */
    sailpoint.object.Attributes getAttributes();


    /**
     * Use this method to get the value of an attribute
     * @param name the name of the attribute
     * @return
     */
    Object getAttribute(java.lang.String name);
}
