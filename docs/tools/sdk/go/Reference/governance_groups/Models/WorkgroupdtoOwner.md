---
id: v1-workgroupdto-owner
title: WorkgroupdtoOwner
pagination_label: WorkgroupdtoOwner
sidebar_label: WorkgroupdtoOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkgroupdtoOwner', 'V1WorkgroupdtoOwner'] 
slug: /tools/sdk/go/governancegroups/models/workgroupdto-owner
tags: ['SDK', 'Software Development Kit', 'WorkgroupdtoOwner', 'V1WorkgroupdtoOwner']
---

# WorkgroupdtoOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Owner's name. | [optional] 
**DisplayName** | Pointer to **string** | The display name of the identity | [optional] [readonly] 
**EmailAddress** | Pointer to **string** | The primary email address of the identity | [optional] [readonly] 

## Methods

### NewWorkgroupdtoOwner

`func NewWorkgroupdtoOwner() *WorkgroupdtoOwner`

NewWorkgroupdtoOwner instantiates a new WorkgroupdtoOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupdtoOwnerWithDefaults

`func NewWorkgroupdtoOwnerWithDefaults() *WorkgroupdtoOwner`

NewWorkgroupdtoOwnerWithDefaults instantiates a new WorkgroupdtoOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *WorkgroupdtoOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *WorkgroupdtoOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *WorkgroupdtoOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *WorkgroupdtoOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *WorkgroupdtoOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkgroupdtoOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkgroupdtoOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *WorkgroupdtoOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *WorkgroupdtoOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *WorkgroupdtoOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *WorkgroupdtoOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *WorkgroupdtoOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDisplayName

`func (o *WorkgroupdtoOwner) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *WorkgroupdtoOwner) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *WorkgroupdtoOwner) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *WorkgroupdtoOwner) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetEmailAddress

`func (o *WorkgroupdtoOwner) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *WorkgroupdtoOwner) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *WorkgroupdtoOwner) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *WorkgroupdtoOwner) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.


