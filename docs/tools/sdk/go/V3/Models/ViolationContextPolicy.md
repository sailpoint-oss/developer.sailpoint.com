---
id: violation-context-policy
title: ViolationContextPolicy
pagination_label: ViolationContextPolicy
sidebar_label: ViolationContextPolicy
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ViolationContextPolicy'] 
slug: /tools/sdk/go/v3/models/violation-context-policy
tags: ['SDK', 'Software Development Kit', 'ViolationContextPolicy']
---

# ViolationContextPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **map[string]interface{}** | The type of object that is referenced | [optional] 
**Id** |  Pointer to **string** | SOD policy ID. | [optional] 
**Name** |  Pointer to **string** |  | [optional] 

## Methods

### NewViolationContextPolicy

`func NewViolationContextPolicy() *ViolationContextPolicy`

NewViolationContextPolicy instantiates a new ViolationContextPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationContextPolicyWithDefaults

`func NewViolationContextPolicyWithDefaults() *ViolationContextPolicy`

NewViolationContextPolicyWithDefaults instantiates a new ViolationContextPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ViolationContextPolicy) GetType() map[string]interface{}`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ViolationContextPolicy) GetTypeOk() (*map[string]interface{}, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ViolationContextPolicy) SetType(v map[string]interface{})`

SetType sets Type field to given value.

### HasType

`func (o *ViolationContextPolicy) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ViolationContextPolicy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ViolationContextPolicy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ViolationContextPolicy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ViolationContextPolicy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ViolationContextPolicy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ViolationContextPolicy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ViolationContextPolicy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ViolationContextPolicy) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


