---
id: tagged-object-object-ref
title: TaggedObjectObjectRef
pagination_label: TaggedObjectObjectRef
sidebar_label: TaggedObjectObjectRef
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TaggedObjectObjectRef'] 
slug: /tools/sdk/go/beta/models/tagged-object-object-ref
tags: ['SDK', 'Software Development Kit', 'TaggedObjectObjectRef']
---

# TaggedObjectObjectRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | DTO type | [optional] 
**Id** |  Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **NullableString** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewTaggedObjectObjectRef

`func NewTaggedObjectObjectRef() *TaggedObjectObjectRef`

NewTaggedObjectObjectRef instantiates a new TaggedObjectObjectRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaggedObjectObjectRefWithDefaults

`func NewTaggedObjectObjectRefWithDefaults() *TaggedObjectObjectRef`

NewTaggedObjectObjectRefWithDefaults instantiates a new TaggedObjectObjectRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TaggedObjectObjectRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TaggedObjectObjectRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TaggedObjectObjectRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TaggedObjectObjectRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *TaggedObjectObjectRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TaggedObjectObjectRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TaggedObjectObjectRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TaggedObjectObjectRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *TaggedObjectObjectRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TaggedObjectObjectRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TaggedObjectObjectRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TaggedObjectObjectRef) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *TaggedObjectObjectRef) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *TaggedObjectObjectRef) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

[[Back to top]](#) 


