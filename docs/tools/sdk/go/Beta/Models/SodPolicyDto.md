---
id: sod-policy-dto
title: SodPolicyDto
pagination_label: SodPolicyDto
sidebar_label: SodPolicyDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SodPolicyDto'] 
slug: /tools/sdk/go/beta/models/sod-policy-dto
tags: ['SDK', 'Software Development Kit', 'SodPolicyDto']
---

# SodPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | SOD policy DTO type. | [optional] 
**Id** |  Pointer to **string** | SOD policy ID. | [optional] 
**Name** |  Pointer to **string** | SOD policy display name. | [optional] 

## Methods

### NewSodPolicyDto

`func NewSodPolicyDto() *SodPolicyDto`

NewSodPolicyDto instantiates a new SodPolicyDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyDtoWithDefaults

`func NewSodPolicyDtoWithDefaults() *SodPolicyDto`

NewSodPolicyDtoWithDefaults instantiates a new SodPolicyDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SodPolicyDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodPolicyDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodPolicyDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodPolicyDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SodPolicyDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodPolicyDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodPolicyDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodPolicyDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodPolicyDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodPolicyDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodPolicyDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodPolicyDto) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


