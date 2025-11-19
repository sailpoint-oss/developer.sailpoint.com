---
id: v2025-launcher-request-reference
title: LauncherRequestReference
pagination_label: LauncherRequestReference
sidebar_label: LauncherRequestReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LauncherRequestReference', 'V2025LauncherRequestReference'] 
slug: /tools/sdk/go/v2025/models/launcher-request-reference
tags: ['SDK', 'Software Development Kit', 'LauncherRequestReference', 'V2025LauncherRequestReference']
---

# LauncherRequestReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Type of Launcher reference | 
**Id** | **string** | ID of Launcher reference | 

## Methods

### NewLauncherRequestReference

`func NewLauncherRequestReference(type_ string, id string, ) *LauncherRequestReference`

NewLauncherRequestReference instantiates a new LauncherRequestReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLauncherRequestReferenceWithDefaults

`func NewLauncherRequestReferenceWithDefaults() *LauncherRequestReference`

NewLauncherRequestReferenceWithDefaults instantiates a new LauncherRequestReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LauncherRequestReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LauncherRequestReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LauncherRequestReference) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *LauncherRequestReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LauncherRequestReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LauncherRequestReference) SetId(v string)`

SetId sets Id field to given value.



