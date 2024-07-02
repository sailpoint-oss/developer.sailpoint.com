---
id: connected-object
title: ConnectedObject
pagination_label: ConnectedObject
sidebar_label: ConnectedObject
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ConnectedObject'] 
slug: /tools/sdk/go/beta/models/connected-object
tags: ['SDK', 'Software Development Kit', 'ConnectedObject']
---

# ConnectedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**ConnectedObjectType**](connected-object-type) |  | [optional] 
**Id** |  Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** |  Pointer to **string** | Human-readable name of Connected object | [optional] 
**Description** |  Pointer to **string** | Description of the Connected object. | [optional] 

## Methods

### NewConnectedObject

`func NewConnectedObject() *ConnectedObject`

NewConnectedObject instantiates a new ConnectedObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectedObjectWithDefaults

`func NewConnectedObjectWithDefaults() *ConnectedObject`

NewConnectedObjectWithDefaults instantiates a new ConnectedObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ConnectedObject) GetType() ConnectedObjectType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ConnectedObject) GetTypeOk() (*ConnectedObjectType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ConnectedObject) SetType(v ConnectedObjectType)`

SetType sets Type field to given value.

### HasType

`func (o *ConnectedObject) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ConnectedObject) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ConnectedObject) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ConnectedObject) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ConnectedObject) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ConnectedObject) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectedObject) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectedObject) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectedObject) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *ConnectedObject) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConnectedObject) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConnectedObject) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConnectedObject) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to top]](#) 


