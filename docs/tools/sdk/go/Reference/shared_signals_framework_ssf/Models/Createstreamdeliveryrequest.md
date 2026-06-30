---
id: v1-createstreamdeliveryrequest
title: Createstreamdeliveryrequest
pagination_label: Createstreamdeliveryrequest
sidebar_label: Createstreamdeliveryrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Createstreamdeliveryrequest', 'V1Createstreamdeliveryrequest'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/createstreamdeliveryrequest
tags: ['SDK', 'Software Development Kit', 'Createstreamdeliveryrequest', 'V1Createstreamdeliveryrequest']
---

# Createstreamdeliveryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | **string** | Delivery method (only push is supported). | 
**EndpointUrl** | **string** | Receiver endpoint URL for push delivery. | 
**AuthorizationHeader** | Pointer to **string** | Authorization header value for delivery requests. | [optional] 

## Methods

### NewCreatestreamdeliveryrequest

`func NewCreatestreamdeliveryrequest(method string, endpointUrl string, ) *Createstreamdeliveryrequest`

NewCreatestreamdeliveryrequest instantiates a new Createstreamdeliveryrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatestreamdeliveryrequestWithDefaults

`func NewCreatestreamdeliveryrequestWithDefaults() *Createstreamdeliveryrequest`

NewCreatestreamdeliveryrequestWithDefaults instantiates a new Createstreamdeliveryrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *Createstreamdeliveryrequest) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *Createstreamdeliveryrequest) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *Createstreamdeliveryrequest) SetMethod(v string)`

SetMethod sets Method field to given value.


### GetEndpointUrl

`func (o *Createstreamdeliveryrequest) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *Createstreamdeliveryrequest) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *Createstreamdeliveryrequest) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.


### GetAuthorizationHeader

`func (o *Createstreamdeliveryrequest) GetAuthorizationHeader() string`

GetAuthorizationHeader returns the AuthorizationHeader field if non-nil, zero value otherwise.

### GetAuthorizationHeaderOk

`func (o *Createstreamdeliveryrequest) GetAuthorizationHeaderOk() (*string, bool)`

GetAuthorizationHeaderOk returns a tuple with the AuthorizationHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationHeader

`func (o *Createstreamdeliveryrequest) SetAuthorizationHeader(v string)`

SetAuthorizationHeader sets AuthorizationHeader field to given value.

### HasAuthorizationHeader

`func (o *Createstreamdeliveryrequest) HasAuthorizationHeader() bool`

HasAuthorizationHeader returns a boolean if a field has been set.


