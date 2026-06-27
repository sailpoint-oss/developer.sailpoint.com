---
id: v1-create-form-definition-file-request-v1-request
title: CreateFormDefinitionFileRequestV1Request
pagination_label: CreateFormDefinitionFileRequestV1Request
sidebar_label: CreateFormDefinitionFileRequestV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CreateFormDefinitionFileRequestV1Request', 'V1CreateFormDefinitionFileRequestV1Request'] 
slug: /tools/sdk/go/customforms/models/create-form-definition-file-request-v1-request
tags: ['SDK', 'Software Development Kit', 'CreateFormDefinitionFileRequestV1Request', 'V1CreateFormDefinitionFileRequestV1Request']
---

# CreateFormDefinitionFileRequestV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | File specifying the multipart | 

## Methods

### NewCreateFormDefinitionFileRequestV1Request

`func NewCreateFormDefinitionFileRequestV1Request(file *os.File, ) *CreateFormDefinitionFileRequestV1Request`

NewCreateFormDefinitionFileRequestV1Request instantiates a new CreateFormDefinitionFileRequestV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateFormDefinitionFileRequestV1RequestWithDefaults

`func NewCreateFormDefinitionFileRequestV1RequestWithDefaults() *CreateFormDefinitionFileRequestV1Request`

NewCreateFormDefinitionFileRequestV1RequestWithDefaults instantiates a new CreateFormDefinitionFileRequestV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *CreateFormDefinitionFileRequestV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *CreateFormDefinitionFileRequestV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *CreateFormDefinitionFileRequestV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.



