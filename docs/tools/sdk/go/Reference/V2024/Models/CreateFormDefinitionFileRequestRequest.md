---
id: v2024-create-form-definition-file-request-request
title: CreateFormDefinitionFileRequestRequest
pagination_label: CreateFormDefinitionFileRequestRequest
sidebar_label: CreateFormDefinitionFileRequestRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateFormDefinitionFileRequestRequest', 'V2024CreateFormDefinitionFileRequestRequest'] 
slug: /tools/sdk/go/v2024/models/create-form-definition-file-request-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestRequest', 'V2024CreateFormDefinitionFileRequestRequest']
---

# CreateFormDefinitionFileRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | File specifying the multipart | 

## Methods

### NewCreateFormDefinitionFileRequestRequest

`func NewCreateFormDefinitionFileRequestRequest(file *os.File, ) *CreateFormDefinitionFileRequestRequest`

NewCreateFormDefinitionFileRequestRequest instantiates a new CreateFormDefinitionFileRequestRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateFormDefinitionFileRequestRequestWithDefaults

`func NewCreateFormDefinitionFileRequestRequestWithDefaults() *CreateFormDefinitionFileRequestRequest`

NewCreateFormDefinitionFileRequestRequestWithDefaults instantiates a new CreateFormDefinitionFileRequestRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *CreateFormDefinitionFileRequestRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *CreateFormDefinitionFileRequestRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *CreateFormDefinitionFileRequestRequest) SetFile(v *os.File)`

SetFile sets File field to given value.



