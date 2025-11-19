---
id: v2025-put-connector-correlation-config-request
title: PutConnectorCorrelationConfigRequest
pagination_label: PutConnectorCorrelationConfigRequest
sidebar_label: PutConnectorCorrelationConfigRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutConnectorCorrelationConfigRequest', 'V2025PutConnectorCorrelationConfigRequest'] 
slug: /tools/sdk/go/v2025/models/put-connector-correlation-config-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorCorrelationConfigRequest', 'V2025PutConnectorCorrelationConfigRequest']
---

# PutConnectorCorrelationConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | connector correlation config xml file | 

## Methods

### NewPutConnectorCorrelationConfigRequest

`func NewPutConnectorCorrelationConfigRequest(file *os.File, ) *PutConnectorCorrelationConfigRequest`

NewPutConnectorCorrelationConfigRequest instantiates a new PutConnectorCorrelationConfigRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutConnectorCorrelationConfigRequestWithDefaults

`func NewPutConnectorCorrelationConfigRequestWithDefaults() *PutConnectorCorrelationConfigRequest`

NewPutConnectorCorrelationConfigRequestWithDefaults instantiates a new PutConnectorCorrelationConfigRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutConnectorCorrelationConfigRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutConnectorCorrelationConfigRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutConnectorCorrelationConfigRequest) SetFile(v *os.File)`

SetFile sets File field to given value.



