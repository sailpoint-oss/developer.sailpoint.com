---
id: v2025-role-match-dto
title: RoleMatchDto
pagination_label: RoleMatchDto
sidebar_label: RoleMatchDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMatchDto', 'V2025RoleMatchDto'] 
slug: /tools/sdk/go/v2025/models/role-match-dto
tags: ['SDK', 'Software Development Kit', 'RoleMatchDto', 'V2025RoleMatchDto']
---

# RoleMatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleRef** | Pointer to [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**MatchedAttributes** | Pointer to [**[]ContextAttributeDto**](context-attribute-dto) |  | [optional] 

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

### GetRoleRef

`func (o *RoleMatchDto) GetRoleRef() BaseReferenceDto`

GetRoleRef returns the RoleRef field if non-nil, zero value otherwise.

### GetRoleRefOk

`func (o *RoleMatchDto) GetRoleRefOk() (*BaseReferenceDto, bool)`

GetRoleRefOk returns a tuple with the RoleRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleRef

`func (o *RoleMatchDto) SetRoleRef(v BaseReferenceDto)`

SetRoleRef sets RoleRef field to given value.

### HasRoleRef

`func (o *RoleMatchDto) HasRoleRef() bool`

HasRoleRef returns a boolean if a field has been set.

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


