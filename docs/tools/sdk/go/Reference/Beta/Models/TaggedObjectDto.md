---
id: beta-tagged-object-dto
title: TaggedObjectDto
pagination_label: TaggedObjectDto
sidebar_label: TaggedObjectDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TaggedObjectDto', 'BetaTaggedObjectDto'] 
slug: /tools/sdk/go/beta/models/tagged-object-dto
tags: ['SDK', 'Software Development Kit', 'TaggedObjectDto', 'BetaTaggedObjectDto']
---

# TaggedObjectDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type | [optional] 
**Id** | Pointer to **string** | ID of the object this reference applies to | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the object this reference applies to | [optional] 

## Methods

### NewTaggedObjectDto

`func NewTaggedObjectDto() *TaggedObjectDto`

NewTaggedObjectDto instantiates a new TaggedObjectDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaggedObjectDtoWithDefaults

`func NewTaggedObjectDtoWithDefaults() *TaggedObjectDto`

NewTaggedObjectDtoWithDefaults instantiates a new TaggedObjectDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaggedObjectDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaggedObjectDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaggedObjectDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TaggedObjectDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *TaggedObjectDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaggedObjectDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaggedObjectDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TaggedObjectDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *TaggedObjectDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TaggedObjectDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TaggedObjectDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TaggedObjectDto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *TaggedObjectDto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *TaggedObjectDto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

