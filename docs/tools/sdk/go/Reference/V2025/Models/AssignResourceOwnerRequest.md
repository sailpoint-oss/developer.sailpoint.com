---
id: v2025-assign-resource-owner-request
title: AssignResourceOwnerRequest
pagination_label: AssignResourceOwnerRequest
sidebar_label: AssignResourceOwnerRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AssignResourceOwnerRequest', 'V2025AssignResourceOwnerRequest'] 
slug: /tools/sdk/go/v2025/models/assign-resource-owner-request
tags: ['SDK', 'Software Development Kit', 'AssignResourceOwnerRequest', 'V2025AssignResourceOwnerRequest']
---

# AssignResourceOwnerRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | Pointer to **int64** | The unique identifier of the application containing the resource. | [optional] 
**FullPath** | Pointer to **NullableString** | The full path to the resource within the application (e.g., file path or object path). | [optional] 
**IdentityId** | Pointer to **string** | The unique identifier (UUID) of the identity to be assigned as the resource owner. | [optional] 

## Methods

### NewAssignResourceOwnerRequest

`func NewAssignResourceOwnerRequest() *AssignResourceOwnerRequest`

NewAssignResourceOwnerRequest instantiates a new AssignResourceOwnerRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssignResourceOwnerRequestWithDefaults

`func NewAssignResourceOwnerRequestWithDefaults() *AssignResourceOwnerRequest`

NewAssignResourceOwnerRequestWithDefaults instantiates a new AssignResourceOwnerRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppId

`func (o *AssignResourceOwnerRequest) GetAppId() int64`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *AssignResourceOwnerRequest) GetAppIdOk() (*int64, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *AssignResourceOwnerRequest) SetAppId(v int64)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *AssignResourceOwnerRequest) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### GetFullPath

`func (o *AssignResourceOwnerRequest) GetFullPath() string`

GetFullPath returns the FullPath field if non-nil, zero value otherwise.

### GetFullPathOk

`func (o *AssignResourceOwnerRequest) GetFullPathOk() (*string, bool)`

GetFullPathOk returns a tuple with the FullPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullPath

`func (o *AssignResourceOwnerRequest) SetFullPath(v string)`

SetFullPath sets FullPath field to given value.

### HasFullPath

`func (o *AssignResourceOwnerRequest) HasFullPath() bool`

HasFullPath returns a boolean if a field has been set.

### SetFullPathNil

`func (o *AssignResourceOwnerRequest) SetFullPathNil(b bool)`

 SetFullPathNil sets the value for FullPath to be an explicit nil

### UnsetFullPath
`func (o *AssignResourceOwnerRequest) UnsetFullPath()`

UnsetFullPath ensures that no value is present for FullPath, not even an explicit nil
### GetIdentityId

`func (o *AssignResourceOwnerRequest) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AssignResourceOwnerRequest) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AssignResourceOwnerRequest) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AssignResourceOwnerRequest) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.


