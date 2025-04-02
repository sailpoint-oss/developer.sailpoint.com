---
id: role-document-all-of-dimensions
title: RoleDocumentAllOfDimensions
pagination_label: RoleDocumentAllOfDimensions
sidebar_label: RoleDocumentAllOfDimensions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleDocumentAllOfDimensions', 'RoleDocumentAllOfDimensions'] 
slug: /tools/sdk/go//models/role-document-all-of-dimensions
tags: ['SDK', 'Software Development Kit', 'RoleDocumentAllOfDimensions', 'RoleDocumentAllOfDimensions']
---

# RoleDocumentAllOfDimensions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique ID of the dimension. | [optional] 
**Name** | Pointer to **string** | Name of the dimension. | [optional] 
**Description** | Pointer to **NullableString** | Description of the dimension. | [optional] 
**Entitlements** | Pointer to [**[]RoleDocumentAllOfEntitlements1**](role-document-all-of-entitlements1) | Entitlements included with the role. | [optional] 
**AccessProfiles** | Pointer to [**[]BaseAccessProfile**](base-access-profile) | Access profiles included in the dimension. | [optional] 

## Methods

### NewRoleDocumentAllOfDimensions

`func NewRoleDocumentAllOfDimensions() *RoleDocumentAllOfDimensions`

NewRoleDocumentAllOfDimensions instantiates a new RoleDocumentAllOfDimensions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleDocumentAllOfDimensionsWithDefaults

`func NewRoleDocumentAllOfDimensionsWithDefaults() *RoleDocumentAllOfDimensions`

NewRoleDocumentAllOfDimensionsWithDefaults instantiates a new RoleDocumentAllOfDimensions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleDocumentAllOfDimensions) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleDocumentAllOfDimensions) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleDocumentAllOfDimensions) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleDocumentAllOfDimensions) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleDocumentAllOfDimensions) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleDocumentAllOfDimensions) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleDocumentAllOfDimensions) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleDocumentAllOfDimensions) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *RoleDocumentAllOfDimensions) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleDocumentAllOfDimensions) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleDocumentAllOfDimensions) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleDocumentAllOfDimensions) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleDocumentAllOfDimensions) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleDocumentAllOfDimensions) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetEntitlements

`func (o *RoleDocumentAllOfDimensions) GetEntitlements() []RoleDocumentAllOfEntitlements1`

GetEntitlements returns the Entitlements field if non-nil, zero value otherwise.

### GetEntitlementsOk

`func (o *RoleDocumentAllOfDimensions) GetEntitlementsOk() (*[]RoleDocumentAllOfEntitlements1, bool)`

GetEntitlementsOk returns a tuple with the Entitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlements

`func (o *RoleDocumentAllOfDimensions) SetEntitlements(v []RoleDocumentAllOfEntitlements1)`

SetEntitlements sets Entitlements field to given value.

### HasEntitlements

`func (o *RoleDocumentAllOfDimensions) HasEntitlements() bool`

HasEntitlements returns a boolean if a field has been set.

### SetEntitlementsNil

`func (o *RoleDocumentAllOfDimensions) SetEntitlementsNil(b bool)`

 SetEntitlementsNil sets the value for Entitlements to be an explicit nil

### UnsetEntitlements
`func (o *RoleDocumentAllOfDimensions) UnsetEntitlements()`

UnsetEntitlements ensures that no value is present for Entitlements, not even an explicit nil
### GetAccessProfiles

`func (o *RoleDocumentAllOfDimensions) GetAccessProfiles() []BaseAccessProfile`

GetAccessProfiles returns the AccessProfiles field if non-nil, zero value otherwise.

### GetAccessProfilesOk

`func (o *RoleDocumentAllOfDimensions) GetAccessProfilesOk() (*[]BaseAccessProfile, bool)`

GetAccessProfilesOk returns a tuple with the AccessProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfiles

`func (o *RoleDocumentAllOfDimensions) SetAccessProfiles(v []BaseAccessProfile)`

SetAccessProfiles sets AccessProfiles field to given value.

### HasAccessProfiles

`func (o *RoleDocumentAllOfDimensions) HasAccessProfiles() bool`

HasAccessProfiles returns a boolean if a field has been set.

### SetAccessProfilesNil

`func (o *RoleDocumentAllOfDimensions) SetAccessProfilesNil(b bool)`

 SetAccessProfilesNil sets the value for AccessProfiles to be an explicit nil

### UnsetAccessProfiles
`func (o *RoleDocumentAllOfDimensions) UnsetAccessProfiles()`

UnsetAccessProfiles ensures that no value is present for AccessProfiles, not even an explicit nil

