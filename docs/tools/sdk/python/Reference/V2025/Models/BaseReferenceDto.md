---
id: v2025-base-reference-dto
title: BaseReferenceDto
pagination_label: BaseReferenceDto
sidebar_label: BaseReferenceDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseReferenceDto', 'V2025BaseReferenceDto'] 
slug: /tools/sdk/go/v2025/models/base-reference-dto
tags: ['SDK', 'Software Development Kit', 'BaseReferenceDto', 'V2025BaseReferenceDto']
---

# BaseReferenceDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the object to which this reference applies | [optional] 

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

### GetType

`func (o *BaseReferenceDto) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BaseReferenceDto) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BaseReferenceDto) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *BaseReferenceDto) HasType() bool`

HasType returns a boolean if a field has been set.

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


