---
id: backup-response
title: BackupResponse
pagination_label: BackupResponse
sidebar_label: BackupResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BackupResponse', 'BackupResponse'] 
slug: /tools/sdk/go//models/backup-response
tags: ['SDK', 'Software Development Kit', 'BackupResponse', 'BackupResponse']
---

# BackupResponse

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
**Options** | Pointer to [**NullableBackupOptions**](backup-options) |  | [optional] 
**HydrationStatus** | Pointer to **string** | Whether the object details of this backup are ready. | [optional] 
**TotalObjectCount** | Pointer to **int64** | Number of objects contained in this backup. | [optional] 
**CloudStorageStatus** | Pointer to **string** | Whether this backup has been transferred to a customer storage location. | [optional] 

## Methods

### NewBackupResponse

`func NewBackupResponse() *BackupResponse`

NewBackupResponse instantiates a new BackupResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBackupResponseWithDefaults

`func NewBackupResponseWithDefaults() *BackupResponse`

NewBackupResponseWithDefaults instantiates a new BackupResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *BackupResponse) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *BackupResponse) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *BackupResponse) SetJobId(v string)`

SetJobId sets JobId field to given value.

### HasJobId

`func (o *BackupResponse) HasJobId() bool`

HasJobId returns a boolean if a field has been set.

### GetStatus

`func (o *BackupResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *BackupResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *BackupResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *BackupResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *BackupResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BackupResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BackupResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BackupResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTenant

`func (o *BackupResponse) GetTenant() string`

GetTenant returns the Tenant field if non-nil, zero value otherwise.

### GetTenantOk

`func (o *BackupResponse) GetTenantOk() (*string, bool)`

GetTenantOk returns a tuple with the Tenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTenant

`func (o *BackupResponse) SetTenant(v string)`

SetTenant sets Tenant field to given value.

### HasTenant

`func (o *BackupResponse) HasTenant() bool`

HasTenant returns a boolean if a field has been set.

### GetRequesterName

`func (o *BackupResponse) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *BackupResponse) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *BackupResponse) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *BackupResponse) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetFileExists

`func (o *BackupResponse) GetFileExists() bool`

GetFileExists returns the FileExists field if non-nil, zero value otherwise.

### GetFileExistsOk

`func (o *BackupResponse) GetFileExistsOk() (*bool, bool)`

GetFileExistsOk returns a tuple with the FileExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExists

`func (o *BackupResponse) SetFileExists(v bool)`

SetFileExists sets FileExists field to given value.

### HasFileExists

`func (o *BackupResponse) HasFileExists() bool`

HasFileExists returns a boolean if a field has been set.

### GetCreated

`func (o *BackupResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *BackupResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *BackupResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *BackupResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *BackupResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *BackupResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *BackupResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *BackupResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCompleted

`func (o *BackupResponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *BackupResponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *BackupResponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *BackupResponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetName

`func (o *BackupResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BackupResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BackupResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BackupResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetUserCanDelete

`func (o *BackupResponse) GetUserCanDelete() bool`

GetUserCanDelete returns the UserCanDelete field if non-nil, zero value otherwise.

### GetUserCanDeleteOk

`func (o *BackupResponse) GetUserCanDeleteOk() (*bool, bool)`

GetUserCanDeleteOk returns a tuple with the UserCanDelete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserCanDelete

`func (o *BackupResponse) SetUserCanDelete(v bool)`

SetUserCanDelete sets UserCanDelete field to given value.

### HasUserCanDelete

`func (o *BackupResponse) HasUserCanDelete() bool`

HasUserCanDelete returns a boolean if a field has been set.

### GetIsPartial

`func (o *BackupResponse) GetIsPartial() bool`

GetIsPartial returns the IsPartial field if non-nil, zero value otherwise.

### GetIsPartialOk

`func (o *BackupResponse) GetIsPartialOk() (*bool, bool)`

GetIsPartialOk returns a tuple with the IsPartial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPartial

`func (o *BackupResponse) SetIsPartial(v bool)`

SetIsPartial sets IsPartial field to given value.

### HasIsPartial

`func (o *BackupResponse) HasIsPartial() bool`

HasIsPartial returns a boolean if a field has been set.

### GetBackupType

`func (o *BackupResponse) GetBackupType() string`

GetBackupType returns the BackupType field if non-nil, zero value otherwise.

### GetBackupTypeOk

`func (o *BackupResponse) GetBackupTypeOk() (*string, bool)`

GetBackupTypeOk returns a tuple with the BackupType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackupType

`func (o *BackupResponse) SetBackupType(v string)`

SetBackupType sets BackupType field to given value.

### HasBackupType

`func (o *BackupResponse) HasBackupType() bool`

HasBackupType returns a boolean if a field has been set.

### GetOptions

`func (o *BackupResponse) GetOptions() BackupOptions`

GetOptions returns the Options field if non-nil, zero value otherwise.

### GetOptionsOk

`func (o *BackupResponse) GetOptionsOk() (*BackupOptions, bool)`

GetOptionsOk returns a tuple with the Options field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptions

`func (o *BackupResponse) SetOptions(v BackupOptions)`

SetOptions sets Options field to given value.

### HasOptions

`func (o *BackupResponse) HasOptions() bool`

HasOptions returns a boolean if a field has been set.

### SetOptionsNil

`func (o *BackupResponse) SetOptionsNil(b bool)`

 SetOptionsNil sets the value for Options to be an explicit nil

### UnsetOptions
`func (o *BackupResponse) UnsetOptions()`

UnsetOptions ensures that no value is present for Options, not even an explicit nil
### GetHydrationStatus

`func (o *BackupResponse) GetHydrationStatus() string`

GetHydrationStatus returns the HydrationStatus field if non-nil, zero value otherwise.

### GetHydrationStatusOk

`func (o *BackupResponse) GetHydrationStatusOk() (*string, bool)`

GetHydrationStatusOk returns a tuple with the HydrationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHydrationStatus

`func (o *BackupResponse) SetHydrationStatus(v string)`

SetHydrationStatus sets HydrationStatus field to given value.

### HasHydrationStatus

`func (o *BackupResponse) HasHydrationStatus() bool`

HasHydrationStatus returns a boolean if a field has been set.

### GetTotalObjectCount

`func (o *BackupResponse) GetTotalObjectCount() int64`

GetTotalObjectCount returns the TotalObjectCount field if non-nil, zero value otherwise.

### GetTotalObjectCountOk

`func (o *BackupResponse) GetTotalObjectCountOk() (*int64, bool)`

GetTotalObjectCountOk returns a tuple with the TotalObjectCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalObjectCount

`func (o *BackupResponse) SetTotalObjectCount(v int64)`

SetTotalObjectCount sets TotalObjectCount field to given value.

### HasTotalObjectCount

`func (o *BackupResponse) HasTotalObjectCount() bool`

HasTotalObjectCount returns a boolean if a field has been set.

### GetCloudStorageStatus

`func (o *BackupResponse) GetCloudStorageStatus() string`

GetCloudStorageStatus returns the CloudStorageStatus field if non-nil, zero value otherwise.

### GetCloudStorageStatusOk

`func (o *BackupResponse) GetCloudStorageStatusOk() (*string, bool)`

GetCloudStorageStatusOk returns a tuple with the CloudStorageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudStorageStatus

`func (o *BackupResponse) SetCloudStorageStatus(v string)`

SetCloudStorageStatus sets CloudStorageStatus field to given value.

### HasCloudStorageStatus

`func (o *BackupResponse) HasCloudStorageStatus() bool`

HasCloudStorageStatus returns a boolean if a field has been set.


