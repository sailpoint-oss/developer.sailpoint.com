---
id: access-profile-entitlement
title: AccessProfileEntitlement
pagination_label: AccessProfileEntitlement
sidebar_label: AccessProfileEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileEntitlement', 'AccessProfileEntitlement'] 
slug: /tools/sdk/go/v3/models/access-profile-entitlement
tags: ['SDK', 'Software Development Kit', 'AccessProfileEntitlement', 'AccessProfileEntitlement']
---

# AccessProfileEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The unique ID of the referenced object. | [optional] 
**Name** | Pointer to **string** | The human readable name of the referenced object. | [optional] 
**DisplayName** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **NullableString** | Description of access item. | [optional] 
**Source** | Pointer to [**Reference**](reference) |  | [optional] 
**Type** | Pointer to **string** | Type of the access item. | [optional] 
**Privileged** | Pointer to **bool** |  | [optional] 
**Attribute** | Pointer to **string** |  | [optional] 
**Value** | Pointer to **string** |  | [optional] 
**Standalone** | Pointer to **bool** |  | [optional] 

## Methods

### NewAccessProfileEntitlement

`func NewAccessProfileEntitlement() *AccessProfileEntitlement`

NewAccessProfileEntitlement instantiates a new AccessProfileEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileEntitlementWithDefaults

`func NewAccessProfileEntitlementWithDefaults() *AccessProfileEntitlement`

NewAccessProfileEntitlementWithDefaults instantiates a new AccessProfileEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileEntitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileEntitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessProfileEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileEntitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfileEntitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *AccessProfileEntitlement) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AccessProfileEntitlement) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AccessProfileEntitlement) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *AccessProfileEntitlement) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *AccessProfileEntitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfileEntitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfileEntitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfileEntitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AccessProfileEntitlement) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AccessProfileEntitlement) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSource

`func (o *AccessProfileEntitlement) GetSource() Reference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccessProfileEntitlement) GetSourceOk() (*Reference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccessProfileEntitlement) SetSource(v Reference)`

SetSource sets Source field to given value.

### HasSource

`func (o *AccessProfileEntitlement) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetType

`func (o *AccessProfileEntitlement) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessProfileEntitlement) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessProfileEntitlement) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessProfileEntitlement) HasType() bool`

HasType returns a boolean if a field has been set.

### GetPrivileged

`func (o *AccessProfileEntitlement) GetPrivileged() bool`

GetPrivileged returns the Privileged field if non-nil, zero value otherwise.

### GetPrivilegedOk

`func (o *AccessProfileEntitlement) GetPrivilegedOk() (*bool, bool)`

GetPrivilegedOk returns a tuple with the Privileged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivileged

`func (o *AccessProfileEntitlement) SetPrivileged(v bool)`

SetPrivileged sets Privileged field to given value.

### HasPrivileged

`func (o *AccessProfileEntitlement) HasPrivileged() bool`

HasPrivileged returns a boolean if a field has been set.

### GetAttribute

`func (o *AccessProfileEntitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *AccessProfileEntitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *AccessProfileEntitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *AccessProfileEntitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *AccessProfileEntitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AccessProfileEntitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AccessProfileEntitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *AccessProfileEntitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetStandalone

`func (o *AccessProfileEntitlement) GetStandalone() bool`

GetStandalone returns the Standalone field if non-nil, zero value otherwise.

### GetStandaloneOk

`func (o *AccessProfileEntitlement) GetStandaloneOk() (*bool, bool)`

GetStandaloneOk returns a tuple with the Standalone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStandalone

`func (o *AccessProfileEntitlement) SetStandalone(v bool)`

SetStandalone sets Standalone field to given value.

### HasStandalone

`func (o *AccessProfileEntitlement) HasStandalone() bool`

HasStandalone returns a boolean if a field has been set.


