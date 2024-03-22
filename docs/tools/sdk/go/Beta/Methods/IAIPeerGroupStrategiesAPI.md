---
id: iai-peer-group-strategies
title: IAIPeerGroupStrategies
pagination_label: IAIPeerGroupStrategies
sidebar_label: IAIPeerGroupStrategies
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IAIPeerGroupStrategies'] 
slug: /tools/sdk/go/beta/methods/iai-peer-group-strategies
tags: ['SDK', 'Software Development Kit', 'IAIPeerGroupStrategies']
---


# IAIPeerGroupStrategies

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPeerGroupOutliers**](#get-peer-group-outliers) | **Get** /peer-group-strategies/{strategy}/identity-outliers | Identity Outliers List



## get-peer-group-outliers


-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | strategy | **string** | True  | The strategy used to create peer groups. Currently, 'entitlement' is supported.
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

	
### Return type

[**[]PeerGroupMember**](../models/peer-group-member)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identities that are not included in peer groups. | []PeerGroupMember
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

