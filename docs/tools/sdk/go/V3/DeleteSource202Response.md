---
id: delete-source202-response
title: DeleteSource202Response
pagination_label: DeleteSource202Response
sidebar_label: DeleteSource202Response
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'DeleteSource202Response'] 
slug: /tools/sdk/go/v3/models/delete-source202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSource202Response']
---

# DeleteSource202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | The type of object being referenced | [optional] 
**Id** |  Pointer to **string** | ID of the task result | [optional] 
**Name** |  Pointer to **string** | Human-readable display name of the task result (should be null/empty) | [optional] 

## Methods

### NewDeleteSource202Response

`func NewDeleteSource202Response() *DeleteSource202Response`

NewDeleteSource202Response instantiates a new DeleteSource202Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteSource202ResponseWithDefaults

`func NewDeleteSource202ResponseWithDefaults() *DeleteSource202Response`

NewDeleteSource202ResponseWithDefaults instantiates a new DeleteSource202Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DeleteSource202Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DeleteSource202Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DeleteSource202Response) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DeleteSource202Response) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *DeleteSource202Response) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeleteSource202Response) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeleteSource202Response) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DeleteSource202Response) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DeleteSource202Response) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeleteSource202Response) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeleteSource202Response) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DeleteSource202Response) HasName() bool`

HasName returns a boolean if a field has been set.


[[Back to top]](#) 


