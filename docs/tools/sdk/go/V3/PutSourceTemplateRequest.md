---
id: put-source-template-request
title: PutSourceTemplateRequest
pagination_label: PutSourceTemplateRequest
sidebar_label: PutSourceTemplateRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'PutSourceTemplateRequest'] 
slug: /tools/sdk/go/v3/models/put-source-template-request
tags: ['SDK', 'Software Development Kit', 'PutSourceTemplateRequest']
---

# PutSourceTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** |  ***os.File** | connector source template xml file | 

## Methods

### NewPutSourceTemplateRequest

`func NewPutSourceTemplateRequest(file *os.File, ) *PutSourceTemplateRequest`

NewPutSourceTemplateRequest instantiates a new PutSourceTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutSourceTemplateRequestWithDefaults

`func NewPutSourceTemplateRequestWithDefaults() *PutSourceTemplateRequest`

NewPutSourceTemplateRequestWithDefaults instantiates a new PutSourceTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutSourceTemplateRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutSourceTemplateRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutSourceTemplateRequest) SetFile(v *os.File)`

SetFile sets File field to given value.



[[Back to top]](#) 


