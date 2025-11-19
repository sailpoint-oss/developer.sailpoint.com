---
id: v2024-identity-access
title: IdentityAccess
pagination_label: IdentityAccess
sidebar_label: IdentityAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAccess', 'V2024IdentityAccess'] 
slug: /tools/sdk/go/v2024/models/identity-access
tags: ['SDK', 'Software Development Kit', 'IdentityAccess', 'V2024IdentityAccess']
---

# IdentityAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **NullableString** | Description of access item. | [optional] 
**Type** | Pointer to **string** | Type of the access item. | [optional] 
**Source** | Pointer to [**Reference**](reference) |  | [optional] 
**Owner** | Pointer to [**DisplayReference**](display-reference) |  | [optional] 
**Revocable** | Pointer to **bool** |  | [optional] 
**Privileged** | Pointer to **bool** |  | [optional] 
**Attribute** | Pointer to **string** |  | [optional] 
**Value** | Pointer to **string** |  | [optional] 
**Standalone** | Pointer to **bool** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 

## Methods

### NewIdentityAccess

`func NewIdentityAccess() *IdentityAccess`

NewIdentityAccess instantiates a new IdentityAccess object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAccessWithDefaults

`func NewIdentityAccessWithDefaults() *IdentityAccess`

NewIdentityAccessWithDefaults instantiates a new IdentityAccess object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityAccess) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityAccess) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityAccess) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityAccess) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityAccess) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityAccess) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityAccess) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityAccess) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *IdentityAccess) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *IdentityAccess) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *IdentityAccess) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *IdentityAccess) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *IdentityAccess) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *IdentityAccess) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *IdentityAccess) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *IdentityAccess) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *IdentityAccess) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *IdentityAccess) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *IdentityAccess) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IdentityAccess) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IdentityAccess) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IdentityAccess) HasType() bool`

HasType returns a boolean if a field has been set.

### GetSource

`func (o *IdentityAccess) GetSource() Reference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *IdentityAccess) GetSourceOk() (*Reference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *IdentityAccess) SetSource(v Reference)`

SetSource sets Source field to given value.

### HasSource

`func (o *IdentityAccess) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetOwner

`func (o *IdentityAccess) GetOwner() DisplayReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *IdentityAccess) GetOwnerOk() (*DisplayReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *IdentityAccess) SetOwner(v DisplayReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *IdentityAccess) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRevocable

`func (o *IdentityAccess) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *IdentityAccess) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *IdentityAccess) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *IdentityAccess) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.

### GetPrivileged

`func (o *IdentityAccess) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *IdentityAccess) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *IdentityAccess) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *IdentityAccess) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetAttribute

`func (o *IdentityAccess) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *IdentityAccess) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *IdentityAccess) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *IdentityAccess) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *IdentityAccess) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *IdentityAccess) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *IdentityAccess) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *IdentityAccess) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetStandalone

`func (o *IdentityAccess) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *IdentityAccess) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *IdentityAccess) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.

### HasStandalone

`func (o *IdentityAccess) HasStandalone() bool`

HasStandalone returns a boolean if a field has been set.

### GetDisabled

`func (o *IdentityAccess) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *IdentityAccess) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *IdentityAccess) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *IdentityAccess) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.


