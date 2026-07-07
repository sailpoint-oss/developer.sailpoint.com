---
id: v1-assignresourceownerrequest
title: Assignresourceownerrequest
pagination_label: Assignresourceownerrequest
sidebar_label: Assignresourceownerrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Assignresourceownerrequest', 'V1Assignresourceownerrequest'] 
slug: /tools/sdk/go/dataaccesssecurity/models/assignresourceownerrequest
tags: ['SDK', 'Software Development Kit', 'Assignresourceownerrequest', 'V1Assignresourceownerrequest']
---

# Assignresourceownerrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | Pointer to **int64** | The unique identifier of the application containing the resource. | [optional] 
**FullPath** | Pointer to **NullableString** | The full path to the resource within the application (e.g., file path or object path). | [optional] 
**IdentityId** | Pointer to **string** | The unique identifier (UUID) of the identity to be assigned as the resource owner. | [optional] 

## Methods

### NewAssignresourceownerrequest

`func NewAssignresourceownerrequest() *Assignresourceownerrequest`

NewAssignresourceownerrequest instantiates a new Assignresourceownerrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssignresourceownerrequestWithDefaults

`func NewAssignresourceownerrequestWithDefaults() *Assignresourceownerrequest`

NewAssignresourceownerrequestWithDefaults instantiates a new Assignresourceownerrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppId

`func (o *Assignresourceownerrequest) GetAppId() int64`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *Assignresourceownerrequest) GetAppIdOk() (*int64, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *Assignresourceownerrequest) SetAppId(v int64)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *Assignresourceownerrequest) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### GetFullPath

`func (o *Assignresourceownerrequest) GetFullPath() string`

GetFullPath returns the FullPath field if non-nil, zero value otherwise.

### GetFullPathOk

`func (o *Assignresourceownerrequest) GetFullPathOk() (*string, bool)`

GetFullPathOk returns a tuple with the FullPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullPath

`func (o *Assignresourceownerrequest) SetFullPath(v string)`

SetFullPath sets FullPath field to given value.

### HasFullPath

`func (o *Assignresourceownerrequest) HasFullPath() bool`

HasFullPath returns a boolean if a field has been set.

### SetFullPathNil

`func (o *Assignresourceownerrequest) SetFullPathNil(b bool)`

 SetFullPathNil sets the value for FullPath to be an explicit nil

### UnsetFullPath
`func (o *Assignresourceownerrequest) UnsetFullPath()`

UnsetFullPath ensures that no value is present for FullPath, not even an explicit nil
### GetIdentityId

`func (o *Assignresourceownerrequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Assignresourceownerrequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Assignresourceownerrequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Assignresourceownerrequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.


