---
id: v2024-workgroup-dto
title: WorkgroupDto
pagination_label: WorkgroupDto
sidebar_label: WorkgroupDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkgroupDto', 'V2024WorkgroupDto'] 
slug: /tools/sdk/go/v2024/models/workgroup-dto
tags: ['SDK', 'Software Development Kit', 'WorkgroupDto', 'V2024WorkgroupDto']
---

# WorkgroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Owner** | Pointer to [**WorkgroupDtoOwner**](workgroup-dto-owner) |  | [optional] 
**Id** | Pointer to **string** | Governance group ID. | [optional] [readonly] 
**Name** | Pointer to **string** | Governance group name. | [optional] 
**Description** | Pointer to **string** | Governance group description. | [optional] 
**MemberCount** | Pointer to **int64** | Number of members in the governance group. | [optional] [readonly] 
**ConnectionCount** | Pointer to **int64** | Number of connections in the governance group. | [optional] [readonly] 
**Created** | Pointer to **time.Time** |  | [optional] 
**Modified** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewWorkgroupDto

`func NewWorkgroupDto() *WorkgroupDto`

NewWorkgroupDto instantiates a new WorkgroupDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupDtoWithDefaults

`func NewWorkgroupDtoWithDefaults() *WorkgroupDto`

NewWorkgroupDtoWithDefaults instantiates a new WorkgroupDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwner

`func (o *WorkgroupDto) GetOwner() WorkgroupDtoOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *WorkgroupDto) GetOwnerOk() (*WorkgroupDtoOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *WorkgroupDto) SetOwner(v WorkgroupDtoOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *WorkgroupDto) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetId

`func (o *WorkgroupDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkgroupDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkgroupDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkgroupDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkgroupDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkgroupDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkgroupDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkgroupDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *WorkgroupDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkgroupDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkgroupDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkgroupDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMemberCount

`func (o *WorkgroupDto) GetMemberCount() int64`

GetMemberCount returns the MemberCount field if non-nil, zero value otherwise.

### GetMemberCountOk

`func (o *WorkgroupDto) GetMemberCountOk() (*int64, bool)`

GetMemberCountOk returns a tuple with the MemberCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberCount

`func (o *WorkgroupDto) SetMemberCount(v int64)`

SetMemberCount sets MemberCount field to given value.

### HasMemberCount

`func (o *WorkgroupDto) HasMemberCount() bool`

HasMemberCount returns a boolean if a field has been set.

### GetConnectionCount

`func (o *WorkgroupDto) GetConnectionCount() int64`

GetConnectionCount returns the ConnectionCount field if non-nil, zero value otherwise.

### GetConnectionCountOk

`func (o *WorkgroupDto) GetConnectionCountOk() (*int64, bool)`

GetConnectionCountOk returns a tuple with the ConnectionCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionCount

`func (o *WorkgroupDto) SetConnectionCount(v int64)`

SetConnectionCount sets ConnectionCount field to given value.

### HasConnectionCount

`func (o *WorkgroupDto) HasConnectionCount() bool`

HasConnectionCount returns a boolean if a field has been set.

### GetCreated

`func (o *WorkgroupDto) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *WorkgroupDto) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *WorkgroupDto) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *WorkgroupDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *WorkgroupDto) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *WorkgroupDto) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *WorkgroupDto) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *WorkgroupDto) HasModified() bool`

HasModified returns a boolean if a field has been set.


