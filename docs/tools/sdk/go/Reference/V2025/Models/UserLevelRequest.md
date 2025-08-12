---
id: v2025-user-level-request
title: UserLevelRequest
pagination_label: UserLevelRequest
sidebar_label: UserLevelRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UserLevelRequest', 'V2025UserLevelRequest'] 
slug: /tools/sdk/go/v2025/models/user-level-request
tags: ['SDK', 'Software Development Kit', 'UserLevelRequest', 'V2025UserLevelRequest']
---

# UserLevelRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the user level. | 
**Description** | **string** | A brief description of the user level. | 
**Owner** | [**BaseReferenceDto**](base-reference-dto) |  | 
**RightSets** | Pointer to **[]string** | A list of rights associated with the user level. | [optional] 

## Methods

### NewUserLevelRequest

`func NewUserLevelRequest(name string, description string, owner BaseReferenceDto, ) *UserLevelRequest`

NewUserLevelRequest instantiates a new UserLevelRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserLevelRequestWithDefaults

`func NewUserLevelRequestWithDefaults() *UserLevelRequest`

NewUserLevelRequestWithDefaults instantiates a new UserLevelRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *UserLevelRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserLevelRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserLevelRequest) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *UserLevelRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UserLevelRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UserLevelRequest) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetOwner

`func (o *UserLevelRequest) GetOwner() BaseReferenceDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *UserLevelRequest) GetOwnerOk() (*BaseReferenceDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *UserLevelRequest) SetOwner(v BaseReferenceDto)`

SetOwner sets Owner field to given value.


### GetRightSets

`func (o *UserLevelRequest) GetRightSets() []string`

GetRightSets returns the RightSets field if non-nil, zero value otherwise.

### GetRightSetsOk

`func (o *UserLevelRequest) GetRightSetsOk() (*[]string, bool)`

GetRightSetsOk returns a tuple with the RightSets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRightSets

`func (o *UserLevelRequest) SetRightSets(v []string)`

SetRightSets sets RightSets field to given value.

### HasRightSets

`func (o *UserLevelRequest) HasRightSets() bool`

HasRightSets returns a boolean if a field has been set.


