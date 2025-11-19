---
id: beta-base-role-reference-dto
title: BaseRoleReferenceDto
pagination_label: BaseRoleReferenceDto
sidebar_label: BaseRoleReferenceDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseRoleReferenceDto', 'BetaBaseRoleReferenceDto'] 
slug: /tools/sdk/go/beta/models/base-role-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseRoleReferenceDto', 'BetaBaseRoleReferenceDto']
---

# BaseRoleReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewBaseRoleReferenceDto

`func NewBaseRoleReferenceDto() *BaseRoleReferenceDto`

NewBaseRoleReferenceDto instantiates a new BaseRoleReferenceDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseRoleReferenceDtoWithDefaults

`func NewBaseRoleReferenceDtoWithDefaults() *BaseRoleReferenceDto`

NewBaseRoleReferenceDtoWithDefaults instantiates a new BaseRoleReferenceDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BaseRoleReferenceDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BaseRoleReferenceDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BaseRoleReferenceDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BaseRoleReferenceDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *BaseRoleReferenceDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseRoleReferenceDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseRoleReferenceDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseRoleReferenceDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseRoleReferenceDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseRoleReferenceDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseRoleReferenceDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BaseRoleReferenceDto) HasName() bool`

HasName returns a boolean if a field has been set.


