---
id: role-membership-selector
title: RoleMembershipSelector
pagination_label: RoleMembershipSelector
sidebar_label: RoleMembershipSelector
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMembershipSelector', 'RoleMembershipSelector'] 
slug: /tools/sdk/go//models/role-membership-selector
tags: ['SDK', 'Software Development Kit', 'RoleMembershipSelector', 'RoleMembershipSelector']
---

# RoleMembershipSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**RoleMembershipSelectorType**](role-membership-selector-type) |  | [optional] 
**Criteria** | Pointer to [**NullableRoleCriteriaLevel1**](role-criteria-level1) |  | [optional] 
**Identities** | Pointer to [**[]RoleMembershipIdentity**](role-membership-identity) | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [optional] 

## Methods

### NewRoleMembershipSelector

`func NewRoleMembershipSelector() *RoleMembershipSelector`

NewRoleMembershipSelector instantiates a new RoleMembershipSelector object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMembershipSelectorWithDefaults

`func NewRoleMembershipSelectorWithDefaults() *RoleMembershipSelector`

NewRoleMembershipSelectorWithDefaults instantiates a new RoleMembershipSelector object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RoleMembershipSelector) GetType() RoleMembershipSelectorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMembershipSelector) GetTypeOk() (*RoleMembershipSelectorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMembershipSelector) SetType(v RoleMembershipSelectorType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMembershipSelector) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCriteria

`func (o *RoleMembershipSelector) GetCriteria() RoleCriteriaLevel1`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *RoleMembershipSelector) GetCriteriaOk() (*RoleCriteriaLevel1, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *RoleMembershipSelector) SetCriteria(v RoleCriteriaLevel1)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *RoleMembershipSelector) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### SetCriteriaNil

`func (o *RoleMembershipSelector) SetCriteriaNil(b bool)`

 SetCriteriaNil sets the value for Criteria to be an explicit nil

### UnsetCriteria
`func (o *RoleMembershipSelector) UnsetCriteria()`

UnsetCriteria ensures that no value is present for Criteria, not even an explicit nil
### GetIdentities

`func (o *RoleMembershipSelector) GetIdentities() []RoleMembershipIdentity`

GetIdentities returns the Identities field if non-nil, zero value otherwise.

### GetIdentitiesOk

`func (o *RoleMembershipSelector) GetIdentitiesOk() (*[]RoleMembershipIdentity, bool)`

GetIdentitiesOk returns a tuple with the Identities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentities

`func (o *RoleMembershipSelector) SetIdentities(v []RoleMembershipIdentity)`

SetIdentities sets Identities field to given value.

### HasIdentities

`func (o *RoleMembershipSelector) HasIdentities() bool`

HasIdentities returns a boolean if a field has been set.

### SetIdentitiesNil

`func (o *RoleMembershipSelector) SetIdentitiesNil(b bool)`

 SetIdentitiesNil sets the value for Identities to be an explicit nil

### UnsetIdentities
`func (o *RoleMembershipSelector) UnsetIdentities()`

UnsetIdentities ensures that no value is present for Identities, not even an explicit nil

