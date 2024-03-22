---
id: base-reference-dto
title: BaseReferenceDto
pagination_label: BaseReferenceDto
sidebar_label: BaseReferenceDto
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'BaseReferenceDto'] 
slug: /tools/sdk/go/beta/models/base-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseReferenceDto']
---

# BaseReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | the application ID | [optional] 
**Name** |  Pointer to **string** | the application name | [optional] 

## Methods

### NewBaseReferenceDto

`func NewBaseReferenceDto() *BaseReferenceDto`

NewBaseReferenceDto instantiates a new BaseReferenceDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseReferenceDtoWithDefaults

`func NewBaseReferenceDtoWithDefaults() *BaseReferenceDto`

NewBaseReferenceDtoWithDefaults instantiates a new BaseReferenceDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BaseReferenceDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BaseReferenceDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BaseReferenceDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BaseReferenceDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BaseReferenceDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BaseReferenceDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BaseReferenceDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BaseReferenceDto) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


