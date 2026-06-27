---
id: v1-deliveryresponse
title: Deliveryresponse
pagination_label: Deliveryresponse
sidebar_label: Deliveryresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Deliveryresponse', 'V1Deliveryresponse'] 
slug: /tools/sdk/go/sharedsignalsframeworkssf/models/deliveryresponse
tags: ['SDK', 'Software Development Kit', 'Deliveryresponse', 'V1Deliveryresponse']
---

# Deliveryresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Method** | Pointer to **string** | Delivery method. | [optional] 
**EndpointUrl** | Pointer to **string** | Receiver endpoint URL. | [optional] 

## Methods

### NewDeliveryresponse

`func NewDeliveryresponse() *Deliveryresponse`

NewDeliveryresponse instantiates a new Deliveryresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeliveryresponseWithDefaults

`func NewDeliveryresponseWithDefaults() *Deliveryresponse`

NewDeliveryresponseWithDefaults instantiates a new Deliveryresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMethod

`func (o *Deliveryresponse) GetMethod() string`

GetMethod returns the Method field if non-nil, zero value otherwise.

### GetMethodOk

`func (o *Deliveryresponse) GetMethodOk() (*string, bool)`

GetMethodOk returns a tuple with the Method field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMethod

`func (o *Deliveryresponse) SetMethod(v string)`

SetMethod sets Method field to given value.

### HasMethod

`func (o *Deliveryresponse) HasMethod() bool`

HasMethod returns a boolean if a field has been set.

### GetEndpointUrl

`func (o *Deliveryresponse) GetEndpointUrl() string`

GetEndpointUrl returns the EndpointUrl field if non-nil, zero value otherwise.

### GetEndpointUrlOk

`func (o *Deliveryresponse) GetEndpointUrlOk() (*string, bool)`

GetEndpointUrlOk returns a tuple with the EndpointUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointUrl

`func (o *Deliveryresponse) SetEndpointUrl(v string)`

SetEndpointUrl sets EndpointUrl field to given value.

### HasEndpointUrl

`func (o *Deliveryresponse) HasEndpointUrl() bool`

HasEndpointUrl returns a boolean if a field has been set.


