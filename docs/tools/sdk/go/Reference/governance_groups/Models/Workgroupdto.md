---
id: v1-workgroupdto
title: Workgroupdto
pagination_label: Workgroupdto
sidebar_label: Workgroupdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Workgroupdto', 'V1Workgroupdto'] 
slug: /tools/sdk/go/governancegroups/models/workgroupdto
tags: ['SDK', 'Software Development Kit', 'Workgroupdto', 'V1Workgroupdto']
---

# Workgroupdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Owner** | Pointer to [**WorkgroupdtoOwner**](workgroupdto-owner) |  | [optional] 
**Id** | Pointer to **string** | Governance group ID. | [optional] [readonly] 
**Name** | Pointer to **string** | Governance group name. | [optional] 
**Description** | Pointer to **string** | Governance group description. | [optional] 
**MemberCount** | Pointer to **int64** | Number of members in the governance group. | [optional] [readonly] 
**ConnectionCount** | Pointer to **int64** | Number of connections in the governance group. | [optional] [readonly] 
**Created** | Pointer to **SailPointTime** |  | [optional] 
**Modified** | Pointer to **SailPointTime** |  | [optional] 

## Methods

### NewWorkgroupdto

`func NewWorkgroupdto() *Workgroupdto`

NewWorkgroupdto instantiates a new Workgroupdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupdtoWithDefaults

`func NewWorkgroupdtoWithDefaults() *Workgroupdto`

NewWorkgroupdtoWithDefaults instantiates a new Workgroupdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwner

`func (o *Workgroupdto) GetOwner() WorkgroupdtoOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Workgroupdto) GetOwnerOk() (*WorkgroupdtoOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Workgroupdto) SetOwner(v WorkgroupdtoOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Workgroupdto) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetId

`func (o *Workgroupdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Workgroupdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Workgroupdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Workgroupdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Workgroupdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Workgroupdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Workgroupdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Workgroupdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *Workgroupdto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Workgroupdto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Workgroupdto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Workgroupdto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMemberCount

`func (o *Workgroupdto) GetMemberCount() int64`

GetMemberCount returns the MemberCount field if non-nil, zero value otherwise.

### GetMemberCountOk

`func (o *Workgroupdto) GetMemberCountOk() (*int64, bool)`

GetMemberCountOk returns a tuple with the MemberCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMemberCount

`func (o *Workgroupdto) SetMemberCount(v int64)`

SetMemberCount sets MemberCount field to given value.

### HasMemberCount

`func (o *Workgroupdto) HasMemberCount() bool`

HasMemberCount returns a boolean if a field has been set.

### GetConnectionCount

`func (o *Workgroupdto) GetConnectionCount() int64`

GetConnectionCount returns the ConnectionCount field if non-nil, zero value otherwise.

### GetConnectionCountOk

`func (o *Workgroupdto) GetConnectionCountOk() (*int64, bool)`

GetConnectionCountOk returns a tuple with the ConnectionCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectionCount

`func (o *Workgroupdto) SetConnectionCount(v int64)`

SetConnectionCount sets ConnectionCount field to given value.

### HasConnectionCount

`func (o *Workgroupdto) HasConnectionCount() bool`

HasConnectionCount returns a boolean if a field has been set.

### GetCreated

`func (o *Workgroupdto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Workgroupdto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Workgroupdto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Workgroupdto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Workgroupdto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Workgroupdto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Workgroupdto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Workgroupdto) HasModified() bool`

HasModified returns a boolean if a field has been set.


