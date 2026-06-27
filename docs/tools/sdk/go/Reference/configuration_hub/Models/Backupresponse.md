---
id: v1-backupresponse
title: Backupresponse
pagination_label: Backupresponse
sidebar_label: Backupresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Backupresponse', 'V1Backupresponse'] 
slug: /tools/sdk/go/configurationhub/models/backupresponse
tags: ['SDK', 'Software Development Kit', 'Backupresponse', 'V1Backupresponse']
---

# Backupresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | Pointer to **string** | Unique id assigned to this backup. | [optional] 
**Status** | Pointer to **string** | Status of the backup. | [optional] 
**Type** | Pointer to **string** | Type of the job, will always be BACKUP for this type of job. | [optional] 
**Tenant** | Pointer to **string** | The name of the tenant performing the upload | [optional] 
**RequesterName** | Pointer to **string** | The name of the requester. | [optional] 
**FileExists** | Pointer to **bool** | Whether or not a file was created and stored for this backup. | [optional] [default to true]
**Created** | Pointer to **SailPointTime** | The time the job was started. | [optional] 
**Modified** | Pointer to **SailPointTime** | The time of the last update to the job. | [optional] 
**Completed** | Pointer to **SailPointTime** | The time the job was completed. | [optional] 
**Name** | Pointer to **string** | The name assigned to the upload file in the request body. | [optional] 
**UserCanDelete** | Pointer to **bool** | Whether this backup can be deleted by a regular user. | [optional] [default to true]
**IsPartial** | Pointer to **bool** | Whether this backup contains all supported object types or only some of them. | [optional] [default to false]
**BackupType** | Pointer to **string** | Denotes how this backup was created. - MANUAL - The backup was created by a user. - AUTOMATED - The backup was created by devops. - AUTOMATED_DRAFT - The backup was created during a draft process. - UPLOADED - The backup was created by uploading an existing configuration file. | [optional] 
**Options** | Pointer to [**NullableBackupoptions**](backupoptions) |  | [optional] 
**HydrationStatus** | Pointer to **string** | Whether the object details of this backup are ready. | [optional] 
**TotalObjectCount** | Pointer to **int64** | Number of objects contained in this backup. | [optional] 
**CloudStorageStatus** | Pointer to **string** | Whether this backup has been transferred to a customer storage location. | [optional] 

## Methods

### NewBackupresponse

`func NewBackupresponse() *Backupresponse`

NewBackupresponse instantiates a new Backupresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBackupresponseWithDefaults

`func NewBackupresponseWithDefaults() *Backupresponse`

NewBackupresponseWithDefaults instantiates a new Backupresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *Backupresponse) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *Backupresponse) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *Backupresponse) SetJobId(v string)`

SetJobId sets JobId field to given value.

### HasJobId

`func (o *Backupresponse) HasJobId() bool`

HasJobId returns a boolean if a field has been set.

### GetStatus

`func (o *Backupresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Backupresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Backupresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Backupresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *Backupresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Backupresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Backupresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Backupresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTenant

`func (o *Backupresponse) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *Backupresponse) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *Backupresponse) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *Backupresponse) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetRequesterName

`func (o *Backupresponse) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *Backupresponse) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *Backupresponse) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *Backupresponse) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetFileExists

`func (o *Backupresponse) GetFileExists() bool`

GetFileExists returns the FileExists field if non-nil, zero value otherwise.

### GetFileExistsOk

`func (o *Backupresponse) GetFileExistsOk() (*bool, bool)`

GetFileExistsOk returns a tuple with the FileExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExists

`func (o *Backupresponse) SetFileExists(v bool)`

SetFileExists sets FileExists field to given value.

### HasFileExists

`func (o *Backupresponse) HasFileExists() bool`

HasFileExists returns a boolean if a field has been set.

### GetCreated

`func (o *Backupresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Backupresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Backupresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Backupresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Backupresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Backupresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Backupresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Backupresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCompleted

`func (o *Backupresponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Backupresponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Backupresponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Backupresponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetName

`func (o *Backupresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Backupresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Backupresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Backupresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetUserCanDelete

`func (o *Backupresponse) GetUserCanDelete() bool`

GetUserCanDelete returns the UserCanDelete field if non-nil, zero value otherwise.

### GetUserCanDeleteOk

`func (o *Backupresponse) GetUserCanDeleteOk() (*bool, bool)`

GetUserCanDeleteOk returns a tuple with the UserCanDelete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserCanDelete

`func (o *Backupresponse) SetUserCanDelete(v bool)`

SetUserCanDelete sets UserCanDelete field to given value.

### HasUserCanDelete

`func (o *Backupresponse) HasUserCanDelete() bool`

HasUserCanDelete returns a boolean if a field has been set.

### GetIsPartial

`func (o *Backupresponse) GetIsPartial() bool`

GetIsPartial returns the IsPartial field if non-nil, zero value otherwise.

### GetIsPartialOk

`func (o *Backupresponse) GetIsPartialOk() (*bool, bool)`

GetIsPartialOk returns a tuple with the IsPartial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPartial

`func (o *Backupresponse) SetIsPartial(v bool)`

SetIsPartial sets IsPartial field to given value.

### HasIsPartial

`func (o *Backupresponse) HasIsPartial() bool`

HasIsPartial returns a boolean if a field has been set.

### GetBackupType

`func (o *Backupresponse) GetBackupType() string`

GetBackupType returns the BackupType field if non-nil, zero value otherwise.

### GetBackupTypeOk

`func (o *Backupresponse) GetBackupTypeOk() (*string, bool)`

GetBackupTypeOk returns a tuple with the BackupType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackupType

`func (o *Backupresponse) SetBackupType(v string)`

SetBackupType sets BackupType field to given value.

### HasBackupType

`func (o *Backupresponse) HasBackupType() bool`

HasBackupType returns a boolean if a field has been set.

### GetOptions

`func (o *Backupresponse) GetOptions() Backupoptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *Backupresponse) GetOptionsOk() (*Backupoptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *Backupresponse) SetOptions(v Backupoptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *Backupresponse) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### SetOptionsNil

`func (o *Backupresponse) SetOptionsNil(b bool)`

 SetOptionsNil sets the value for Options to be an explicit nil

### UnsetOptions
`func (o *Backupresponse) UnsetOptions()`

UnsetOptions ensures that no value is present for Options, not even an explicit nil
### GetHydrationStatus

`func (o *Backupresponse) GetHydrationStatus() string`

GetHydrationStatus returns the HydrationStatus field if non-nil, zero value otherwise.

### GetHydrationStatusOk

`func (o *Backupresponse) GetHydrationStatusOk() (*string, bool)`

GetHydrationStatusOk returns a tuple with the HydrationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHydrationStatus

`func (o *Backupresponse) SetHydrationStatus(v string)`

SetHydrationStatus sets HydrationStatus field to given value.

### HasHydrationStatus

`func (o *Backupresponse) HasHydrationStatus() bool`

HasHydrationStatus returns a boolean if a field has been set.

### GetTotalObjectCount

`func (o *Backupresponse) GetTotalObjectCount() int64`

GetTotalObjectCount returns the TotalObjectCount field if non-nil, zero value otherwise.

### GetTotalObjectCountOk

`func (o *Backupresponse) GetTotalObjectCountOk() (*int64, bool)`

GetTotalObjectCountOk returns a tuple with the TotalObjectCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalObjectCount

`func (o *Backupresponse) SetTotalObjectCount(v int64)`

SetTotalObjectCount sets TotalObjectCount field to given value.

### HasTotalObjectCount

`func (o *Backupresponse) HasTotalObjectCount() bool`

HasTotalObjectCount returns a boolean if a field has been set.

### GetCloudStorageStatus

`func (o *Backupresponse) GetCloudStorageStatus() string`

GetCloudStorageStatus returns the CloudStorageStatus field if non-nil, zero value otherwise.

### GetCloudStorageStatusOk

`func (o *Backupresponse) GetCloudStorageStatusOk() (*string, bool)`

GetCloudStorageStatusOk returns a tuple with the CloudStorageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudStorageStatus

`func (o *Backupresponse) SetCloudStorageStatus(v string)`

SetCloudStorageStatus sets CloudStorageStatus field to given value.

### HasCloudStorageStatus

`func (o *Backupresponse) HasCloudStorageStatus() bool`

HasCloudStorageStatus returns a boolean if a field has been set.


