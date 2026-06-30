---
id: v1-replacestreamconfigurationrequest-delivery
title: ReplacestreamconfigurationrequestDelivery
pagination_label: ReplacestreamconfigurationrequestDelivery
sidebar_label: ReplacestreamconfigurationrequestDelivery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReplacestreamconfigurationrequestDelivery', 'V1ReplacestreamconfigurationrequestDelivery'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/replacestreamconfigurationrequest-delivery
tags: ['SDK', 'Software Development Kit', 'ReplacestreamconfigurationrequestDelivery', 'V1ReplacestreamconfigurationrequestDelivery']
---

# ReplacestreamconfigurationrequestDelivery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **string** | Delivery method (only push is supported). | 
**EndpointUrl** | **string** | Receiver endpoint URL for push delivery. | 
**AuthorizationHeader** | Pointer to **string** | Authorization header value for delivery requests. | [optional] 

## Methods

### NewReplacestreamconfigurationrequestDelivery

`func NewReplacestreamconfigurationrequestDelivery(method string, endpointUrl string, ) *ReplacestreamconfigurationrequestDelivery`

NewReplacestreamconfigurationrequestDelivery instantiates a new ReplacestreamconfigurationrequestDelivery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReplacestreamconfigurationrequestDeliveryWithDefaults

`func NewReplacestreamconfigurationrequestDeliveryWithDefaults() *ReplacestreamconfigurationrequestDelivery`

NewReplacestreamconfigurationrequestDeliveryWithDefaults instantiates a new ReplacestreamconfigurationrequestDelivery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *ReplacestreamconfigurationrequestDelivery) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *ReplacestreamconfigurationrequestDelivery) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *ReplacestreamconfigurationrequestDelivery) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetEndpointUrl

`func (o *ReplacestreamconfigurationrequestDelivery) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *ReplacestreamconfigurationrequestDelivery) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *ReplacestreamconfigurationrequestDelivery) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.


### GetAuthorizationHeader

`func (o *ReplacestreamconfigurationrequestDelivery) GetAuthorizationHeader() string`

GetAuthorizationHeader returns the AuthorizationHeader field if non-nil, zero value otherwise.

### GetAuthorizationHeaderOk

`func (o *ReplacestreamconfigurationrequestDelivery) GetAuthorizationHeaderOk() (*string, bool)`

GetAuthorizationHeaderOk returns a tuple with the AuthorizationHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationHeader

`func (o *ReplacestreamconfigurationrequestDelivery) SetAuthorizationHeader(v string)`

SetAuthorizationHeader sets AuthorizationHeader field to given value.

### HasAuthorizationHeader

`func (o *ReplacestreamconfigurationrequestDelivery) HasAuthorizationHeader() bool`

HasAuthorizationHeader returns a boolean if a field has been set.


