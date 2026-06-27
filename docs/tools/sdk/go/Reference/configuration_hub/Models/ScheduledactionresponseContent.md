---
id: v1-scheduledactionresponse-content
title: ScheduledactionresponseContent
pagination_label: ScheduledactionresponseContent
sidebar_label: ScheduledactionresponseContent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledactionresponseContent', 'V1ScheduledactionresponseContent'] 
slug: /tools/sdk/go/configurationhub/models/scheduledactionresponse-content
tags: ['SDK', 'Software Development Kit', 'ScheduledactionresponseContent', 'V1ScheduledactionresponseContent']
---

# ScheduledactionresponseContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the scheduled action (maximum 50 characters). | [optional] 
**BackupOptions** | Pointer to [**ScheduledactionresponseContentBackupOptions**](scheduledactionresponse-content-backup-options) |  | [optional] 
**SourceBackupId** | Pointer to **string** | ID of the source backup. Required for CREATE_DRAFT jobs only. | [optional] 
**SourceTenant** | Pointer to **string** | Source tenant identifier. Required for CREATE_DRAFT jobs only. | [optional] 
**DraftId** | Pointer to **string** | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs only. | [optional] 

## Methods

### NewScheduledactionresponseContent

`func NewScheduledactionresponseContent() *ScheduledactionresponseContent`

NewScheduledactionresponseContent instantiates a new ScheduledactionresponseContent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledactionresponseContentWithDefaults

`func NewScheduledactionresponseContentWithDefaults() *ScheduledactionresponseContent`

NewScheduledactionresponseContentWithDefaults instantiates a new ScheduledactionresponseContent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ScheduledactionresponseContent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ScheduledactionresponseContent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ScheduledactionresponseContent) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ScheduledactionresponseContent) HasName() bool`

HasName returns a boolean if a field has been set.

### GetBackupOptions

`func (o *ScheduledactionresponseContent) GetBackupOptions() ScheduledactionresponseContentBackupOptions`

GetBackupOptions returns the BackupOptions field if non-nil, zero value otherwise.

### GetBackupOptionsOk

`func (o *ScheduledactionresponseContent) GetBackupOptionsOk() (*ScheduledactionresponseContentBackupOptions, bool)`

GetBackupOptionsOk returns a tuple with the BackupOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackupOptions

`func (o *ScheduledactionresponseContent) SetBackupOptions(v ScheduledactionresponseContentBackupOptions)`

SetBackupOptions sets BackupOptions field to given value.

### HasBackupOptions

`func (o *ScheduledactionresponseContent) HasBackupOptions() bool`

HasBackupOptions returns a boolean if a field has been set.

### GetSourceBackupId

`func (o *ScheduledactionresponseContent) GetSourceBackupId() string`

GetSourceBackupId returns the SourceBackupId field if non-nil, zero value otherwise.

### GetSourceBackupIdOk

`func (o *ScheduledactionresponseContent) GetSourceBackupIdOk() (*string, bool)`

GetSourceBackupIdOk returns a tuple with the SourceBackupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupId

`func (o *ScheduledactionresponseContent) SetSourceBackupId(v string)`

SetSourceBackupId sets SourceBackupId field to given value.

### HasSourceBackupId

`func (o *ScheduledactionresponseContent) HasSourceBackupId() bool`

HasSourceBackupId returns a boolean if a field has been set.

### GetSourceTenant

`func (o *ScheduledactionresponseContent) GetSourceTenant() string`

GetSourceTenant returns the SourceTenant field if non-nil, zero value otherwise.

### GetSourceTenantOk

`func (o *ScheduledactionresponseContent) GetSourceTenantOk() (*string, bool)`

GetSourceTenantOk returns a tuple with the SourceTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTenant

`func (o *ScheduledactionresponseContent) SetSourceTenant(v string)`

SetSourceTenant sets SourceTenant field to given value.

### HasSourceTenant

`func (o *ScheduledactionresponseContent) HasSourceTenant() bool`

HasSourceTenant returns a boolean if a field has been set.

### GetDraftId

`func (o *ScheduledactionresponseContent) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *ScheduledactionresponseContent) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *ScheduledactionresponseContent) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.

### HasDraftId

`func (o *ScheduledactionresponseContent) HasDraftId() bool`

HasDraftId returns a boolean if a field has been set.


