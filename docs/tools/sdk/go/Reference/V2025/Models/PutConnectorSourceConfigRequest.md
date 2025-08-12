---
id: v2025-put-connector-source-config-request
title: PutConnectorSourceConfigRequest
pagination_label: PutConnectorSourceConfigRequest
sidebar_label: PutConnectorSourceConfigRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutConnectorSourceConfigRequest', 'V2025PutConnectorSourceConfigRequest'] 
slug: /tools/sdk/go/v2025/models/put-connector-source-config-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorSourceConfigRequest', 'V2025PutConnectorSourceConfigRequest']
---

# PutConnectorSourceConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | connector source config xml file | 

## Methods

### NewPutConnectorSourceConfigRequest

`func NewPutConnectorSourceConfigRequest(file *os.File, ) *PutConnectorSourceConfigRequest`

NewPutConnectorSourceConfigRequest instantiates a new PutConnectorSourceConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutConnectorSourceConfigRequestWithDefaults

`func NewPutConnectorSourceConfigRequestWithDefaults() *PutConnectorSourceConfigRequest`

NewPutConnectorSourceConfigRequestWithDefaults instantiates a new PutConnectorSourceConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutConnectorSourceConfigRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutConnectorSourceConfigRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutConnectorSourceConfigRequest) SetFile(v *os.File)`

SetFile sets File field to given value.



