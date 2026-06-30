---
id: v1-rolebulkdeleterequest
title: Rolebulkdeleterequest
pagination_label: Rolebulkdeleterequest
sidebar_label: Rolebulkdeleterequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Rolebulkdeleterequest', 'V1Rolebulkdeleterequest'] 
slug: /tools/sdk/go/roles/models/rolebulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Rolebulkdeleterequest', 'V1Rolebulkdeleterequest']
---

# Rolebulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleIds** | **[]string** | List of IDs of Roles to be deleted. | 

## Methods

### NewRolebulkdeleterequest

`func NewRolebulkdeleterequest(roleIds []string, ) *Rolebulkdeleterequest`

NewRolebulkdeleterequest instantiates a new Rolebulkdeleterequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolebulkdeleterequestWithDefaults

`func NewRolebulkdeleterequestWithDefaults() *Rolebulkdeleterequest`

NewRolebulkdeleterequestWithDefaults instantiates a new Rolebulkdeleterequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoleIds

`func (o *Rolebulkdeleterequest) GetRoleIds() []string`

GetRoleIds returns the RoleIds field if non-nil, zero value otherwise.

### GetRoleIdsOk

`func (o *Rolebulkdeleterequest) GetRoleIdsOk() (*[]string, bool)`

GetRoleIdsOk returns a tuple with the RoleIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleIds

`func (o *Rolebulkdeleterequest) SetRoleIds(v []string)`

SetRoleIds sets RoleIds field to given value.



