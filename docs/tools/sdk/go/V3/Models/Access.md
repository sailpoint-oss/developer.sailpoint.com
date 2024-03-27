---
id: access
title: Access
pagination_label: Access
sidebar_label: Access
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Access'] 
slug: /tools/sdk/go/v3/models/access
tags: ['SDK', 'Software Development Kit', 'Access']
---

# Access

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** |  Pointer to **string** | The human readable name of the referenced object. | [optional] 
**DisplayName** |  Pointer to **string** |  | [optional] 
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Description** |  Pointer to **NullableString** |  | [optional] 

## Methods

### NewAccess

`func NewAccess() *Access`

NewAccess instantiates a new Access object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessWithDefaults

`func NewAccessWithDefaults() *Access`

NewAccessWithDefaults instantiates a new Access object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Access) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Access) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Access) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Access) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Access) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Access) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Access) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Access) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *Access) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *Access) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *Access) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *Access) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetType

`func (o *Access) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Access) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Access) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *Access) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *Access) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Access) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Access) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Access) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Access) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Access) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

[[Back to top]](#) 


