---
id: beta-workgroup-dto-owner
title: WorkgroupDtoOwner
pagination_label: WorkgroupDtoOwner
sidebar_label: WorkgroupDtoOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkgroupDtoOwner', 'BetaWorkgroupDtoOwner'] 
slug: /tools/sdk/go/beta/models/workgroup-dto-owner
tags: ['SDK', 'Software Development Kit', 'WorkgroupDtoOwner', 'BetaWorkgroupDtoOwner']
---

# WorkgroupDtoOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner&#39;s DTO type. | [optional] 
**Id** | Pointer to **string** | Owner&#39;s identity ID. | [optional] 
**Name** | Pointer to **string** | Owner&#39;s name. | [optional] 
**DisplayName** | Pointer to **string** | The display name of the identity | [optional] [readonly] 
**EmailAddress** | Pointer to **string** | The primary email address of the identity | [optional] [readonly] 

## Methods

### NewWorkgroupDtoOwner

`func NewWorkgroupDtoOwner() *WorkgroupDtoOwner`

NewWorkgroupDtoOwner instantiates a new WorkgroupDtoOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupDtoOwnerWithDefaults

`func NewWorkgroupDtoOwnerWithDefaults() *WorkgroupDtoOwner`

NewWorkgroupDtoOwnerWithDefaults instantiates a new WorkgroupDtoOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *WorkgroupDtoOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkgroupDtoOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkgroupDtoOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkgroupDtoOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *WorkgroupDtoOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkgroupDtoOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkgroupDtoOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkgroupDtoOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkgroupDtoOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkgroupDtoOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkgroupDtoOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkgroupDtoOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *WorkgroupDtoOwner) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *WorkgroupDtoOwner) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *WorkgroupDtoOwner) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *WorkgroupDtoOwner) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetEmailAddress

`func (o *WorkgroupDtoOwner) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *WorkgroupDtoOwner) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *WorkgroupDtoOwner) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *WorkgroupDtoOwner) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.


