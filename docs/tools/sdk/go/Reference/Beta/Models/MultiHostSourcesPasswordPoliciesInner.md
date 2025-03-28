---
id: beta-multi-host-sources-password-policies-inner
title: MultiHostSourcesPasswordPoliciesInner
pagination_label: MultiHostSourcesPasswordPoliciesInner
sidebar_label: MultiHostSourcesPasswordPoliciesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostSourcesPasswordPoliciesInner', 'BetaMultiHostSourcesPasswordPoliciesInner'] 
slug: /tools/sdk/go/beta/models/multi-host-sources-password-policies-inner
tags: ['SDK', 'Software Development Kit', 'MultiHostSourcesPasswordPoliciesInner', 'BetaMultiHostSourcesPasswordPoliciesInner']
---

# MultiHostSourcesPasswordPoliciesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Policy ID. | [optional] 
**Name** | Pointer to **string** | Policy&#39;s human-readable display name. | [optional] 

## Methods

### NewMultiHostSourcesPasswordPoliciesInner

`func NewMultiHostSourcesPasswordPoliciesInner() *MultiHostSourcesPasswordPoliciesInner`

NewMultiHostSourcesPasswordPoliciesInner instantiates a new MultiHostSourcesPasswordPoliciesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostSourcesPasswordPoliciesInnerWithDefaults

`func NewMultiHostSourcesPasswordPoliciesInnerWithDefaults() *MultiHostSourcesPasswordPoliciesInner`

NewMultiHostSourcesPasswordPoliciesInnerWithDefaults instantiates a new MultiHostSourcesPasswordPoliciesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *MultiHostSourcesPasswordPoliciesInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MultiHostSourcesPasswordPoliciesInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MultiHostSourcesPasswordPoliciesInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MultiHostSourcesPasswordPoliciesInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *MultiHostSourcesPasswordPoliciesInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MultiHostSourcesPasswordPoliciesInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MultiHostSourcesPasswordPoliciesInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MultiHostSourcesPasswordPoliciesInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MultiHostSourcesPasswordPoliciesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostSourcesPasswordPoliciesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostSourcesPasswordPoliciesInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MultiHostSourcesPasswordPoliciesInner) HasName() bool`

HasName returns a boolean if a field has been set.


