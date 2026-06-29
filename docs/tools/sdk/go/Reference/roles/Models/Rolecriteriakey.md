---
id: v1-rolecriteriakey
title: Rolecriteriakey
pagination_label: Rolecriteriakey
sidebar_label: Rolecriteriakey
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolecriteriakey', 'V1Rolecriteriakey'] 
slug: /tools/sdk/go/roles/models/rolecriteriakey
tags: ['SDK', 'Software Development Kit', 'Rolecriteriakey', 'V1Rolecriteriakey']
---

# Rolecriteriakey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Rolecriteriakeytype**](rolecriteriakeytype) |  | 
**Property** | **string** | The name of the attribute or entitlement to which the associated criteria applies. | 
**SourceId** | Pointer to **NullableString** | ID of the Source from which an account attribute or entitlement is drawn. Required if type is ACCOUNT or ENTITLEMENT | [optional] 

## Methods

### NewRolecriteriakey

`func NewRolecriteriakey(type_ Rolecriteriakeytype, property string, ) *Rolecriteriakey`

NewRolecriteriakey instantiates a new Rolecriteriakey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolecriteriakeyWithDefaults

`func NewRolecriteriakeyWithDefaults() *Rolecriteriakey`

NewRolecriteriakeyWithDefaults instantiates a new Rolecriteriakey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Rolecriteriakey) GetType() Rolecriteriakeytype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Rolecriteriakey) GetTypeOk() (*Rolecriteriakeytype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Rolecriteriakey) SetType(v Rolecriteriakeytype)`

SetType sets Type field to given value.


### GetProperty

`func (o *Rolecriteriakey) GetProperty() string`

GetProperty returns the Property field if non-nil, zero value otherwise.

### GetPropertyOk

`func (o *Rolecriteriakey) GetPropertyOk() (*string, bool)`

GetPropertyOk returns a tuple with the Property field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperty

`func (o *Rolecriteriakey) SetProperty(v string)`

SetProperty sets Property field to given value.


### GetSourceId

`func (o *Rolecriteriakey) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Rolecriteriakey) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Rolecriteriakey) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Rolecriteriakey) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### SetSourceIdNil

`func (o *Rolecriteriakey) SetSourceIdNil(b bool)`

 SetSourceIdNil sets the value for SourceId to be an explicit nil

### UnsetSourceId
`func (o *Rolecriteriakey) UnsetSourceId()`

UnsetSourceId ensures that no value is present for SourceId, not even an explicit nil

