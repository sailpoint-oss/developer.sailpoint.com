---
id: requested-item-details
title: RequestedItemDetails
pagination_label: RequestedItemDetails
sidebar_label: RequestedItemDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedItemDetails', 'RequestedItemDetails'] 
slug: /tools/sdk/go//models/requested-item-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemDetails', 'RequestedItemDetails']
---

# RequestedItemDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of access item requested. | [optional] 
**Id** | Pointer to **string** | The id of the access item requested. | [optional] 

## Methods

### NewRequestedItemDetails

`func NewRequestedItemDetails() *RequestedItemDetails`

NewRequestedItemDetails instantiates a new RequestedItemDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemDetailsWithDefaults

`func NewRequestedItemDetailsWithDefaults() *RequestedItemDetails`

NewRequestedItemDetailsWithDefaults instantiates a new RequestedItemDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RequestedItemDetails) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RequestedItemDetails) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RequestedItemDetails) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RequestedItemDetails) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *RequestedItemDetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RequestedItemDetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RequestedItemDetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RequestedItemDetails) HasId() bool`

HasId returns a boolean if a field has been set.


