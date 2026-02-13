---
id: v2025-account-source-reference-owner
title: AccountSourceReferenceOwner
pagination_label: AccountSourceReferenceOwner
sidebar_label: AccountSourceReferenceOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountSourceReferenceOwner', 'V2025AccountSourceReferenceOwner'] 
slug: /tools/sdk/go/v2025/models/account-source-reference-owner
tags: ['SDK', 'Software Development Kit', 'AccountSourceReferenceOwner', 'V2025AccountSourceReferenceOwner']
---

# AccountSourceReferenceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the source owner. | 
**Name** | **string** | Name of the source owner. | 

## Methods

### NewAccountSourceReferenceOwner

`func NewAccountSourceReferenceOwner(id string, name string, ) *AccountSourceReferenceOwner`

NewAccountSourceReferenceOwner instantiates a new AccountSourceReferenceOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountSourceReferenceOwnerWithDefaults

`func NewAccountSourceReferenceOwnerWithDefaults() *AccountSourceReferenceOwner`

NewAccountSourceReferenceOwnerWithDefaults instantiates a new AccountSourceReferenceOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountSourceReferenceOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountSourceReferenceOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountSourceReferenceOwner) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AccountSourceReferenceOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountSourceReferenceOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountSourceReferenceOwner) SetName(v string)`

SetName sets Name field to given value.



