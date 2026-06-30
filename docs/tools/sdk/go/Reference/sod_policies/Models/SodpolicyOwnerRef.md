---
id: v1-sodpolicy-owner-ref
title: SodpolicyOwnerRef
pagination_label: SodpolicyOwnerRef
sidebar_label: SodpolicyOwnerRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodpolicyOwnerRef', 'V1SodpolicyOwnerRef'] 
slug: /tools/sdk/go/sodpolicies/models/sodpolicy-owner-ref
tags: ['SDK', 'Software Development Kit', 'SodpolicyOwnerRef', 'V1SodpolicyOwnerRef']
---

# SodpolicyOwnerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner type. | [optional] 
**Id** | Pointer to **string** | Owner's ID. | [optional] 
**Name** | Pointer to **string** | Owner's name. | [optional] 

## Methods

### NewSodpolicyOwnerRef

`func NewSodpolicyOwnerRef() *SodpolicyOwnerRef`

NewSodpolicyOwnerRef instantiates a new SodpolicyOwnerRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodpolicyOwnerRefWithDefaults

`func NewSodpolicyOwnerRefWithDefaults() *SodpolicyOwnerRef`

NewSodpolicyOwnerRefWithDefaults instantiates a new SodpolicyOwnerRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SodpolicyOwnerRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodpolicyOwnerRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodpolicyOwnerRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodpolicyOwnerRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SodpolicyOwnerRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodpolicyOwnerRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodpolicyOwnerRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodpolicyOwnerRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodpolicyOwnerRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodpolicyOwnerRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodpolicyOwnerRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodpolicyOwnerRef) HasName() bool`

HasName returns a boolean if a field has been set.


