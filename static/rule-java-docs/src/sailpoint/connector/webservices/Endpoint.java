package sailpoint.connector.webservices;

import sailpoint.object.Attributes;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Endpoint {
    private String _contextUrl;
    private String _httpMethodType;
    private String _operationType;
    private String _rootPath;
    private String _fullUrl;
    private String _baseUrl;
    private int _sequenceNumberForEndpoint;
    private String _uniqueNameForEndPoint;
    private Map _resMappingObj;
    private Map _header;
    private Map _body;
    private List _responseCode;
    private Attributes<String, Object> _attributes;

    /**
     * Use this method to get the name of the rule to run after the webservice request completes.
     */
    public String getAfterRule() {
        return "afterRule";
    }

    /**
     * Use this method to get the name of the rule to run before the webservice request completes
     */
    public String getBeforeRule() {
        return "beforeRule";
    }

    /**
     * Use this method to set the context url for the particular operation (create user, update user, account aggregation, etc...)
     * @param value the name of the context url
     */
    public void setContextUrl(java.lang.String value) {
        this._contextUrl = value;
    }

    /**
     * Use this method to get the context url for the particular operation (create user, update user, account aggregation, etc...)
     */
    public String getContextUrl() {
        return this._contextUrl;
    }

    /**
     * Use this method to set the http method type (put, post, get, patch, delete) for the particular operation (create user, update user, account aggregation, etc...)
     * @param value the name of the http method type [get, post, put, patch, delete]
     */
    public void setHttpMethodType(java.lang.String value) {
        this._httpMethodType = value;
    }

    /**
     * Use this method to get the http method type (put, post, get, patch, delete) for the particular operation (create user, update user, account aggregation, etc...)
     */
    public String getHttpMethodType() {
        return this._httpMethodType;
    }

    /**
     * Use this method to set the operation type (Account Aggregation, Group Aggregation, Create Account, etc...) for the particular operation record (create user, update user, account aggregation, etc...)
     * @param value the name of the operation type
     */
    public void setOperationType(java.lang.String value) {
        this._operationType = value;
    }

    /**
     * Use this method to get the operation type (Account Aggregation, Group Aggregation, Create Account, etc...) for the particular operation record (create user, update user, account aggregation, etc...)
     */
    public String getOperationType() {
        return this._operationType;
    }

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
    public void setRootPath(java.lang.String value) {
        this._rootPath = value;
    }

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
    public String getRootPath() {
        return this._rootPath;
    }

    /**
     * Use this method to set the complete url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *   Example full url for Airtable Get Users call
     *   ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg/Users
     * </pre>
     * @param value the full url as a string
     */
    public void setFullUrl(java.lang.String value) {
        this._fullUrl = value;
    }

    /**
     * Use this method to get the complete url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *   Example full url for Airtable Get Users call
     *   ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg/Users
     * </pre>
     */
    public String getFullUrl() {
        return this._fullUrl;
    }

    /**
     * Use this method to set the base url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *     Example base url for Airtable Get Users call
     *     ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg
     * </pre>
     * @param value the base url as a string
     */
    public void setBaseUrl(java.lang.String value){
        this._baseUrl = value;
    }

    /**
     * Use this method to get the base url (endpoint) of the operation that is to be performed for the particular operation
     * <pre>
     *     Example base url for Airtable Get Users call
     *     ex: https://api.airtable.com/v0/appe0bVnLjyV97hyg
     * </pre>
     */
    public String getBaseUrl() {
        return this._baseUrl;
    }

    /**
     * Use this method to get the sequence number for the particular operation (create user, update user, account aggregation, etc...)
     */
    public int getSequenceNumberForEndpoint() {
        return this._sequenceNumberForEndpoint;
    }

    /**
     * Use this method to get the unique operation name for the particular operation (create user, update user, account aggregation, etc...)
     */
    public String getUniqueNameForEndPoint() {
        return this._uniqueNameForEndPoint;
    }

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
    public void setResMappingObj(Map value) {
        this._resMappingObj = value;
    }


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
    public Map getResMappingObj() {
        return this._resMappingObj;
    }

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
    public void setHeader(Map value) {
        this._header = value;
    }

    /**
     * Use this method to get the header values for the request
     * <pre>
     *     //Set Header Content-Type
     *     Map headerMap = requestEndPoint.getHeader();
     *     headerMap.put("Content-Type", "application/json");
     *     requestEndPoint.setHeader(headerMap);
     * </pre>
     */
    public Map getHeader() {
        return this._header;
    }


    /**
     * Use this method to add a header value to the existing http header map for the request
     * <pre>
     *     requestEndPoint.addHeader("Authorization", "Bearer " + accessToken);
     * </pre>
     * @param entry the key for the header
     * @param value the value for the header
     */
    public void addHeader(java.lang.String entry, java.lang.String value) {
        if (this._header == null) {
            this._header = new HashMap();
        }

        this._header.put(entry, value);
    }

    /**
     * Use this method to set the http payload information as a map.
     * <br>
     * The map must contain three keys {@code  bodyFormat, bodyFormData, jsonBody}. The bodyFormat value can be {@code raw}
     * <br>
     * which means the user has provided values as a raw JSON string, otherwise the user has provided the value in the key,value format that must be converted into JSON
     * @param value the http payload map
     */
    public void setBody(Map value) {
        this._body = value;
    }

    /**
     * Use this method to get the http payload information as a map.
     * <br>
     * The map contains three keys {@code  bodyFormat, bodyFormData, jsonBody}.
     */
    public Map getBody() {
        return this._body;
    }

    /**
     * Use this method to set the value of successful response codes as a list (200,201,299). This will be respected by the connector.
     * <br>
     * If any other response codes are returned this would be considered as a request failure.
     * @param value the list of successful response code values
     */
    public void setResponseCode(java.util.List value) {
        this._responseCode = value;
    }

    /**
     * Use this method to get the value of successful response codes as a list (200,201,299).
     */
    public List getResponseCode() {
        return this._responseCode;
    }

    /**
     * Use this method to get all the available attributes
     * @return
     */
    public Attributes getAttributes() {
        return this._attributes;
    }


    /**
     * Use this method to get the value of an attribute
     * @param name the name of the attribute
     * @return
     */
    public Object getAttribute(java.lang.String name) {
        return this._attributes != null ? this._attributes.get(name) : null;
    }
}
