---
id: shared-signals-framework--ssf
title: Shared_Signals_Framework__SSF
pagination_label: Shared_Signals_Framework__SSF
sidebar_label: Shared_Signals_Framework__SSF
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Shared_Signals_Framework__SSF', 'Shared_Signals_Framework__SSF'] 
slug: /tools/sdk/python/shared-signals-framework-ssf/methods/shared-signals-framework--ssf
tags: ['SDK', 'Software Development Kit', 'Shared_Signals_Framework__SSF', 'Shared_Signals_Framework__SSF']
---

# sailpoint.shared_signals_framework_ssf.SharedSignalsFrameworkSSFApi
  The SSF Transmitter Service is a security event notification system that monitors identity attribute changes
and automatically triggers session revocation events when specific lifecycle conditions are met.

Use this API to implement transmitter functionality so administrators can discover the transmitter and manage streams.
Transmitters send identity data and events from Identity Security Cloud to external receivers over the Secure Sync Framework (SSF).
The SSF configuration and JWKS endpoints support discovery and verification; the stream management endpoints support creating, updating, and managing streams and verifying receivers.
In Identity Security Cloud, administrators can use the &quot;Connections&quot; &gt; &quot;Shared Signals&quot; area to view and manage transmitters and their streams.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-stream-v1**](#create-stream-v1) | **POST** `/ssf/v1/streams` | Create stream
[**delete-stream-v1**](#delete-stream-v1) | **DELETE** `/ssf/v1/streams` | Delete stream
[**get-jwks-data-v1**](#get-jwks-data-v1) | **GET** `/ssf/v1/jwks` | Get JWKS
[**get-ssf-configuration-v1**](#get-ssf-configuration-v1) | **GET** `/.well-known/v1/ssf-configuration` | Get SSF configuration
[**get-stream-status-v1**](#get-stream-status-v1) | **GET** `/ssf/v1/streams/status` | Get stream status
[**get-stream-v1**](#get-stream-v1) | **GET** `/ssf/v1/streams` | Get stream(s)
[**send-stream-verification-v1**](#send-stream-verification-v1) | **POST** `/ssf/v1/streams/verify` | Verify stream
[**set-stream-configuration-v1**](#set-stream-configuration-v1) | **PUT** `/ssf/v1/streams` | Replace stream configuration
[**update-stream-configuration-v1**](#update-stream-configuration-v1) | **PATCH** `/ssf/v1/streams` | Update stream configuration
[**update-stream-status-v1**](#update-stream-status-v1) | **POST** `/ssf/v1/streams/status` | Update stream status


## create-stream-v1
Create stream
An SSF stream is associated with the client ID of the OAuth 2.0 access token used to create the stream.
One SSF stream is allowed for each client ID.

You can create a maximum of 10 SSF stream configurations for one org.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-stream-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | createstreamrequest | [**Createstreamrequest**](../models/createstreamrequest) | True  | 

### Return type
[**Streamconfigresponse**](../models/streamconfigresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Stream created. | Streamconfigresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.createstreamrequest import Createstreamrequest
from sailpoint.shared_signals_framework_ssf.models.streamconfigresponse import Streamconfigresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    createstreamrequest = '''{"delivery":{"method":"urn:ietf:rfc:8935","endpoint_url":"https://receiver.example.com/ssf/events"},"events_requested":["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],"description":"Production event stream for session revocation notifications"}''' # Createstreamrequest | 

    try:
        # Create stream
        new_createstreamrequest = Createstreamrequest.from_json(createstreamrequest)
        results = SharedSignalsFrameworkSSFApi(api_client).create_stream_v1(createstreamrequest=new_createstreamrequest)
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).create_stream_v1(new_createstreamrequest)
        print("The response of SharedSignalsFrameworkSSFApi->create_stream_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->create_stream_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-stream-v1
Delete stream
Deletes a stream by its ID. There is no request body; the stream is identified by the required
query parameter `stream_id`. On success the response has no body (204 No Content).

The associated stream with the client ID (through the request OAuth 2.0 access token) is deleted.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-stream-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | stream_id | **str** | True  | ID of the stream to delete. Required; omitted or empty returns 400.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    stream_id = '550e8400-e29b-41d4-a716-446655440000' # str | ID of the stream to delete. Required; omitted or empty returns 400. # str | ID of the stream to delete. Required; omitted or empty returns 400.

    try:
        # Delete stream
        
        SharedSignalsFrameworkSSFApi(api_client).delete_stream_v1(stream_id=stream_id)
        # Below is a request that includes all optional parameters
        # SharedSignalsFrameworkSSFApi(api_client).delete_stream_v1(stream_id)
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->delete_stream_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-jwks-data-v1
Get JWKS
Returns the transmitter's JSON Web Key Set (JWKS) for verifying signed delivery requests.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-jwks-data-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Jwks**](../models/jwks)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | JSON Web Key Set (RFC 7517) containing the transmitter&#39;s public keys. | Jwks |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.jwks import Jwks
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get JWKS
        
        results = SharedSignalsFrameworkSSFApi(api_client).get_jwks_data_v1()
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).get_jwks_data_v1()
        print("The response of SharedSignalsFrameworkSSFApi->get_jwks_data_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->get_jwks_data_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-ssf-configuration-v1
Get SSF configuration
Returns the SSF transmitter discovery metadata (well-known configuration).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-ssf-configuration-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Transmittermetadata**](../models/transmittermetadata)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | SSF transmitter configuration (issuer, jwks_uri, endpoints, authorization_schemes). | Transmittermetadata |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.transmittermetadata import Transmittermetadata
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get SSF configuration
        
        results = SharedSignalsFrameworkSSFApi(api_client).get_ssf_configuration_v1()
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).get_ssf_configuration_v1()
        print("The response of SharedSignalsFrameworkSSFApi->get_ssf_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->get_ssf_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-stream-status-v1
Get stream status
Returns the status (enabled, paused, disabled) and optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token. The stream_id query parameter is required.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-stream-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | stream_id | **str** | True  | ID of the stream whose status to retrieve.

### Return type
[**Streamstatusresponse**](../models/streamstatusresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Stream status (enabled, paused, or disabled; reason may be set when status was updated). | Streamstatusresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.streamstatusresponse import Streamstatusresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    stream_id = '550e8400-e29b-41d4-a716-446655440000' # str | ID of the stream whose status to retrieve. # str | ID of the stream whose status to retrieve.

    try:
        # Get stream status
        
        results = SharedSignalsFrameworkSSFApi(api_client).get_stream_status_v1(stream_id=stream_id)
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).get_stream_status_v1(stream_id)
        print("The response of SharedSignalsFrameworkSSFApi->get_stream_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->get_stream_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-stream-v1
Get stream(s)
Retrieves either a list of all SSF stream configurations or the individual configuration if specified by ID.

As stream configurations are tied to a client ID, you can only view the stream associated with the client ID
of the request OAuth 2.0 access token.

Query parameter `aud` (co filter) can be used to filter by audience.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-stream-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | stream_id | **str** |   (optional) | If provided, returns that stream; otherwise returns list of all streams.

### Return type
[**GetStreamV1200Response**](../models/get-stream-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Single stream (when stream_id is provided) or list of streams (when stream_id is omitted). | GetStreamV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.get_stream_v1200_response import GetStreamV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    stream_id = '550e8400-e29b-41d4-a716-446655440000' # str | If provided, returns that stream; otherwise returns list of all streams. (optional) # str | If provided, returns that stream; otherwise returns list of all streams. (optional)

    try:
        # Get stream(s)
        
        results = SharedSignalsFrameworkSSFApi(api_client).get_stream_v1()
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).get_stream_v1(stream_id)
        print("The response of SharedSignalsFrameworkSSFApi->get_stream_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->get_stream_v1: %s\n" % e)
```



[[Back to top]](#) 

## send-stream-verification-v1
Verify stream
Verifies an SSF stream by publishing a verification event requested by a security events provider.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-stream-verification-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | verificationrequest | [**Verificationrequest**](../models/verificationrequest) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.verificationrequest import Verificationrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    verificationrequest = '''{"stream_id":"550e8400-e29b-41d4-a716-446655440000","state":"verification-challenge-state-123"}''' # Verificationrequest | 

    try:
        # Verify stream
        new_verificationrequest = Verificationrequest.from_json(verificationrequest)
        SharedSignalsFrameworkSSFApi(api_client).send_stream_verification_v1(verificationrequest=new_verificationrequest)
        # Below is a request that includes all optional parameters
        # SharedSignalsFrameworkSSFApi(api_client).send_stream_verification_v1(new_verificationrequest)
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->send_stream_verification_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-stream-configuration-v1
Replace stream configuration
Replaces a stream's configuration (PUT). stream_id and delivery are required; full receiver-supplied properties.

The associated stream with the client ID (through the request OAuth 2.0 access token) is replaced.


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-stream-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | replacestreamconfigurationrequest | [**Replacestreamconfigurationrequest**](../models/replacestreamconfigurationrequest) | True  | 

### Return type
[**Updatestreamconfigresponse**](../models/updatestreamconfigresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Replaced stream configuration (same JSON shape as PATCH/GET single stream). | Updatestreamconfigresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.replacestreamconfigurationrequest import Replacestreamconfigurationrequest
from sailpoint.shared_signals_framework_ssf.models.updatestreamconfigresponse import Updatestreamconfigresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    replacestreamconfigurationrequest = '''{"stream_id":"550e8400-e29b-41d4-a716-446655440000","delivery":{"method":"urn:ietf:rfc:8935","endpoint_url":"https://receiver.example.com/ssf/events"},"events_requested":["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],"description":"Replaced stream configuration for production event delivery"}''' # Replacestreamconfigurationrequest | 

    try:
        # Replace stream configuration
        new_replacestreamconfigurationrequest = Replacestreamconfigurationrequest.from_json(replacestreamconfigurationrequest)
        results = SharedSignalsFrameworkSSFApi(api_client).set_stream_configuration_v1(replacestreamconfigurationrequest=new_replacestreamconfigurationrequest)
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).set_stream_configuration_v1(new_replacestreamconfigurationrequest)
        print("The response of SharedSignalsFrameworkSSFApi->set_stream_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->set_stream_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-stream-configuration-v1
Update stream configuration
Partially updates a stream's configuration (PATCH). Only provided fields are updated.

The associated stream with the client ID (through the request OAuth 2.0 access token) is updated.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-stream-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | updatestreamconfigurationrequest | [**Updatestreamconfigurationrequest**](../models/updatestreamconfigurationrequest) | True  | 

### Return type
[**Updatestreamconfigresponse**](../models/updatestreamconfigresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated stream configuration (same JSON shape as GET single stream, plus updatedAt). | Updatestreamconfigresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.updatestreamconfigresponse import Updatestreamconfigresponse
from sailpoint.shared_signals_framework_ssf.models.updatestreamconfigurationrequest import Updatestreamconfigurationrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    updatestreamconfigurationrequest = '''{"stream_id":"550e8400-e29b-41d4-a716-446655440000","description":"Updated production event stream configuration"}''' # Updatestreamconfigurationrequest | 

    try:
        # Update stream configuration
        new_updatestreamconfigurationrequest = Updatestreamconfigurationrequest.from_json(updatestreamconfigurationrequest)
        results = SharedSignalsFrameworkSSFApi(api_client).update_stream_configuration_v1(updatestreamconfigurationrequest=new_updatestreamconfigurationrequest)
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).update_stream_configuration_v1(new_updatestreamconfigurationrequest)
        print("The response of SharedSignalsFrameworkSSFApi->update_stream_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->update_stream_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-stream-status-v1
Update stream status
Updates the operational status (enabled, paused, disabled) with an optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-stream-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | updatestreamstatusrequest | [**Updatestreamstatusrequest**](../models/updatestreamstatusrequest) | True  | 

### Return type
[**Streamstatusresponse**](../models/streamstatusresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated stream status (same JSON shape as GET /ssf/streams/status). | Streamstatusresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.shared_signals_framework_ssf.api.shared_signals_framework_ssf_api import SharedSignalsFrameworkSSFApi
from sailpoint.shared_signals_framework_ssf.api_client import ApiClient
from sailpoint.shared_signals_framework_ssf.models.streamstatusresponse import Streamstatusresponse
from sailpoint.shared_signals_framework_ssf.models.updatestreamstatusrequest import Updatestreamstatusrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    updatestreamstatusrequest = '''{"stream_id":"550e8400-e29b-41d4-a716-446655440000","status":"paused","reason":"manually paused"}''' # Updatestreamstatusrequest | 

    try:
        # Update stream status
        new_updatestreamstatusrequest = Updatestreamstatusrequest.from_json(updatestreamstatusrequest)
        results = SharedSignalsFrameworkSSFApi(api_client).update_stream_status_v1(updatestreamstatusrequest=new_updatestreamstatusrequest)
        # Below is a request that includes all optional parameters
        # results = SharedSignalsFrameworkSSFApi(api_client).update_stream_status_v1(new_updatestreamstatusrequest)
        print("The response of SharedSignalsFrameworkSSFApi->update_stream_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SharedSignalsFrameworkSSFApi->update_stream_status_v1: %s\n" % e)
```



[[Back to top]](#) 



