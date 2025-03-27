---
id: v2024-role-mining-potential-role-provision-request
title: RoleMiningPotentialRoleProvisionRequest
pagination_label: RoleMiningPotentialRoleProvisionRequest
sidebar_label: RoleMiningPotentialRoleProvisionRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningPotentialRoleProvisionRequest', 'V2024RoleMiningPotentialRoleProvisionRequest'] 
slug: /tools/sdk/go/v2024/models/role-mining-potential-role-provision-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleProvisionRequest', 'V2024RoleMiningPotentialRoleProvisionRequest']
---

# RoleMiningPotentialRoleProvisionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** | Pointer to **string** | Name of the new role being created | [optional] 
**RoleDescription** | Pointer to **string** | Short description of the new role being created | [optional] 
**OwnerId** | Pointer to **string** | ID of the identity that will own this role | [optional] 
**IncludeIdentities** | Pointer to **bool** | When true, create access requests for the identities associated with the potential role | [optional] [default to false]
**DirectlyAssignedEntitlements** | Pointer to **bool** | When true, assign entitlements directly to the role; otherwise, create access profiles containing the entitlements | [optional] [default to false]

## Methods

### NewRoleMiningPotentialRoleProvisionRequest

`func NewRoleMiningPotentialRoleProvisionRequest() *RoleMiningPotentialRoleProvisionRequest`

NewRoleMiningPotentialRoleProvisionRequest instantiates a new RoleMiningPotentialRoleProvisionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningPotentialRoleProvisionRequestWithDefaults

`func NewRoleMiningPotentialRoleProvisionRequestWithDefaults() *RoleMiningPotentialRoleProvisionRequest`

NewRoleMiningPotentialRoleProvisionRequestWithDefaults instantiates a new RoleMiningPotentialRoleProvisionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoleName

`func (o *RoleMiningPotentialRoleProvisionRequest) GetRoleName() string`

GetRoleName returns the RoleName field if non-nil, zero value otherwise.

### GetRoleNameOk

`func (o *RoleMiningPotentialRoleProvisionRequest) GetRoleNameOk() (*string, bool)`

GetRoleNameOk returns a tuple with the RoleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleName

`func (o *RoleMiningPotentialRoleProvisionRequest) SetRoleName(v string)`

SetRoleName sets RoleName field to given value.

### HasRoleName

`func (o *RoleMiningPotentialRoleProvisionRequest) HasRoleName() bool`

HasRoleName returns a boolean if a field has been set.

### GetRoleDescription

`func (o *RoleMiningPotentialRoleProvisionRequest) GetRoleDescription() string`

GetRoleDescription returns the RoleDescription field if non-nil, zero value otherwise.

### GetRoleDescriptionOk

`func (o *RoleMiningPotentialRoleProvisionRequest) GetRoleDescriptionOk() (*string, bool)`

GetRoleDescriptionOk returns a tuple with the RoleDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleDescription

`func (o *RoleMiningPotentialRoleProvisionRequest) SetRoleDescription(v string)`

SetRoleDescription sets RoleDescription field to given value.

### HasRoleDescription

`func (o *RoleMiningPotentialRoleProvisionRequest) HasRoleDescription() bool`

HasRoleDescription returns a boolean if a field has been set.

### GetOwnerId

`func (o *RoleMiningPotentialRoleProvisionRequest) GetOwnerId() string`

GetOwnerId returns the OwnerId field if non-nil, zero value otherwise.

### GetOwnerIdOk

`func (o *RoleMiningPotentialRoleProvisionRequest) GetOwnerIdOk() (*string, bool)`

GetOwnerIdOk returns a tuple with the OwnerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerId

`func (o *RoleMiningPotentialRoleProvisionRequest) SetOwnerId(v string)`

SetOwnerId sets OwnerId field to given value.

### HasOwnerId

`func (o *RoleMiningPotentialRoleProvisionRequest) HasOwnerId() bool`

HasOwnerId returns a boolean if a field has been set.

### GetIncludeIdentities

`func (o *RoleMiningPotentialRoleProvisionRequest) GetIncludeIdentities() bool`

GetIncludeIdentities returns the IncludeIdentities field if non-nil, zero value otherwise.

### GetIncludeIdentitiesOk

`func (o *RoleMiningPotentialRoleProvisionRequest) GetIncludeIdentitiesOk() (*bool, bool)`

GetIncludeIdentitiesOk returns a tuple with the IncludeIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeIdentities

`func (o *RoleMiningPotentialRoleProvisionRequest) SetIncludeIdentities(v bool)`

SetIncludeIdentities sets IncludeIdentities field to given value.

### HasIncludeIdentities

`func (o *RoleMiningPotentialRoleProvisionRequest) HasIncludeIdentities() bool`

HasIncludeIdentities returns a boolean if a field has been set.

### GetDirectlyAssignedEntitlements

`func (o *RoleMiningPotentialRoleProvisionRequest) GetDirectlyAssignedEntitlements() bool`

GetDirectlyAssignedEntitlements returns the DirectlyAssignedEntitlements field if non-nil, zero value otherwise.

### GetDirectlyAssignedEntitlementsOk

`func (o *RoleMiningPotentialRoleProvisionRequest) GetDirectlyAssignedEntitlementsOk() (*bool, bool)`

GetDirectlyAssignedEntitlementsOk returns a tuple with the DirectlyAssignedEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectlyAssignedEntitlements

`func (o *RoleMiningPotentialRoleProvisionRequest) SetDirectlyAssignedEntitlements(v bool)`

SetDirectlyAssignedEntitlements sets DirectlyAssignedEntitlements field to given value.

### HasDirectlyAssignedEntitlements

`func (o *RoleMiningPotentialRoleProvisionRequest) HasDirectlyAssignedEntitlements() bool`

HasDirectlyAssignedEntitlements returns a boolean if a field has been set.


