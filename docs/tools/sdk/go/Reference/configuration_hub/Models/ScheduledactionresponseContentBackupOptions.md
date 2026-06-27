---
id: v1-scheduledactionresponse-content-backup-options
title: ScheduledactionresponseContentBackupOptions
pagination_label: ScheduledactionresponseContentBackupOptions
sidebar_label: ScheduledactionresponseContentBackupOptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledactionresponseContentBackupOptions', 'V1ScheduledactionresponseContentBackupOptions'] 
slug: /tools/sdk/go/configurationhub/models/scheduledactionresponse-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContentBackupOptions', 'V1ScheduledactionresponseContentBackupOptions']
---

# ScheduledactionresponseContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | Pointer to **[]string** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue**](scheduledactionresponse-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Methods

### NewScheduledactionresponseContentBackupOptions

`func NewScheduledactionresponseContentBackupOptions() *ScheduledactionresponseContentBackupOptions`

NewScheduledactionresponseContentBackupOptions instantiates a new ScheduledactionresponseContentBackupOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledactionresponseContentBackupOptionsWithDefaults

`func NewScheduledactionresponseContentBackupOptionsWithDefaults() *ScheduledactionresponseContentBackupOptions`

NewScheduledactionresponseContentBackupOptionsWithDefaults instantiates a new ScheduledactionresponseContentBackupOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludeTypes

`func (o *ScheduledactionresponseContentBackupOptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *ScheduledactionresponseContentBackupOptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *ScheduledactionresponseContentBackupOptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *ScheduledactionresponseContentBackupOptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *ScheduledactionresponseContentBackupOptions) GetObjectOptions() map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *ScheduledactionresponseContentBackupOptions) GetObjectOptionsOk() (*map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *ScheduledactionresponseContentBackupOptions) SetObjectOptions(v map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *ScheduledactionresponseContentBackupOptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


