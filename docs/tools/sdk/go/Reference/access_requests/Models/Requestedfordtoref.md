---
id: v1-requestedfordtoref
title: Requestedfordtoref
pagination_label: Requestedfordtoref
sidebar_label: Requestedfordtoref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Requestedfordtoref', 'V1Requestedfordtoref'] 
slug: /tools/sdk/go/accessrequests/models/requestedfordtoref
tags: ['SDK', 'Software Development Kit', 'Requestedfordtoref', 'V1Requestedfordtoref']
---

# Requestedfordtoref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityId** | **string** | The identity id for which the access is requested | 
**RequestedItems** | [**[]Requesteditemdtoref**](requesteditemdtoref) | the details for the access items that are requested for the identity | 

## Methods

### NewRequestedfordtoref

`func NewRequestedfordtoref(identityId string, requestedItems []Requesteditemdtoref, ) *Requestedfordtoref`

NewRequestedfordtoref instantiates a new Requestedfordtoref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedfordtorefWithDefaults

`func NewRequestedfordtorefWithDefaults() *Requestedfordtoref`

NewRequestedfordtorefWithDefaults instantiates a new Requestedfordtoref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityId

`func (o *Requestedfordtoref) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Requestedfordtoref) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Requestedfordtoref) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.


### GetRequestedItems

`func (o *Requestedfordtoref) GetRequestedItems() []Requesteditemdtoref`

GetRequestedItems returns the RequestedItems field if non-nil, zero value otherwise.

### GetRequestedItemsOk

`func (o *Requestedfordtoref) GetRequestedItemsOk() (*[]Requesteditemdtoref, bool)`

GetRequestedItemsOk returns a tuple with the RequestedItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedItems

`func (o *Requestedfordtoref) SetRequestedItems(v []Requesteditemdtoref)`

SetRequestedItems sets RequestedItems field to given value.



