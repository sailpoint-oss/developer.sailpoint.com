---
id: v2024-scheduled-action-payload-content
title: ScheduledActionPayloadContent
pagination_label: ScheduledActionPayloadContent
sidebar_label: ScheduledActionPayloadContent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledActionPayloadContent', 'V2024ScheduledActionPayloadContent'] 
slug: /tools/sdk/go/v2024/models/scheduled-action-payload-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionPayloadContent', 'V2024ScheduledActionPayloadContent']
---

# ScheduledActionPayloadContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the scheduled action (maximum 50 characters). | 
**BackupOptions** | Pointer to [**ScheduledActionPayloadContentBackupOptions**](scheduled-action-payload-content-backup-options) |  | [optional] 
**SourceBackupId** | Pointer to **string** | ID of the source backup. Required for CREATE_DRAFT jobs. | [optional] 
**SourceTenant** | Pointer to **string** | Source tenant identifier. Required for CREATE_DRAFT jobs. | [optional] 
**DraftId** | Pointer to **string** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [optional] 

## Methods

### NewScheduledActionPayloadContent

`func NewScheduledActionPayloadContent(name string, ) *ScheduledActionPayloadContent`

NewScheduledActionPayloadContent instantiates a new ScheduledActionPayloadContent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledActionPayloadContentWithDefaults

`func NewScheduledActionPayloadContentWithDefaults() *ScheduledActionPayloadContent`

NewScheduledActionPayloadContentWithDefaults instantiates a new ScheduledActionPayloadContent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ScheduledActionPayloadContent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ScheduledActionPayloadContent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ScheduledActionPayloadContent) SetName(v string)`

SetName sets Name field to given value.


### GetBackupOptions

`func (o *ScheduledActionPayloadContent) GetBackupOptions() ScheduledActionPayloadContentBackupOptions`

GetBackupOptions returns the BackupOptions field if non-nil, zero value otherwise.

### GetBackupOptionsOk

`func (o *ScheduledActionPayloadContent) GetBackupOptionsOk() (*ScheduledActionPayloadContentBackupOptions, bool)`

GetBackupOptionsOk returns a tuple with the BackupOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackupOptions

`func (o *ScheduledActionPayloadContent) SetBackupOptions(v ScheduledActionPayloadContentBackupOptions)`

SetBackupOptions sets BackupOptions field to given value.

### HasBackupOptions

`func (o *ScheduledActionPayloadContent) HasBackupOptions() bool`

HasBackupOptions returns a boolean if a field has been set.

### GetSourceBackupId

`func (o *ScheduledActionPayloadContent) GetSourceBackupId() string`

GetSourceBackupId returns the SourceBackupId field if non-nil, zero value otherwise.

### GetSourceBackupIdOk

`func (o *ScheduledActionPayloadContent) GetSourceBackupIdOk() (*string, bool)`

GetSourceBackupIdOk returns a tuple with the SourceBackupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupId

`func (o *ScheduledActionPayloadContent) SetSourceBackupId(v string)`

SetSourceBackupId sets SourceBackupId field to given value.

### HasSourceBackupId

`func (o *ScheduledActionPayloadContent) HasSourceBackupId() bool`

HasSourceBackupId returns a boolean if a field has been set.

### GetSourceTenant

`func (o *ScheduledActionPayloadContent) GetSourceTenant() string`

GetSourceTenant returns the SourceTenant field if non-nil, zero value otherwise.

### GetSourceTenantOk

`func (o *ScheduledActionPayloadContent) GetSourceTenantOk() (*string, bool)`

GetSourceTenantOk returns a tuple with the SourceTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTenant

`func (o *ScheduledActionPayloadContent) SetSourceTenant(v string)`

SetSourceTenant sets SourceTenant field to given value.

### HasSourceTenant

`func (o *ScheduledActionPayloadContent) HasSourceTenant() bool`

HasSourceTenant returns a boolean if a field has been set.

### GetDraftId

`func (o *ScheduledActionPayloadContent) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *ScheduledActionPayloadContent) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *ScheduledActionPayloadContent) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.

### HasDraftId

`func (o *ScheduledActionPayloadContent) HasDraftId() bool`

HasDraftId returns a boolean if a field has been set.


