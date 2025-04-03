---
id: v2024-access-item-approver-dto
title: AccessItemApproverDto
pagination_label: AccessItemApproverDto
sidebar_label: AccessItemApproverDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemApproverDto', 'V2024AccessItemApproverDto'] 
slug: /tools/sdk/go/v2024/models/access-item-approver-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemApproverDto', 'V2024AccessItemApproverDto']
---

# AccessItemApproverDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity who approved the access item request. | [optional] 
**Id** | Pointer to **string** | ID of identity who approved the access item request. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity who approved the access item request. | [optional] 

## Methods

### NewAccessItemApproverDto

`func NewAccessItemApproverDto() *AccessItemApproverDto`

NewAccessItemApproverDto instantiates a new AccessItemApproverDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemApproverDtoWithDefaults

`func NewAccessItemApproverDtoWithDefaults() *AccessItemApproverDto`

NewAccessItemApproverDtoWithDefaults instantiates a new AccessItemApproverDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AccessItemApproverDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AccessItemApproverDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AccessItemApproverDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AccessItemApproverDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AccessItemApproverDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessItemApproverDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessItemApproverDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessItemApproverDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AccessItemApproverDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AccessItemApproverDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AccessItemApproverDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AccessItemApproverDto) HasName() bool`

HasName returns a boolean if a field has been set.


