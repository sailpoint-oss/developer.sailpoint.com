---
id: v1-identityentitlements
title: Identityentitlements
pagination_label: Identityentitlements
sidebar_label: Identityentitlements
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityentitlements', 'V1Identityentitlements'] 
slug: /tools/sdk/go/identities/models/identityentitlements
tags: ['SDK', 'Software Development Kit', 'Identityentitlements', 'V1Identityentitlements']
---

# Identityentitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | Pointer to [**Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | Pointer to **[]string** | Labels to be applied to object. | [optional] 

## Methods

### NewIdentityentitlements

`func NewIdentityentitlements() *Identityentitlements`

NewIdentityentitlements instantiates a new Identityentitlements object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityentitlementsWithDefaults

`func NewIdentityentitlementsWithDefaults() *Identityentitlements`

NewIdentityentitlementsWithDefaults instantiates a new Identityentitlements object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetObjectRef

`func (o *Identityentitlements) GetObjectRef() Taggedobjectdto`

GetObjectRef returns the ObjectRef field if non-nil, zero value otherwise.

### GetObjectRefOk

`func (o *Identityentitlements) GetObjectRefOk() (*Taggedobjectdto, bool)`

GetObjectRefOk returns a tuple with the ObjectRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectRef

`func (o *Identityentitlements) SetObjectRef(v Taggedobjectdto)`

SetObjectRef sets ObjectRef field to given value.

### HasObjectRef

`func (o *Identityentitlements) HasObjectRef() bool`

HasObjectRef returns a boolean if a field has been set.

### GetTags

`func (o *Identityentitlements) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Identityentitlements) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Identityentitlements) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Identityentitlements) HasTags() bool`

HasTags returns a boolean if a field has been set.


