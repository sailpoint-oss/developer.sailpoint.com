---
id: v2025-role-mining-potential-role-edit-entitlements
title: RoleMiningPotentialRoleEditEntitlements
pagination_label: RoleMiningPotentialRoleEditEntitlements
sidebar_label: RoleMiningPotentialRoleEditEntitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningPotentialRoleEditEntitlements', 'V2025RoleMiningPotentialRoleEditEntitlements'] 
slug: /tools/sdk/go/v2025/models/role-mining-potential-role-edit-entitlements
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleEditEntitlements', 'V2025RoleMiningPotentialRoleEditEntitlements']
---

# RoleMiningPotentialRoleEditEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **[]string** | The list of entitlement ids to be edited | [optional] 
**Exclude** | Pointer to **bool** | If true, add ids to be exclusion list. If false, remove ids from the exclusion list. | [optional] 

## Methods

### NewRoleMiningPotentialRoleEditEntitlements

`func NewRoleMiningPotentialRoleEditEntitlements() *RoleMiningPotentialRoleEditEntitlements`

NewRoleMiningPotentialRoleEditEntitlements instantiates a new RoleMiningPotentialRoleEditEntitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningPotentialRoleEditEntitlementsWithDefaults

`func NewRoleMiningPotentialRoleEditEntitlementsWithDefaults() *RoleMiningPotentialRoleEditEntitlements`

NewRoleMiningPotentialRoleEditEntitlementsWithDefaults instantiates a new RoleMiningPotentialRoleEditEntitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *RoleMiningPotentialRoleEditEntitlements) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *RoleMiningPotentialRoleEditEntitlements) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *RoleMiningPotentialRoleEditEntitlements) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *RoleMiningPotentialRoleEditEntitlements) HasIds() bool`

HasIds returns a boolean if a field has been set.

### GetExclude

`func (o *RoleMiningPotentialRoleEditEntitlements) GetExclude() bool`

GetExclude returns the Exclude field if non-nil, zero value otherwise.

### GetExcludeOk

`func (o *RoleMiningPotentialRoleEditEntitlements) GetExcludeOk() (*bool, bool)`

GetExcludeOk returns a tuple with the Exclude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExclude

`func (o *RoleMiningPotentialRoleEditEntitlements) SetExclude(v bool)`

SetExclude sets Exclude field to given value.

### HasExclude

`func (o *RoleMiningPotentialRoleEditEntitlements) HasExclude() bool`

HasExclude returns a boolean if a field has been set.


