---
id: v2024-scheduled-action-response-content
title: ScheduledActionResponseContent
pagination_label: ScheduledActionResponseContent
sidebar_label: ScheduledActionResponseContent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledActionResponseContent', 'V2024ScheduledActionResponseContent'] 
slug: /tools/sdk/go/v2024/models/scheduled-action-response-content
tags: ['SDK', 'Software Development Kit', 'ScheduledActionResponseContent', 'V2024ScheduledActionResponseContent']
---

# ScheduledActionResponseContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the scheduled action (maximum 50 characters). | [optional] 
**BackupOptions** | Pointer to [**ScheduledActionResponseContentBackupOptions**](scheduled-action-response-content-backup-options) |  | [optional] 
**SourceBackupId** | Pointer to **string** | ID of the source backup. Required for CREATE_DRAFT jobs only. | [optional] 
**SourceTenant** | Pointer to **string** | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [optional] 
**DraftId** | Pointer to **string** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [optional] 

## Methods

### NewScheduledActionResponseContent

`func NewScheduledActionResponseContent() *ScheduledActionResponseContent`

NewScheduledActionResponseContent instantiates a new ScheduledActionResponseContent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledActionResponseContentWithDefaults

`func NewScheduledActionResponseContentWithDefaults() *ScheduledActionResponseContent`

NewScheduledActionResponseContentWithDefaults instantiates a new ScheduledActionResponseContent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ScheduledActionResponseContent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ScheduledActionResponseContent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ScheduledActionResponseContent) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ScheduledActionResponseContent) HasName() bool`

HasName returns a boolean if a field has been set.

### GetBackupOptions

`func (o *ScheduledActionResponseContent) GetBackupOptions() ScheduledActionResponseContentBackupOptions`

GetBackupOptions returns the BackupOptions field if non-nil, zero value otherwise.

### GetBackupOptionsOk

`func (o *ScheduledActionResponseContent) GetBackupOptionsOk() (*ScheduledActionResponseContentBackupOptions, bool)`

GetBackupOptionsOk returns a tuple with the BackupOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackupOptions

`func (o *ScheduledActionResponseContent) SetBackupOptions(v ScheduledActionResponseContentBackupOptions)`

SetBackupOptions sets BackupOptions field to given value.

### HasBackupOptions

`func (o *ScheduledActionResponseContent) HasBackupOptions() bool`

HasBackupOptions returns a boolean if a field has been set.

### GetSourceBackupId

`func (o *ScheduledActionResponseContent) GetSourceBackupId() string`

GetSourceBackupId returns the SourceBackupId field if non-nil, zero value otherwise.

### GetSourceBackupIdOk

`func (o *ScheduledActionResponseContent) GetSourceBackupIdOk() (*string, bool)`

GetSourceBackupIdOk returns a tuple with the SourceBackupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupId

`func (o *ScheduledActionResponseContent) SetSourceBackupId(v string)`

SetSourceBackupId sets SourceBackupId field to given value.

### HasSourceBackupId

`func (o *ScheduledActionResponseContent) HasSourceBackupId() bool`

HasSourceBackupId returns a boolean if a field has been set.

### GetSourceTenant

`func (o *ScheduledActionResponseContent) GetSourceTenant() string`

GetSourceTenant returns the SourceTenant field if non-nil, zero value otherwise.

### GetSourceTenantOk

`func (o *ScheduledActionResponseContent) GetSourceTenantOk() (*string, bool)`

GetSourceTenantOk returns a tuple with the SourceTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTenant

`func (o *ScheduledActionResponseContent) SetSourceTenant(v string)`

SetSourceTenant sets SourceTenant field to given value.

### HasSourceTenant

`func (o *ScheduledActionResponseContent) HasSourceTenant() bool`

HasSourceTenant returns a boolean if a field has been set.

### GetDraftId

`func (o *ScheduledActionResponseContent) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *ScheduledActionResponseContent) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *ScheduledActionResponseContent) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.

### HasDraftId

`func (o *ScheduledActionResponseContent) HasDraftId() bool`

HasDraftId returns a boolean if a field has been set.


