---
id: v1-nonemployeebulkuploadstatus
title: Nonemployeebulkuploadstatus
pagination_label: Nonemployeebulkuploadstatus
sidebar_label: Nonemployeebulkuploadstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeebulkuploadstatus', 'V1Nonemployeebulkuploadstatus'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeebulkuploadstatus
tags: ['SDK', 'Software Development Kit', 'Nonemployeebulkuploadstatus', 'V1Nonemployeebulkuploadstatus']
---

# Nonemployeebulkuploadstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | Returns the following values indicating the progress or result of the bulk upload job. \"PENDING\" means the job is queued and waiting to be processed. \"IN_PROGRESS\" means the job is currently being processed. \"COMPLETED\" means the job has been completed without any errors. \"ERROR\" means the job failed to process with errors. null means job has been submitted to the source.  | [optional] 

## Methods

### NewNonemployeebulkuploadstatus

`func NewNonemployeebulkuploadstatus() *Nonemployeebulkuploadstatus`

NewNonemployeebulkuploadstatus instantiates a new Nonemployeebulkuploadstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeebulkuploadstatusWithDefaults

`func NewNonemployeebulkuploadstatusWithDefaults() *Nonemployeebulkuploadstatus`

NewNonemployeebulkuploadstatusWithDefaults instantiates a new Nonemployeebulkuploadstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *Nonemployeebulkuploadstatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Nonemployeebulkuploadstatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Nonemployeebulkuploadstatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Nonemployeebulkuploadstatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


