---
id: source-management-workgroup
title: SourceManagementWorkgroup
pagination_label: SourceManagementWorkgroup
sidebar_label: SourceManagementWorkgroup
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceManagementWorkgroup', 'SourceManagementWorkgroup'] 
slug: /tools/sdk/go//models/source-management-workgroup
tags: ['SDK', 'Software Development Kit', 'SourceManagementWorkgroup', 'SourceManagementWorkgroup']
---

# SourceManagementWorkgroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Management workgroup ID. | [optional] 
**Name** | Pointer to **string** | Management workgroup's human-readable display name. | [optional] 

## Methods

### NewSourceManagementWorkgroup

`func NewSourceManagementWorkgroup() *SourceManagementWorkgroup`

NewSourceManagementWorkgroup instantiates a new SourceManagementWorkgroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceManagementWorkgroupWithDefaults

`func NewSourceManagementWorkgroupWithDefaults() *SourceManagementWorkgroup`

NewSourceManagementWorkgroupWithDefaults instantiates a new SourceManagementWorkgroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceManagementWorkgroup) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceManagementWorkgroup) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceManagementWorkgroup) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceManagementWorkgroup) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourceManagementWorkgroup) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceManagementWorkgroup) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceManagementWorkgroup) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceManagementWorkgroup) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceManagementWorkgroup) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceManagementWorkgroup) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceManagementWorkgroup) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceManagementWorkgroup) HasName() bool`

HasName returns a boolean if a field has been set.


