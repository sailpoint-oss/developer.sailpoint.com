---
id: role-bulk-delete-request
title: RoleBulkDeleteRequest
pagination_label: RoleBulkDeleteRequest
sidebar_label: RoleBulkDeleteRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleBulkDeleteRequest'] 
slug: /tools/sdk/go/v3/models/role-bulk-delete-request
tags: ['SDK', 'Software Development Kit', 'RoleBulkDeleteRequest']
---

# RoleBulkDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleIds** |  **[]string** | List of IDs of Roles to be deleted. | 

## Methods

### NewRoleBulkDeleteRequest

`func NewRoleBulkDeleteRequest(roleIds []string, ) *RoleBulkDeleteRequest`

NewRoleBulkDeleteRequest instantiates a new RoleBulkDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleBulkDeleteRequestWithDefaults

`func NewRoleBulkDeleteRequestWithDefaults() *RoleBulkDeleteRequest`

NewRoleBulkDeleteRequestWithDefaults instantiates a new RoleBulkDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoleIds

`func (o *RoleBulkDeleteRequest) GetRoleIds() []string`

GetRoleIds returns the RoleIds field if non-nil, zero value otherwise.

### GetRoleIdsOk

`func (o *RoleBulkDeleteRequest) GetRoleIdsOk() (*[]string, bool)`

GetRoleIdsOk returns a tuple with the RoleIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleIds

`func (o *RoleBulkDeleteRequest) SetRoleIds(v []string)`

SetRoleIds sets RoleIds field to given value.



[[Back to top]](#) 


