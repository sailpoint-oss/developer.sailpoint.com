---
id: v1-scheduledactionpayload-content
title: ScheduledactionpayloadContent
pagination_label: ScheduledactionpayloadContent
sidebar_label: ScheduledactionpayloadContent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledactionpayloadContent', 'V1ScheduledactionpayloadContent'] 
slug: /tools/sdk/go/configurationhub/models/scheduledactionpayload-content
tags: ['SDK', 'Software Development Kit', 'ScheduledactionpayloadContent', 'V1ScheduledactionpayloadContent']
---

# ScheduledactionpayloadContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the scheduled action (maximum 50 characters). | 
**BackupOptions** | Pointer to [**ScheduledactionpayloadContentBackupOptions**](scheduledactionpayload-content-backup-options) |  | [optional] 
**SourceBackupId** | Pointer to **string** | ID of the source backup. Required for CREATE_DRAFT jobs. | [optional] 
**SourceTenant** | Pointer to **string** | Source tenant identifier. Required for CREATE_DRAFT jobs. | [optional] 
**DraftId** | Pointer to **string** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [optional] 

## Methods

### NewScheduledactionpayloadContent

`func NewScheduledactionpayloadContent(name string, ) *ScheduledactionpayloadContent`

NewScheduledactionpayloadContent instantiates a new ScheduledactionpayloadContent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledactionpayloadContentWithDefaults

`func NewScheduledactionpayloadContentWithDefaults() *ScheduledactionpayloadContent`

NewScheduledactionpayloadContentWithDefaults instantiates a new ScheduledactionpayloadContent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ScheduledactionpayloadContent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ScheduledactionpayloadContent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ScheduledactionpayloadContent) SetName(v string)`

SetName sets Name field to given value.


### GetBackupOptions

`func (o *ScheduledactionpayloadContent) GetBackupOptions() ScheduledactionpayloadContentBackupOptions`

GetBackupOptions returns the BackupOptions field if non-nil, zero value otherwise.

### GetBackupOptionsOk

`func (o *ScheduledactionpayloadContent) GetBackupOptionsOk() (*ScheduledactionpayloadContentBackupOptions, bool)`

GetBackupOptionsOk returns a tuple with the BackupOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackupOptions

`func (o *ScheduledactionpayloadContent) SetBackupOptions(v ScheduledactionpayloadContentBackupOptions)`

SetBackupOptions sets BackupOptions field to given value.

### HasBackupOptions

`func (o *ScheduledactionpayloadContent) HasBackupOptions() bool`

HasBackupOptions returns a boolean if a field has been set.

### GetSourceBackupId

`func (o *ScheduledactionpayloadContent) GetSourceBackupId() string`

GetSourceBackupId returns the SourceBackupId field if non-nil, zero value otherwise.

### GetSourceBackupIdOk

`func (o *ScheduledactionpayloadContent) GetSourceBackupIdOk() (*string, bool)`

GetSourceBackupIdOk returns a tuple with the SourceBackupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupId

`func (o *ScheduledactionpayloadContent) SetSourceBackupId(v string)`

SetSourceBackupId sets SourceBackupId field to given value.

### HasSourceBackupId

`func (o *ScheduledactionpayloadContent) HasSourceBackupId() bool`

HasSourceBackupId returns a boolean if a field has been set.

### GetSourceTenant

`func (o *ScheduledactionpayloadContent) GetSourceTenant() string`

GetSourceTenant returns the SourceTenant field if non-nil, zero value otherwise.

### GetSourceTenantOk

`func (o *ScheduledactionpayloadContent) GetSourceTenantOk() (*string, bool)`

GetSourceTenantOk returns a tuple with the SourceTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTenant

`func (o *ScheduledactionpayloadContent) SetSourceTenant(v string)`

SetSourceTenant sets SourceTenant field to given value.

### HasSourceTenant

`func (o *ScheduledactionpayloadContent) HasSourceTenant() bool`

HasSourceTenant returns a boolean if a field has been set.

### GetDraftId

`func (o *ScheduledactionpayloadContent) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *ScheduledactionpayloadContent) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *ScheduledactionpayloadContent) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.

### HasDraftId

`func (o *ScheduledactionpayloadContent) HasDraftId() bool`

HasDraftId returns a boolean if a field has been set.


