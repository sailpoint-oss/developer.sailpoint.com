---
id: v1-additionalownerref
title: Additionalownerref
pagination_label: Additionalownerref
sidebar_label: Additionalownerref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Additionalownerref', 'V1Additionalownerref'] 
slug: /tools/sdk/go/roles/models/additionalownerref
tags: ['SDK', 'Software Development Kit', 'Additionalownerref', 'V1Additionalownerref']
---

# Additionalownerref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of the additional owner; IDENTITY for an identity, GOVERNANCE_GROUP for a governance group. | [optional] 
**Id** | Pointer to **string** | ID of the identity or governance group. | [optional] 
**Name** | Pointer to **NullableString** | Display name. It may be left null or omitted on input. If set, it must match the current display name of the identity or governance group, otherwise a 400 Bad Request error may result. | [optional] 

## Methods

### NewAdditionalownerref

`func NewAdditionalownerref() *Additionalownerref`

NewAdditionalownerref instantiates a new Additionalownerref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdditionalownerrefWithDefaults

`func NewAdditionalownerrefWithDefaults() *Additionalownerref`

NewAdditionalownerrefWithDefaults instantiates a new Additionalownerref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Additionalownerref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Additionalownerref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Additionalownerref) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Additionalownerref) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Additionalownerref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Additionalownerref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Additionalownerref) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Additionalownerref) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Additionalownerref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Additionalownerref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Additionalownerref) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Additionalownerref) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Additionalownerref) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Additionalownerref) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

