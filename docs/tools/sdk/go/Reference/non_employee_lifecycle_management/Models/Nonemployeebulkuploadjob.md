---
id: v1-nonemployeebulkuploadjob
title: Nonemployeebulkuploadjob
pagination_label: Nonemployeebulkuploadjob
sidebar_label: Nonemployeebulkuploadjob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeebulkuploadjob', 'V1Nonemployeebulkuploadjob'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeebulkuploadjob
tags: ['SDK', 'Software Development Kit', 'Nonemployeebulkuploadjob', 'V1Nonemployeebulkuploadjob']
---

# Nonemployeebulkuploadjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The bulk upload job's ID. (UUID) | [optional] 
**SourceId** | Pointer to **string** | The ID of the source to bulk-upload non-employees to. (UUID) | [optional] 
**Created** | Pointer to **SailPointTime** | The date-time the job was submitted. | [optional] 
**Modified** | Pointer to **SailPointTime** | The date-time that the job was last updated. | [optional] 
**Status** | Pointer to **string** | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors.  | [optional] 

## Methods

### NewNonemployeebulkuploadjob

`func NewNonemployeebulkuploadjob() *Nonemployeebulkuploadjob`

NewNonemployeebulkuploadjob instantiates a new Nonemployeebulkuploadjob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeebulkuploadjobWithDefaults

`func NewNonemployeebulkuploadjobWithDefaults() *Nonemployeebulkuploadjob`

NewNonemployeebulkuploadjobWithDefaults instantiates a new Nonemployeebulkuploadjob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeebulkuploadjob) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeebulkuploadjob) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeebulkuploadjob) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeebulkuploadjob) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *Nonemployeebulkuploadjob) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Nonemployeebulkuploadjob) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Nonemployeebulkuploadjob) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Nonemployeebulkuploadjob) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeebulkuploadjob) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeebulkuploadjob) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeebulkuploadjob) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeebulkuploadjob) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeebulkuploadjob) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeebulkuploadjob) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeebulkuploadjob) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeebulkuploadjob) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetStatus

`func (o *Nonemployeebulkuploadjob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Nonemployeebulkuploadjob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Nonemployeebulkuploadjob) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Nonemployeebulkuploadjob) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


