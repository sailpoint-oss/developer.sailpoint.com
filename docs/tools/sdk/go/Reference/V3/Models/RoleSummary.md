---
id: role-summary
title: RoleSummary
pagination_label: RoleSummary
sidebar_label: RoleSummary
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleSummary', 'RoleSummary'] 
slug: /tools/sdk/go/v3/models/role-summary
tags: ['SDK', 'Software Development Kit', 'RoleSummary', 'RoleSummary']
---

# RoleSummary

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

### NewRoleSummary

`func NewRoleSummary() *RoleSummary`

NewRoleSummary instantiates a new RoleSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleSummaryWithDefaults

`func NewRoleSummaryWithDefaults() *RoleSummary`

NewRoleSummaryWithDefaults instantiates a new RoleSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleSummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleSummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleSummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleSummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleSummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *RoleSummary) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *RoleSummary) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *RoleSummary) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *RoleSummary) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *RoleSummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleSummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleSummary) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleSummary) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleSummary) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleSummary) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetType

`func (o *RoleSummary) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleSummary) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleSummary) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoleSummary) HasType() bool`

HasType returns a boolean if a field has been set.

### GetOwner

`func (o *RoleSummary) GetOwner() DisplayReference`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *RoleSummary) GetOwnerOk() (*DisplayReference, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *RoleSummary) SetOwner(v DisplayReference)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *RoleSummary) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetDisabled

`func (o *RoleSummary) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *RoleSummary) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *RoleSummary) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *RoleSummary) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetRevocable

`func (o *RoleSummary) GetRevocable() bool`

GetRevocable returns the Revocable field if non-nil, zero value otherwise.

### GetRevocableOk

`func (o *RoleSummary) GetRevocableOk() (*bool, bool)`

GetRevocableOk returns a tuple with the Revocable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocable

`func (o *RoleSummary) SetRevocable(v bool)`

SetRevocable sets Revocable field to given value.

### HasRevocable

`func (o *RoleSummary) HasRevocable() bool`

HasRevocable returns a boolean if a field has been set.


