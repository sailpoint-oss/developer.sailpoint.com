---
id: put-correlation-config-request
title: PutCorrelationConfigRequest
pagination_label: PutCorrelationConfigRequest
sidebar_label: PutCorrelationConfigRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PutCorrelationConfigRequest'] 
slug: /tools/sdk/go/v3/models/put-correlation-config-request
tags: ['SDK', 'Software Development Kit', 'PutCorrelationConfigRequest']
---

# PutCorrelationConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  ***os.File** | connector correlation config xml file | 

## Methods

### NewPutCorrelationConfigRequest

`func NewPutCorrelationConfigRequest(file *os.File, ) *PutCorrelationConfigRequest`

NewPutCorrelationConfigRequest instantiates a new PutCorrelationConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCorrelationConfigRequestWithDefaults

`func NewPutCorrelationConfigRequestWithDefaults() *PutCorrelationConfigRequest`

NewPutCorrelationConfigRequestWithDefaults instantiates a new PutCorrelationConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutCorrelationConfigRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutCorrelationConfigRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutCorrelationConfigRequest) SetFile(v *os.File)`

SetFile sets File field to given value.



[[Back to top]](#) 


