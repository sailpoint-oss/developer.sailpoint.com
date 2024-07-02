---
id: permission-dto
title: PermissionDto
pagination_label: PermissionDto
sidebar_label: PermissionDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PermissionDto'] 
slug: /tools/sdk/go/beta/models/permission-dto
tags: ['SDK', 'Software Development Kit', 'PermissionDto']
---

# PermissionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rights** |  Pointer to **[]string** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**Target** |  Pointer to **string** | The target the permission would grants rights on. | [optional] [readonly] 

## Methods

### NewPermissionDto

`func NewPermissionDto() *PermissionDto`

NewPermissionDto instantiates a new PermissionDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPermissionDtoWithDefaults

`func NewPermissionDtoWithDefaults() *PermissionDto`

NewPermissionDtoWithDefaults instantiates a new PermissionDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRights

`func (o *PermissionDto) GetRights() []string`

GetRights returns the Rights field if non-nil, zero value otherwise.

### GetRightsOk

`func (o *PermissionDto) GetRightsOk() (*[]string, bool)`

GetRightsOk returns a tuple with the Rights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRights

`func (o *PermissionDto) SetRights(v []string)`

SetRights sets Rights field to given value.

### HasRights

`func (o *PermissionDto) HasRights() bool`

HasRights returns a boolean if a field has been set.

### GetTarget

`func (o *PermissionDto) GetTarget() string`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *PermissionDto) GetTargetOk() (*string, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *PermissionDto) SetTarget(v string)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *PermissionDto) HasTarget() bool`

HasTarget returns a boolean if a field has been set.


[[Back to top]](#) 


