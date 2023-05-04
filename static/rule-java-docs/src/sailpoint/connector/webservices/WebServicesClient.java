package sailpoint.connector.webservices;

import java.util.List;

/**
 * Definition of a Web Services Client interface available to Rule implementors.
 */
public interface WebServicesClient {

    /**
     * Configure connection parameters. See the ARG_* constants.
     * <pre>
     * public static final String ARG_URL = "url";
     * public static final String ARG_USERNAME = "username";
     * public static final String ARG_PASSWORD = "password";
     * public static final String ARG_TIMEOUT = "timeoutInSeconds";
     * </pre>
     * @param args map of the available configuration parameters, ARG_URL, ARG_USERNAME, ARG_PASSWORD, ARG_TIMEOUT
     * @throws java.lang.Exception The exception thrown by the client
     */
    void configure(java.util.Map args) throws java.lang.Exception;

    /**
     * Use this method to get a list of cookies associated with the request
     * @return List of cookies associated with the request
     */
     List getCookies();


    /**
     * Use this method to execute a GET call with specifying header values and allowed statuses.
     * @param headers Any headers needed to authenticate or specify a content-type
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Get request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executeGet(java.util.Map headers, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;


    /**
     * Use this method to execute a GET call with specifying the url, header values and allowed statuses.
     * @param url The url to execute the request against
     * @param headers Any headers needed to authenticate or specify a content-type
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Get request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executeGet(java.lang.String url, java.util.Map headers, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

    /**
     * Use this method to execute a POST call with specifying the url, payload, and allowed statuses.
     * @param url The url to execute the request against
     * @param payload The payload to send to the request endpoint
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Post request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executePost(java.lang.String url, java.lang.Object payload, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

    /**
     * Use this method to execute a POST call with specifying the url, payload, header values and allowed statuses.
     * @param url The url to execute the request against
     * @param payload The payload to send to the request endpoint
     * @param headers Any headers needed to authenticate or specify a content-type
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Post request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executePost(java.lang.String url, java.lang.Object payload, java.util.Map headers, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;


    /**
     * Use this method to execute a PUT call with specifying the url, payload, and allowed statuses.
     * @param url The url to execute the request against
     * @param payload The payload to send to the request endpoint
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Put request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executePut(java.lang.String url, java.lang.Object payload, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

    /**
     * Use this method to execute a PUT call with specifying the url, payload, header values and allowed statuses.
     * @param url The url to execute the request against
     * @param payload The payload to send to the request endpoint
     * @param headers Any headers needed to authenticate or specify a content-type
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Put request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executePut(java.lang.String url, java.lang.Object payload, java.util.Map headers, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

    /**
     * Use this method to execute a PATCH call with specifying the url, payload and allowed statuses.
     * @param url The url to execute the request against
     * @param payload The payload to send to the request endpoint
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Patch request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executePatch(java.lang.String url, java.lang.Object payload, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

    /**
     * Use this method to execute a PATCH call with specifying the url, payload, header values and allowed statuses.
     * @param url The url to execute the request against
     * @param payload The payload to send to the request endpoint
     * @param headers Any headers needed to authenticate or specify a content-type
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Patch request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executePatch(java.lang.String url, java.lang.Object payload, java.util.Map headers, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

    /**
     * Get the last executed request's response headers.
     * @return Map of response headers
     */
    java.util.Map<java.lang.String,java.lang.String> getResponseHeaders();


    /**
     * Use this method to execute a DELETE call specifying the url and allowed statuses.
     * @param url The url to execute the request against
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Delete request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executeDelete(java.lang.String url, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

    /**
     * Use this method to execute a DELETE call specifying the url, header values and allowed statuses.
     * @param url The url to execute the request against
     * @param headers Any headers needed to authenticate or specify a content-type
     * @param allowedStatuses Allowed response statuses, ie: 200, 201, 400, etc...
     * @return Delete request response object
     * @throws java.lang.Exception The exception thrown by the client
     */
    String executeDelete(java.lang.String url, java.util.Map headers, java.util.List<java.lang.String> allowedStatuses) throws java.lang.Exception;

}
