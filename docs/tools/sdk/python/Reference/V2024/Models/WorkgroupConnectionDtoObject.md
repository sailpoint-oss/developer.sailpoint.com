---
id: v2024-workgroup-connection-dto-object
title: WorkgroupConnectionDtoObject
pagination_label: WorkgroupConnectionDtoObject
sidebar_label: WorkgroupConnectionDtoObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkgroupConnectionDtoObject', 'V2024WorkgroupConnectionDtoObject'] 
slug: /tools/sdk/go/v2024/models/workgroup-connection-dto-object
tags: ['SDK', 'Software Development Kit', 'WorkgroupConnectionDtoObject', 'V2024WorkgroupConnectionDtoObject']
---

# WorkgroupConnectionDtoObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**ConnectedObjectType**](connected-object-type) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable name of Connected object | [optional] 
**Description** | Pointer to **NullableString** | Description of the Connected object. | [optional] 

## Methods

### NewWorkgroupConnectionDtoObject

`func NewWorkgroupConnectionDtoObject() *WorkgroupConnectionDtoObject`

NewWorkgroupConnectionDtoObject instantiates a new WorkgroupConnectionDtoObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupConnectionDtoObjectWithDefaults

`func NewWorkgroupConnectionDtoObjectWithDefaults() *WorkgroupConnectionDtoObject`

NewWorkgroupConnectionDtoObjectWithDefaults instantiates a new WorkgroupConnectionDtoObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *WorkgroupConnectionDtoObject) GetType() ConnectedObjectType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkgroupConnectionDtoObject) GetTypeOk() (*ConnectedObjectType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkgroupConnectionDtoObject) SetType(v ConnectedObjectType)`

SetType sets Type field to given value.

### HasType

`func (o *WorkgroupConnectionDtoObject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *WorkgroupConnectionDtoObject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkgroupConnectionDtoObject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkgroupConnectionDtoObject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkgroupConnectionDtoObject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkgroupConnectionDtoObject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkgroupConnectionDtoObject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkgroupConnectionDtoObject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkgroupConnectionDtoObject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *WorkgroupConnectionDtoObject) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkgroupConnectionDtoObject) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkgroupConnectionDtoObject) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkgroupConnectionDtoObject) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *WorkgroupConnectionDtoObject) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *WorkgroupConnectionDtoObject) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

