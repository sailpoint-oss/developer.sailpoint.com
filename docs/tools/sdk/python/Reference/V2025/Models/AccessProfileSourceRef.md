---
id: v2025-access-profile-source-ref
title: AccessProfileSourceRef
pagination_label: AccessProfileSourceRef
sidebar_label: AccessProfileSourceRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileSourceRef', 'V2025AccessProfileSourceRef'] 
slug: /tools/sdk/go/v2025/models/access-profile-source-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileSourceRef', 'V2025AccessProfileSourceRef']
---

# AccessProfileSourceRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the source the access profile is associated with. | [optional] 
**Type** | Pointer to **string** | Source's DTO type. | [optional] 
**Name** | Pointer to **string** | Source name. | [optional] 

## Methods

### NewAccessProfileSourceRef

`func NewAccessProfileSourceRef() *AccessProfileSourceRef`

NewAccessProfileSourceRef instantiates a new AccessProfileSourceRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileSourceRefWithDefaults

`func NewAccessProfileSourceRefWithDefaults() *AccessProfileSourceRef`

NewAccessProfileSourceRefWithDefaults instantiates a new AccessProfileSourceRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileSourceRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileSourceRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileSourceRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileSourceRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccessProfileSourceRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessProfileSourceRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessProfileSourceRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessProfileSourceRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *AccessProfileSourceRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileSourceRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileSourceRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfileSourceRef) HasName() bool`

HasName returns a boolean if a field has been set.


