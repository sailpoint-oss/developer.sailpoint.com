---
id: v1-accessprofileref
title: Accessprofileref
pagination_label: Accessprofileref
sidebar_label: Accessprofileref
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessprofileref', 'V1Accessprofileref'] 
slug: /tools/sdk/go/roles/models/accessprofileref
tags: ['SDK', 'Software Development Kit', 'Accessprofileref', 'V1Accessprofileref']
---

# Accessprofileref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the Access Profile | [optional] 
**Type** | Pointer to **string** | Type of requested object. This field must be either left null or set to 'ACCESS_PROFILE' when creating an Access Profile, otherwise a 400 Bad Request error will result. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the Access Profile. This field is ignored on input. | [optional] 

## Methods

### NewAccessprofileref

`func NewAccessprofileref() *Accessprofileref`

NewAccessprofileref instantiates a new Accessprofileref object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessprofilerefWithDefaults

`func NewAccessprofilerefWithDefaults() *Accessprofileref`

NewAccessprofilerefWithDefaults instantiates a new Accessprofileref object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Accessprofileref) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Accessprofileref) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Accessprofileref) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Accessprofileref) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *Accessprofileref) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Accessprofileref) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Accessprofileref) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Accessprofileref) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *Accessprofileref) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Accessprofileref) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Accessprofileref) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Accessprofileref) HasName() bool`

HasName returns a boolean if a field has been set.


