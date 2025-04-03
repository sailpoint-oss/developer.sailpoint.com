---
id: v2024-role-target-dto
title: RoleTargetDto
pagination_label: RoleTargetDto
sidebar_label: RoleTargetDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleTargetDto', 'V2024RoleTargetDto'] 
slug: /tools/sdk/go/v2024/models/role-target-dto
tags: ['SDK', 'Software Development Kit', 'RoleTargetDto', 'V2024RoleTargetDto']
---

# RoleTargetDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | Pointer to [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**AccountInfo** | Pointer to [**AccountInfoDto**](account-info-dto) |  | [optional] 
**RoleName** | Pointer to **string** | Specific role name for this target if using multiple accounts | [optional] 

## Methods

### NewRoleTargetDto

`func NewRoleTargetDto() *RoleTargetDto`

NewRoleTargetDto instantiates a new RoleTargetDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleTargetDtoWithDefaults

`func NewRoleTargetDtoWithDefaults() *RoleTargetDto`

NewRoleTargetDtoWithDefaults instantiates a new RoleTargetDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *RoleTargetDto) GetSource() BaseReferenceDto`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *RoleTargetDto) GetSourceOk() (*BaseReferenceDto, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *RoleTargetDto) SetSource(v BaseReferenceDto)`

SetSource sets Source field to given value.

### HasSource

`func (o *RoleTargetDto) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAccountInfo

`func (o *RoleTargetDto) GetAccountInfo() AccountInfoDto`

GetAccountInfo returns the AccountInfo field if non-nil, zero value otherwise.

### GetAccountInfoOk

`func (o *RoleTargetDto) GetAccountInfoOk() (*AccountInfoDto, bool)`

GetAccountInfoOk returns a tuple with the AccountInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountInfo

`func (o *RoleTargetDto) SetAccountInfo(v AccountInfoDto)`

SetAccountInfo sets AccountInfo field to given value.

### HasAccountInfo

`func (o *RoleTargetDto) HasAccountInfo() bool`

HasAccountInfo returns a boolean if a field has been set.

### GetRoleName

`func (o *RoleTargetDto) GetRoleName() string`

GetRoleName returns the RoleName field if non-nil, zero value otherwise.

### GetRoleNameOk

`func (o *RoleTargetDto) GetRoleNameOk() (*string, bool)`

GetRoleNameOk returns a tuple with the RoleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleName

`func (o *RoleTargetDto) SetRoleName(v string)`

SetRoleName sets RoleName field to given value.

### HasRoleName

`func (o *RoleTargetDto) HasRoleName() bool`

HasRoleName returns a boolean if a field has been set.


