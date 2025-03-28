---
id: source-password-policies-inner
title: SourcePasswordPoliciesInner
pagination_label: SourcePasswordPoliciesInner
sidebar_label: SourcePasswordPoliciesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourcePasswordPoliciesInner', 'SourcePasswordPoliciesInner'] 
slug: /tools/sdk/go/v3/models/source-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'SourcePasswordPoliciesInner', 'SourcePasswordPoliciesInner']
---

# SourcePasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Policy ID. | [optional] 
**Name** | Pointer to **string** | Policy&#39;s human-readable display name. | [optional] 

## Methods

### NewSourcePasswordPoliciesInner

`func NewSourcePasswordPoliciesInner() *SourcePasswordPoliciesInner`

NewSourcePasswordPoliciesInner instantiates a new SourcePasswordPoliciesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcePasswordPoliciesInnerWithDefaults

`func NewSourcePasswordPoliciesInnerWithDefaults() *SourcePasswordPoliciesInner`

NewSourcePasswordPoliciesInnerWithDefaults instantiates a new SourcePasswordPoliciesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourcePasswordPoliciesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourcePasswordPoliciesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourcePasswordPoliciesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourcePasswordPoliciesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourcePasswordPoliciesInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourcePasswordPoliciesInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourcePasswordPoliciesInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourcePasswordPoliciesInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourcePasswordPoliciesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourcePasswordPoliciesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourcePasswordPoliciesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourcePasswordPoliciesInner) HasName() bool`

HasName returns a boolean if a field has been set.


