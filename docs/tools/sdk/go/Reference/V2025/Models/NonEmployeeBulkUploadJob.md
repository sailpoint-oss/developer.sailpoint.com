---
id: non-employee-bulk-upload-job
title: NonEmployeeBulkUploadJob
pagination_label: NonEmployeeBulkUploadJob
sidebar_label: NonEmployeeBulkUploadJob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeBulkUploadJob', 'NonEmployeeBulkUploadJob'] 
slug: /tools/sdk/go//models/non-employee-bulk-upload-job
tags: ['SDK', 'Software Development Kit', 'NonEmployeeBulkUploadJob', 'NonEmployeeBulkUploadJob']
---

# NonEmployeeBulkUploadJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The bulk upload job's ID. (UUID) | [optional] 
**SourceId** | Pointer to **string** | The ID of the source to bulk-upload non-employees to. (UUID) | [optional] 
**Created** | Pointer to **SailPointTime** | The date-time the job was submitted. | [optional] 
**Modified** | Pointer to **SailPointTime** | The date-time that the job was last updated. | [optional] 
**Status** | Pointer to **string** | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors.  | [optional] 

## Methods

### NewNonEmployeeBulkUploadJob

`func NewNonEmployeeBulkUploadJob() *NonEmployeeBulkUploadJob`

NewNonEmployeeBulkUploadJob instantiates a new NonEmployeeBulkUploadJob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeBulkUploadJobWithDefaults

`func NewNonEmployeeBulkUploadJobWithDefaults() *NonEmployeeBulkUploadJob`

NewNonEmployeeBulkUploadJobWithDefaults instantiates a new NonEmployeeBulkUploadJob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeBulkUploadJob) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeBulkUploadJob) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeBulkUploadJob) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeBulkUploadJob) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *NonEmployeeBulkUploadJob) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *NonEmployeeBulkUploadJob) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *NonEmployeeBulkUploadJob) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *NonEmployeeBulkUploadJob) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeBulkUploadJob) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeBulkUploadJob) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeBulkUploadJob) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeBulkUploadJob) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeBulkUploadJob) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeBulkUploadJob) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeBulkUploadJob) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeBulkUploadJob) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetStatus

`func (o *NonEmployeeBulkUploadJob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *NonEmployeeBulkUploadJob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *NonEmployeeBulkUploadJob) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *NonEmployeeBulkUploadJob) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


