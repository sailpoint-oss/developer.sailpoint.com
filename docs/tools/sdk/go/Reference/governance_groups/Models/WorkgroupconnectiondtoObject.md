---
id: v1-workgroupconnectiondto-object
title: WorkgroupconnectiondtoObject
pagination_label: WorkgroupconnectiondtoObject
sidebar_label: WorkgroupconnectiondtoObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkgroupconnectiondtoObject', 'V1WorkgroupconnectiondtoObject'] 
slug: /tools/sdk/go/governancegroups/models/workgroupconnectiondto-object
tags: ['SDK', 'Software Development Kit', 'WorkgroupconnectiondtoObject', 'V1WorkgroupconnectiondtoObject']
---

# WorkgroupconnectiondtoObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**Connectedobjecttype**](connectedobjecttype) |  | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **string** | Human-readable name of Connected object | [optional] 
**Description** | Pointer to **NullableString** | Description of the Connected object. | [optional] 

## Methods

### NewWorkgroupconnectiondtoObject

`func NewWorkgroupconnectiondtoObject() *WorkgroupconnectiondtoObject`

NewWorkgroupconnectiondtoObject instantiates a new WorkgroupconnectiondtoObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupconnectiondtoObjectWithDefaults

`func NewWorkgroupconnectiondtoObjectWithDefaults() *WorkgroupconnectiondtoObject`

NewWorkgroupconnectiondtoObjectWithDefaults instantiates a new WorkgroupconnectiondtoObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *WorkgroupconnectiondtoObject) GetType() Connectedobjecttype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkgroupconnectiondtoObject) GetTypeOk() (*Connectedobjecttype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkgroupconnectiondtoObject) SetType(v Connectedobjecttype)`

SetType sets Type field to given value.

### HasType

`func (o *WorkgroupconnectiondtoObject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *WorkgroupconnectiondtoObject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkgroupconnectiondtoObject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkgroupconnectiondtoObject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkgroupconnectiondtoObject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkgroupconnectiondtoObject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkgroupconnectiondtoObject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkgroupconnectiondtoObject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkgroupconnectiondtoObject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *WorkgroupconnectiondtoObject) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkgroupconnectiondtoObject) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkgroupconnectiondtoObject) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkgroupconnectiondtoObject) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *WorkgroupconnectiondtoObject) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *WorkgroupconnectiondtoObject) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil

