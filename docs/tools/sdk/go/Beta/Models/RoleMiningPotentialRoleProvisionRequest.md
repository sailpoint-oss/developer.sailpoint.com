---
id: role-mining-potential-role-provision-request
title: RoleMiningPotentialRoleProvisionRequest
pagination_label: RoleMiningPotentialRoleProvisionRequest
sidebar_label: RoleMiningPotentialRoleProvisionRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningPotentialRoleProvisionRequest'] 
slug: /tools/sdk/go/beta/models/role-mining-potential-role-provision-request
tags: ['SDK', 'Software Development Kit', 'RoleMiningPotentialRoleProvisionRequest']
---

# RoleMiningPotentialRoleProvisionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** |  Pointer to **string** | Name of the new role being created | [optional] 
**RoleDescription** |  Pointer to **string** | Short description of the new role being created | [optional] 
**OwnerId** |  Pointer to **string** | ID of the identity that will own this role | [optional] 

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


[[Back to top]](#) 


