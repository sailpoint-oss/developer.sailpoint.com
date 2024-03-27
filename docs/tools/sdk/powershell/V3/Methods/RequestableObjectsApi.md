---
id: requestable-objects
title: RequestableObjects
pagination_label: RequestableObjects
sidebar_label: RequestableObjects
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RequestableObjects'] 
slug: /tools/sdk/powershell/v3/methods/requestable-objects
tags: ['SDK', 'Software Development Kit', 'RequestableObjects']
---


# RequestableObjects

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listRequestableObjects**](#list-requestable-objects) | **GET** /requestable-objects | Requestable Objects List



## list-requestable-objects


This endpoint returns a list of acccess items that that can be requested through the Access Request endpoints. Access items are marked with AVAILABLE, PENDING or ASSIGNED with respect to the identity provided using *identity-id* query param.
Any authenticated token can call this endpoint to see their requestable access items. A token with ORG_ADMIN authority is required to call this endpoint to return a list of all of the requestable access items for the org or for another identity.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | IdentityId | **String** |   (optional) | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result.
  Query | Types | [**[]RequestableObjectType**](../models/requestable-object-type) |   (optional) | Filters the results to the specified type/types, where each type is one of ROLE or ACCESS_PROFILE. If absent, all types are returned. Support for additional types may be added in the future without notice.
  Query | Term | **String** |   (optional) | It allows searching requestable access items with a partial match on the name or description. If term is provided, then the *filter* query parameter will be ignored.
  Query | Statuses | [**[]RequestableObjectRequestStatus**](../models/requestable-object-request-status) |   (optional) | Filters the result to the specified status/statuses, where each status is one of AVAILABLE, ASSIGNED, or PENDING. It is an error to specify this parameter without also specifying an *identity-id* parameter. Additional statuses may be added in the future without notice.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw* 
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** 

	
### Return type

[**RequestableObject[]**](../models/requestable-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requestable objects | RequestableObject[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

