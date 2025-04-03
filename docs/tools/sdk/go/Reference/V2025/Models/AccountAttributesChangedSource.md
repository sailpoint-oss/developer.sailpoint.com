---
id: v2025-account-attributes-changed-source
title: AccountAttributesChangedSource
pagination_label: AccountAttributesChangedSource
sidebar_label: AccountAttributesChangedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAttributesChangedSource', 'V2025AccountAttributesChangedSource'] 
slug: /tools/sdk/go/v2025/models/account-attributes-changed-source
tags: ['SDK', 'Software Development Kit', 'AccountAttributesChangedSource', 'V2025AccountAttributesChangedSource']
---

# AccountAttributesChangedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the object to which this reference applies | 
**Type** | **string** | The type of object that is referenced | 
**Name** | **string** | Human-readable display name of the object to which this reference applies | 

## Methods

### NewAccountAttributesChangedSource

`func NewAccountAttributesChangedSource(id string, type_ string, name string, ) *AccountAttributesChangedSource`

NewAccountAttributesChangedSource instantiates a new AccountAttributesChangedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAttributesChangedSourceWithDefaults

`func NewAccountAttributesChangedSourceWithDefaults() *AccountAttributesChangedSource`

NewAccountAttributesChangedSourceWithDefaults instantiates a new AccountAttributesChangedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountAttributesChangedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountAttributesChangedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountAttributesChangedSource) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *AccountAttributesChangedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountAttributesChangedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountAttributesChangedSource) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *AccountAttributesChangedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountAttributesChangedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountAttributesChangedSource) SetName(v string)`

SetName sets Name field to given value.



