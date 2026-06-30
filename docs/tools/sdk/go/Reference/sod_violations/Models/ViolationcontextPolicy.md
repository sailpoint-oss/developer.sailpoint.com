---
id: v1-violationcontext-policy
title: ViolationcontextPolicy
pagination_label: ViolationcontextPolicy
sidebar_label: ViolationcontextPolicy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ViolationcontextPolicy', 'V1ViolationcontextPolicy'] 
slug: /tools/sdk/go/sodviolations/models/violationcontext-policy
tags: ['SDK', 'Software Development Kit', 'ViolationcontextPolicy', 'V1ViolationcontextPolicy']
---

# ViolationcontextPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of object that is referenced | [optional] 
**Id** | Pointer to **string** | SOD policy ID. | [optional] 
**Name** | Pointer to **string** |  | [optional] 

## Methods

### NewViolationcontextPolicy

`func NewViolationcontextPolicy() *ViolationcontextPolicy`

NewViolationcontextPolicy instantiates a new ViolationcontextPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewViolationcontextPolicyWithDefaults

`func NewViolationcontextPolicyWithDefaults() *ViolationcontextPolicy`

NewViolationcontextPolicyWithDefaults instantiates a new ViolationcontextPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ViolationcontextPolicy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ViolationcontextPolicy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ViolationcontextPolicy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ViolationcontextPolicy) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ViolationcontextPolicy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ViolationcontextPolicy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ViolationcontextPolicy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ViolationcontextPolicy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ViolationcontextPolicy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ViolationcontextPolicy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ViolationcontextPolicy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ViolationcontextPolicy) HasName() bool`

HasName returns a boolean if a field has been set.


