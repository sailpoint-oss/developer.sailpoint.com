---
id: v1-accountattributeschanged-source
title: AccountattributeschangedSource
pagination_label: AccountattributeschangedSource
sidebar_label: AccountattributeschangedSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountattributeschangedSource', 'V1AccountattributeschangedSource'] 
slug: /tools/sdk/go/triggers/models/accountattributeschanged-source
tags: ['SDK', 'Software Development Kit', 'AccountattributeschangedSource', 'V1AccountattributeschangedSource']
---

# AccountattributeschangedSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | ID of the object to which this reference applies | 
**Type** | **string** | The type of object that is referenced | 
**Name** | **string** | Human-readable display name of the object to which this reference applies | 

## Methods

### NewAccountattributeschangedSource

`func NewAccountattributeschangedSource(id string, type_ string, name string, ) *AccountattributeschangedSource`

NewAccountattributeschangedSource instantiates a new AccountattributeschangedSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountattributeschangedSourceWithDefaults

`func NewAccountattributeschangedSourceWithDefaults() *AccountattributeschangedSource`

NewAccountattributeschangedSourceWithDefaults instantiates a new AccountattributeschangedSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccountattributeschangedSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccountattributeschangedSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccountattributeschangedSource) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *AccountattributeschangedSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccountattributeschangedSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccountattributeschangedSource) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *AccountattributeschangedSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccountattributeschangedSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccountattributeschangedSource) SetName(v string)`

SetName sets Name field to given value.



