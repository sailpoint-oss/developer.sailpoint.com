---
id: v2025-launcher-reference
title: LauncherReference
pagination_label: LauncherReference
sidebar_label: LauncherReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LauncherReference', 'V2025LauncherReference'] 
slug: /tools/sdk/go/v2025/models/launcher-reference
tags: ['SDK', 'Software Development Kit', 'LauncherReference', 'V2025LauncherReference']
---

# LauncherReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of Launcher reference | [optional] 
**Id** | Pointer to **string** | ID of Launcher reference | [optional] 

## Methods

### NewLauncherReference

`func NewLauncherReference() *LauncherReference`

NewLauncherReference instantiates a new LauncherReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLauncherReferenceWithDefaults

`func NewLauncherReferenceWithDefaults() *LauncherReference`

NewLauncherReferenceWithDefaults instantiates a new LauncherReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LauncherReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LauncherReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LauncherReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LauncherReference) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *LauncherReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LauncherReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LauncherReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LauncherReference) HasId() bool`

HasId returns a boolean if a field has been set.


