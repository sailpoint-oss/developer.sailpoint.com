---
id: access-profile-ref
title: AccessProfileRef
pagination_label: AccessProfileRef
sidebar_label: AccessProfileRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileRef', 'AccessProfileRef'] 
slug: /tools/sdk/go/v3/models/access-profile-ref
tags: ['SDK', 'Software Development Kit', 'AccessProfileRef', 'AccessProfileRef']
---

# AccessProfileRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the Access Profile | [optional] 
**Type** | Pointer to **string** | Type of requested object. This field must be either left null or set to &#39;ACCESS_PROFILE&#39; when creating an Access Profile, otherwise a 400 Bad Request error will result. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of the Access Profile. This field is ignored on input. | [optional] 

## Methods

### NewAccessProfileRef

`func NewAccessProfileRef() *AccessProfileRef`

NewAccessProfileRef instantiates a new AccessProfileRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileRefWithDefaults

`func NewAccessProfileRefWithDefaults() *AccessProfileRef`

NewAccessProfileRefWithDefaults instantiates a new AccessProfileRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessProfileRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *AccessProfileRef) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessProfileRef) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessProfileRef) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessProfileRef) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *AccessProfileRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessProfileRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessProfileRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessProfileRef) HasName() bool`

HasName returns a boolean if a field has been set.


