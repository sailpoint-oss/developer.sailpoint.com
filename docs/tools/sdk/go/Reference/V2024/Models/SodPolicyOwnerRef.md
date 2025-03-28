---
id: v2024-sod-policy-owner-ref
title: SodPolicyOwnerRef
pagination_label: SodPolicyOwnerRef
sidebar_label: SodPolicyOwnerRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodPolicyOwnerRef', 'V2024SodPolicyOwnerRef'] 
slug: /tools/sdk/go/v2024/models/sod-policy-owner-ref
tags: ['SDK', 'Software Development Kit', 'SodPolicyOwnerRef', 'V2024SodPolicyOwnerRef']
---

# SodPolicyOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner type. | [optional] 
**Id** | Pointer to **string** | Owner&#39;s ID. | [optional] 
**Name** | Pointer to **string** | Owner&#39;s name. | [optional] 

## Methods

### NewSodPolicyOwnerRef

`func NewSodPolicyOwnerRef() *SodPolicyOwnerRef`

NewSodPolicyOwnerRef instantiates a new SodPolicyOwnerRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyOwnerRefWithDefaults

`func NewSodPolicyOwnerRefWithDefaults() *SodPolicyOwnerRef`

NewSodPolicyOwnerRefWithDefaults instantiates a new SodPolicyOwnerRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SodPolicyOwnerRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodPolicyOwnerRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodPolicyOwnerRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodPolicyOwnerRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SodPolicyOwnerRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodPolicyOwnerRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodPolicyOwnerRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodPolicyOwnerRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodPolicyOwnerRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodPolicyOwnerRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodPolicyOwnerRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodPolicyOwnerRef) HasName() bool`

HasName returns a boolean if a field has been set.


