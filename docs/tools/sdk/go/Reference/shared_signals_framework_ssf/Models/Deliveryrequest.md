---
id: v1-deliveryrequest
title: Deliveryrequest
pagination_label: Deliveryrequest
sidebar_label: Deliveryrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Deliveryrequest', 'V1Deliveryrequest'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/deliveryrequest
tags: ['SDK', 'Software Development Kit', 'Deliveryrequest', 'V1Deliveryrequest']
---

# Deliveryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | Pointer to **string** | Delivery method (optional for PATCH). | [optional] 
**EndpointUrl** | Pointer to **string** | Receiver endpoint URL (optional for PATCH). | [optional] 
**AuthorizationHeader** | Pointer to **string** | Optional authorization header value. | [optional] 

## Methods

### NewDeliveryrequest

`func NewDeliveryrequest() *Deliveryrequest`

NewDeliveryrequest instantiates a new Deliveryrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliveryrequestWithDefaults

`func NewDeliveryrequestWithDefaults() *Deliveryrequest`

NewDeliveryrequestWithDefaults instantiates a new Deliveryrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *Deliveryrequest) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *Deliveryrequest) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *Deliveryrequest) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *Deliveryrequest) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *Deliveryrequest) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *Deliveryrequest) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *Deliveryrequest) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *Deliveryrequest) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.

### GetAuthorizationHeader

`func (o *Deliveryrequest) GetAuthorizationHeader() string`

GetAuthorizationHeader returns the AuthorizationHeader field if non-nil, zero value otherwise.

### GetAuthorizationHeaderOk

`func (o *Deliveryrequest) GetAuthorizationHeaderOk() (*string, bool)`

GetAuthorizationHeaderOk returns a tuple with the AuthorizationHeader field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationHeader

`func (o *Deliveryrequest) SetAuthorizationHeader(v string)`

SetAuthorizationHeader sets AuthorizationHeader field to given value.

### HasAuthorizationHeader

`func (o *Deliveryrequest) HasAuthorizationHeader() bool`

HasAuthorizationHeader returns a boolean if a field has been set.


