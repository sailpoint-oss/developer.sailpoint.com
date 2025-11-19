---
id: v2024-identity-entitlements
title: IdentityEntitlements
pagination_label: IdentityEntitlements
sidebar_label: IdentityEntitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityEntitlements', 'V2024IdentityEntitlements'] 
slug: /tools/sdk/go/v2024/models/identity-entitlements
tags: ['SDK', 'Software Development Kit', 'IdentityEntitlements', 'V2024IdentityEntitlements']
---

# IdentityEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | Pointer to [**TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | Pointer to **[]string** | Labels to be applied to object. | [optional] 

## Methods

### NewIdentityEntitlements

`func NewIdentityEntitlements() *IdentityEntitlements`

NewIdentityEntitlements instantiates a new IdentityEntitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityEntitlementsWithDefaults

`func NewIdentityEntitlementsWithDefaults() *IdentityEntitlements`

NewIdentityEntitlementsWithDefaults instantiates a new IdentityEntitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRef

`func (o *IdentityEntitlements) GetObjectRef() TaggedObjectDto`

GetObjectRef returns the ObjectRef field if non-nil, zero value otherwise.

### GetObjectRefOk

`func (o *IdentityEntitlements) GetObjectRefOk() (*TaggedObjectDto, bool)`

GetObjectRefOk returns a tuple with the ObjectRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRef

`func (o *IdentityEntitlements) SetObjectRef(v TaggedObjectDto)`

SetObjectRef sets ObjectRef field to given value.

### HasObjectRef

`func (o *IdentityEntitlements) HasObjectRef() bool`

HasObjectRef returns a boolean if a field has been set.

### GetTags

`func (o *IdentityEntitlements) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *IdentityEntitlements) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *IdentityEntitlements) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *IdentityEntitlements) HasTags() bool`

HasTags returns a boolean if a field has been set.


