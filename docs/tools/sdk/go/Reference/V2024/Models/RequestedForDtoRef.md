---
id: v2024-requested-for-dto-ref
title: RequestedForDtoRef
pagination_label: RequestedForDtoRef
sidebar_label: RequestedForDtoRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedForDtoRef', 'V2024RequestedForDtoRef'] 
slug: /tools/sdk/go/v2024/models/requested-for-dto-ref
tags: ['SDK', 'Software Development Kit', 'RequestedForDtoRef', 'V2024RequestedForDtoRef']
---

# RequestedForDtoRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **string** | The identity id for which the access is requested | 
**RequestedItems** | [**[]RequestedItemDtoRef**](requested-item-dto-ref) | the details for the access items that are requested for the identity | 

## Methods

### NewRequestedForDtoRef

`func NewRequestedForDtoRef(identityId string, requestedItems []RequestedItemDtoRef, ) *RequestedForDtoRef`

NewRequestedForDtoRef instantiates a new RequestedForDtoRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedForDtoRefWithDefaults

`func NewRequestedForDtoRefWithDefaults() *RequestedForDtoRef`

NewRequestedForDtoRefWithDefaults instantiates a new RequestedForDtoRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *RequestedForDtoRef) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *RequestedForDtoRef) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *RequestedForDtoRef) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetRequestedItems

`func (o *RequestedForDtoRef) GetRequestedItems() []RequestedItemDtoRef`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *RequestedForDtoRef) GetRequestedItemsOk() (*[]RequestedItemDtoRef, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *RequestedForDtoRef) SetRequestedItems(v []RequestedItemDtoRef)`

SetRequestedItems sets RequestedItems field to given value.



