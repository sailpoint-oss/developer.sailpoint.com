---
id: role-match-dto
title: RoleMatchDto
pagination_label: RoleMatchDto
sidebar_label: RoleMatchDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleMatchDto'] 
slug: /tools/sdk/go/beta/models/role-match-dto
tags: ['SDK', 'Software Development Kit', 'RoleMatchDto']
---

# RoleMatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleName** |  Pointer to **string** | The name of the role | [optional] 
**MatchedAttributes** |  Pointer to [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

## Methods

### NewRoleMatchDto

`func NewRoleMatchDto() *RoleMatchDto`

NewRoleMatchDto instantiates a new RoleMatchDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMatchDtoWithDefaults

`func NewRoleMatchDtoWithDefaults() *RoleMatchDto`

NewRoleMatchDtoWithDefaults instantiates a new RoleMatchDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoleName

`func (o *RoleMatchDto) GetRoleName() string`

GetRoleName returns the RoleName field if non-nil, zero value otherwise.

### GetRoleNameOk

`func (o *RoleMatchDto) GetRoleNameOk() (*string, bool)`

GetRoleNameOk returns a tuple with the RoleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleName

`func (o *RoleMatchDto) SetRoleName(v string)`

SetRoleName sets RoleName field to given value.

### HasRoleName

`func (o *RoleMatchDto) HasRoleName() bool`

HasRoleName returns a boolean if a field has been set.

### GetMatchedAttributes

`func (o *RoleMatchDto) GetMatchedAttributes() []ContextAttributeDto`

GetMatchedAttributes returns the MatchedAttributes field if non-nil, zero value otherwise.

### GetMatchedAttributesOk

`func (o *RoleMatchDto) GetMatchedAttributesOk() (*[]ContextAttributeDto, bool)`

GetMatchedAttributesOk returns a tuple with the MatchedAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchedAttributes

`func (o *RoleMatchDto) SetMatchedAttributes(v []ContextAttributeDto)`

SetMatchedAttributes sets MatchedAttributes field to given value.

### HasMatchedAttributes

`func (o *RoleMatchDto) HasMatchedAttributes() bool`

HasMatchedAttributes returns a boolean if a field has been set.


[[Back to top]](#) 


