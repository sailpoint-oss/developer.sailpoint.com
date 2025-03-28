---
id: beta-bulk-workgroup-members-request-inner
title: BulkWorkgroupMembersRequestInner
pagination_label: BulkWorkgroupMembersRequestInner
sidebar_label: BulkWorkgroupMembersRequestInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkWorkgroupMembersRequestInner', 'BetaBulkWorkgroupMembersRequestInner'] 
slug: /tools/sdk/go/beta/models/bulk-workgroup-members-request-inner
tags: ['SDK', 'Software Development Kit', 'BulkWorkgroupMembersRequestInner', 'BetaBulkWorkgroupMembersRequestInner']
---

# BulkWorkgroupMembersRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Identity&#39;s DTO type. | [optional] 
**Id** | Pointer to **string** | Identity ID. | [optional] 
**Name** | Pointer to **string** | Identity&#39;s display name. | [optional] 

## Methods

### NewBulkWorkgroupMembersRequestInner

`func NewBulkWorkgroupMembersRequestInner() *BulkWorkgroupMembersRequestInner`

NewBulkWorkgroupMembersRequestInner instantiates a new BulkWorkgroupMembersRequestInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkWorkgroupMembersRequestInnerWithDefaults

`func NewBulkWorkgroupMembersRequestInnerWithDefaults() *BulkWorkgroupMembersRequestInner`

NewBulkWorkgroupMembersRequestInnerWithDefaults instantiates a new BulkWorkgroupMembersRequestInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BulkWorkgroupMembersRequestInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BulkWorkgroupMembersRequestInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BulkWorkgroupMembersRequestInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BulkWorkgroupMembersRequestInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *BulkWorkgroupMembersRequestInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BulkWorkgroupMembersRequestInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BulkWorkgroupMembersRequestInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BulkWorkgroupMembersRequestInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BulkWorkgroupMembersRequestInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BulkWorkgroupMembersRequestInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BulkWorkgroupMembersRequestInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BulkWorkgroupMembersRequestInner) HasName() bool`

HasName returns a boolean if a field has been set.


