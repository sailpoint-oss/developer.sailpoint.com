---
id: v2024-put-connector-source-template-request
title: PutConnectorSourceTemplateRequest
pagination_label: PutConnectorSourceTemplateRequest
sidebar_label: PutConnectorSourceTemplateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutConnectorSourceTemplateRequest', 'V2024PutConnectorSourceTemplateRequest'] 
slug: /tools/sdk/go/v2024/models/put-connector-source-template-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceTemplateRequest', 'V2024PutConnectorSourceTemplateRequest']
---

# PutConnectorSourceTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | connector source template xml file | 

## Methods

### NewPutConnectorSourceTemplateRequest

`func NewPutConnectorSourceTemplateRequest(file *os.File, ) *PutConnectorSourceTemplateRequest`

NewPutConnectorSourceTemplateRequest instantiates a new PutConnectorSourceTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutConnectorSourceTemplateRequestWithDefaults

`func NewPutConnectorSourceTemplateRequestWithDefaults() *PutConnectorSourceTemplateRequest`

NewPutConnectorSourceTemplateRequestWithDefaults instantiates a new PutConnectorSourceTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutConnectorSourceTemplateRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutConnectorSourceTemplateRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutConnectorSourceTemplateRequest) SetFile(v *os.File)`

SetFile sets File field to given value.



