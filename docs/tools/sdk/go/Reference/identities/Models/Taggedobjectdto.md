---
id: v1-taggedobjectdto
title: Taggedobjectdto
pagination_label: Taggedobjectdto
sidebar_label: Taggedobjectdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Taggedobjectdto', 'V1Taggedobjectdto'] 
slug: /tools/sdk/go/identities/models/taggedobjectdto
tags: ['SDK', 'Software Development Kit', 'Taggedobjectdto', 'V1Taggedobjectdto']
---

# Taggedobjectdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type | [optional] 
**Id** | Pointer to **string** | ID of the object this reference applies to | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the object this reference applies to | [optional] 

## Methods

### NewTaggedobjectdto

`func NewTaggedobjectdto() *Taggedobjectdto`

NewTaggedobjectdto instantiates a new Taggedobjectdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaggedobjectdtoWithDefaults

`func NewTaggedobjectdtoWithDefaults() *Taggedobjectdto`

NewTaggedobjectdtoWithDefaults instantiates a new Taggedobjectdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Taggedobjectdto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Taggedobjectdto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Taggedobjectdto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Taggedobjectdto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *Taggedobjectdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Taggedobjectdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Taggedobjectdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Taggedobjectdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Taggedobjectdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Taggedobjectdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Taggedobjectdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Taggedobjectdto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Taggedobjectdto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Taggedobjectdto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

