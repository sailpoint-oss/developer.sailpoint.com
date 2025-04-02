---
id: scheduled-action-response-content-backup-options
title: ScheduledActionResponseContentBackupOptions
pagination_label: ScheduledActionResponseContentBackupOptions
sidebar_label: ScheduledActionResponseContentBackupOptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledActionResponseContentBackupOptions', 'ScheduledActionResponseContentBackupOptions'] 
slug: /tools/sdk/go//models/scheduled-action-response-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponseContentBackupOptions', 'ScheduledActionResponseContentBackupOptions']
---

# ScheduledActionResponseContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | Pointer to **[]string** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue**](scheduled-action-response-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Methods

### NewScheduledActionResponseContentBackupOptions

`func NewScheduledActionResponseContentBackupOptions() *ScheduledActionResponseContentBackupOptions`

NewScheduledActionResponseContentBackupOptions instantiates a new ScheduledActionResponseContentBackupOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledActionResponseContentBackupOptionsWithDefaults

`func NewScheduledActionResponseContentBackupOptionsWithDefaults() *ScheduledActionResponseContentBackupOptions`

NewScheduledActionResponseContentBackupOptionsWithDefaults instantiates a new ScheduledActionResponseContentBackupOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludeTypes

`func (o *ScheduledActionResponseContentBackupOptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *ScheduledActionResponseContentBackupOptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *ScheduledActionResponseContentBackupOptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *ScheduledActionResponseContentBackupOptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *ScheduledActionResponseContentBackupOptions) GetObjectOptions() map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *ScheduledActionResponseContentBackupOptions) GetObjectOptionsOk() (*map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *ScheduledActionResponseContentBackupOptions) SetObjectOptions(v map[string]ScheduledActionResponseContentBackupOptionsObjectOptionsValue)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *ScheduledActionResponseContentBackupOptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


