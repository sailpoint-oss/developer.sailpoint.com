---
id: access-profile-role
title: AccessProfileRole
pagination_label: AccessProfileRole
sidebar_label: AccessProfileRole
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileRole', 'AccessProfileRole'] 
slug: /tools/sdk/go/v3/models/access-profile-role
tags: ['SDK', 'Software Development Kit', 'AccessProfileRole', 'AccessProfileRole']
---

# AccessProfileRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **NullableString** | Description of access item. | [optional] 
**Type** | Pointer to **string** | Type of the access item. | [optional] 
**Owner** | Pointer to [**DisplayReference**](display-reference) |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**Revocable** | Pointer to **bool** |  | [optional] 

## Methods

### NewAccessProfileRole

`func NewAccessProfileRole() *AccessProfileRole`

NewAccessProfileRole instantiates a new AccessProfileRole object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileRoleWithDefaults

`func NewAccessProfileRoleWithDefaults() *AccessProfileRole`

NewAccessProfileRoleWithDefaults instantiates a new AccessProfileRole object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileRole) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileRole) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileRole) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileRole) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfileRole) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileRole) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileRole) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfileRole) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessProfileRole) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessProfileRole) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessProfileRole) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessProfileRole) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessProfileRole) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfileRole) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfileRole) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfileRole) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessProfileRole) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessProfileRole) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *AccessProfileRole) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessProfileRole) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessProfileRole) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessProfileRole) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOwner

`func (o *AccessProfileRole) GetOwner() DisplayReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AccessProfileRole) GetOwnerOk() (*DisplayReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AccessProfileRole) SetOwner(v DisplayReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AccessProfileRole) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDisabled

`func (o *AccessProfileRole) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *AccessProfileRole) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *AccessProfileRole) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *AccessProfileRole) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetRevocable

`func (o *AccessProfileRole) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *AccessProfileRole) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *AccessProfileRole) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *AccessProfileRole) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.


