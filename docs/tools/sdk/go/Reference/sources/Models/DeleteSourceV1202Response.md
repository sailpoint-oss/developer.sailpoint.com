---
id: v1-delete-source-v1202-response
title: DeleteSourceV1202Response
pagination_label: DeleteSourceV1202Response
sidebar_label: DeleteSourceV1202Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeleteSourceV1202Response', 'V1DeleteSourceV1202Response'] 
slug: /tools/sdk/go/sources/models/delete-source-v1202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSourceV1202Response', 'V1DeleteSourceV1202Response']
---

# DeleteSourceV1202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Task result ID. | [optional] 
**Name** | Pointer to **string** | Task result's human-readable display name (this should be null/empty). | [optional] 

## Methods

### NewDeleteSourceV1202Response

`func NewDeleteSourceV1202Response() *DeleteSourceV1202Response`

NewDeleteSourceV1202Response instantiates a new DeleteSourceV1202Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteSourceV1202ResponseWithDefaults

`func NewDeleteSourceV1202ResponseWithDefaults() *DeleteSourceV1202Response`

NewDeleteSourceV1202ResponseWithDefaults instantiates a new DeleteSourceV1202Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *DeleteSourceV1202Response) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DeleteSourceV1202Response) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DeleteSourceV1202Response) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DeleteSourceV1202Response) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *DeleteSourceV1202Response) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DeleteSourceV1202Response) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DeleteSourceV1202Response) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DeleteSourceV1202Response) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DeleteSourceV1202Response) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DeleteSourceV1202Response) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DeleteSourceV1202Response) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DeleteSourceV1202Response) HasName() bool`

HasName returns a boolean if a field has been set.


