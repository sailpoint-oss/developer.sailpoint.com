---
id: v1-scheduledactionpayload-content-backup-options
title: ScheduledactionpayloadContentBackupOptions
pagination_label: ScheduledactionpayloadContentBackupOptions
sidebar_label: ScheduledactionpayloadContentBackupOptions
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledactionpayloadContentBackupOptions', 'V1ScheduledactionpayloadContentBackupOptions'] 
slug: /tools/sdk/go/configurationhub/models/scheduledactionpayload-content-backup-options
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContentBackupOptions', 'V1ScheduledactionpayloadContentBackupOptions']
---

# ScheduledactionpayloadContentBackupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncludeTypes** | Pointer to **[]string** | Object types that are to be included in the backup. | [optional] 
**ObjectOptions** | Pointer to [**map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue**](scheduledactionresponse-content-backup-options-object-options-value) | Map of objectType string to the options to be passed to the target service for that objectType. | [optional] 

## Methods

### NewScheduledactionpayloadContentBackupOptions

`func NewScheduledactionpayloadContentBackupOptions() *ScheduledactionpayloadContentBackupOptions`

NewScheduledactionpayloadContentBackupOptions instantiates a new ScheduledactionpayloadContentBackupOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledactionpayloadContentBackupOptionsWithDefaults

`func NewScheduledactionpayloadContentBackupOptionsWithDefaults() *ScheduledactionpayloadContentBackupOptions`

NewScheduledactionpayloadContentBackupOptionsWithDefaults instantiates a new ScheduledactionpayloadContentBackupOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludeTypes

`func (o *ScheduledactionpayloadContentBackupOptions) GetIncludeTypes() []string`

GetIncludeTypes returns the IncludeTypes field if non-nil, zero value otherwise.

### GetIncludeTypesOk

`func (o *ScheduledactionpayloadContentBackupOptions) GetIncludeTypesOk() (*[]string, bool)`

GetIncludeTypesOk returns a tuple with the IncludeTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeTypes

`func (o *ScheduledactionpayloadContentBackupOptions) SetIncludeTypes(v []string)`

SetIncludeTypes sets IncludeTypes field to given value.

### HasIncludeTypes

`func (o *ScheduledactionpayloadContentBackupOptions) HasIncludeTypes() bool`

HasIncludeTypes returns a boolean if a field has been set.

### GetObjectOptions

`func (o *ScheduledactionpayloadContentBackupOptions) GetObjectOptions() map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue`

GetObjectOptions returns the ObjectOptions field if non-nil, zero value otherwise.

### GetObjectOptionsOk

`func (o *ScheduledactionpayloadContentBackupOptions) GetObjectOptionsOk() (*map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue, bool)`

GetObjectOptionsOk returns a tuple with the ObjectOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectOptions

`func (o *ScheduledactionpayloadContentBackupOptions) SetObjectOptions(v map[string]ScheduledactionresponseContentBackupOptionsObjectOptionsValue)`

SetObjectOptions sets ObjectOptions field to given value.

### HasObjectOptions

`func (o *ScheduledactionpayloadContentBackupOptions) HasObjectOptions() bool`

HasObjectOptions returns a boolean if a field has been set.


