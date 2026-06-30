---
id: v1-roleminingpotentialroleprovisionrequest
title: Roleminingpotentialroleprovisionrequest
pagination_label: Roleminingpotentialroleprovisionrequest
sidebar_label: Roleminingpotentialroleprovisionrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleminingpotentialroleprovisionrequest', 'V1Roleminingpotentialroleprovisionrequest'] 
slug: /tools/sdk/go/iairolemining/models/roleminingpotentialroleprovisionrequest
tags: ['SDK', 'Software Development Kit', 'Roleminingpotentialroleprovisionrequest', 'V1Roleminingpotentialroleprovisionrequest']
---

# Roleminingpotentialroleprovisionrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** | Pointer to **string** | Name of the new role being created | [optional] 
**RoleDescription** | Pointer to **string** | Short description of the new role being created | [optional] 
**OwnerId** | Pointer to **string** | ID of the identity that will own this role | [optional] 
**IncludeIdentities** | Pointer to **bool** | When true, create access requests for the identities associated with the potential role | [optional] [default to false]
**DirectlyAssignedEntitlements** | Pointer to **bool** | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [optional] [default to false]

## Methods

### NewRoleminingpotentialroleprovisionrequest

`func NewRoleminingpotentialroleprovisionrequest() *Roleminingpotentialroleprovisionrequest`

NewRoleminingpotentialroleprovisionrequest instantiates a new Roleminingpotentialroleprovisionrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleminingpotentialroleprovisionrequestWithDefaults

`func NewRoleminingpotentialroleprovisionrequestWithDefaults() *Roleminingpotentialroleprovisionrequest`

NewRoleminingpotentialroleprovisionrequestWithDefaults instantiates a new Roleminingpotentialroleprovisionrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoleName

`func (o *Roleminingpotentialroleprovisionrequest) GetRoleName() string`

GetRoleName returns the RoleName field if non-nil, zero value otherwise.

### GetRoleNameOk

`func (o *Roleminingpotentialroleprovisionrequest) GetRoleNameOk() (*string, bool)`

GetRoleNameOk returns a tuple with the RoleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleName

`func (o *Roleminingpotentialroleprovisionrequest) SetRoleName(v string)`

SetRoleName sets RoleName field to given value.

### HasRoleName

`func (o *Roleminingpotentialroleprovisionrequest) HasRoleName() bool`

HasRoleName returns a boolean if a field has been set.

### GetRoleDescription

`func (o *Roleminingpotentialroleprovisionrequest) GetRoleDescription() string`

GetRoleDescription returns the RoleDescription field if non-nil, zero value otherwise.

### GetRoleDescriptionOk

`func (o *Roleminingpotentialroleprovisionrequest) GetRoleDescriptionOk() (*string, bool)`

GetRoleDescriptionOk returns a tuple with the RoleDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleDescription

`func (o *Roleminingpotentialroleprovisionrequest) SetRoleDescription(v string)`

SetRoleDescription sets RoleDescription field to given value.

### HasRoleDescription

`func (o *Roleminingpotentialroleprovisionrequest) HasRoleDescription() bool`

HasRoleDescription returns a boolean if a field has been set.

### GetOwnerId

`func (o *Roleminingpotentialroleprovisionrequest) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *Roleminingpotentialroleprovisionrequest) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *Roleminingpotentialroleprovisionrequest) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *Roleminingpotentialroleprovisionrequest) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetIncludeIdentities

`func (o *Roleminingpotentialroleprovisionrequest) GetIncludeIdentities() bool`

GetIncludeIdentities returns the IncludeIdentities field if non-nil, zero value otherwise.

### GetIncludeIdentitiesOk

`func (o *Roleminingpotentialroleprovisionrequest) GetIncludeIdentitiesOk() (*bool, bool)`

GetIncludeIdentitiesOk returns a tuple with the IncludeIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeIdentities

`func (o *Roleminingpotentialroleprovisionrequest) SetIncludeIdentities(v bool)`

SetIncludeIdentities sets IncludeIdentities field to given value.

### HasIncludeIdentities

`func (o *Roleminingpotentialroleprovisionrequest) HasIncludeIdentities() bool`

HasIncludeIdentities returns a boolean if a field has been set.

### GetDirectlyAssignedEntitlements

`func (o *Roleminingpotentialroleprovisionrequest) GetDirectlyAssignedEntitlements() bool`

GetDirectlyAssignedEntitlements returns the DirectlyAssignedEntitlements field if non-nil, zero value otherwise.

### GetDirectlyAssignedEntitlementsOk

`func (o *Roleminingpotentialroleprovisionrequest) GetDirectlyAssignedEntitlementsOk() (*bool, bool)`

GetDirectlyAssignedEntitlementsOk returns a tuple with the DirectlyAssignedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectlyAssignedEntitlements

`func (o *Roleminingpotentialroleprovisionrequest) SetDirectlyAssignedEntitlements(v bool)`

SetDirectlyAssignedEntitlements sets DirectlyAssignedEntitlements field to given value.

### HasDirectlyAssignedEntitlements

`func (o *Roleminingpotentialroleprovisionrequest) HasDirectlyAssignedEntitlements() bool`

HasDirectlyAssignedEntitlements returns a boolean if a field has been set.


