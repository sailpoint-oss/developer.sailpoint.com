---
id: v1-put-connector-correlation-config-v1-request
title: PutConnectorCorrelationConfigV1Request
pagination_label: PutConnectorCorrelationConfigV1Request
sidebar_label: PutConnectorCorrelationConfigV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutConnectorCorrelationConfigV1Request', 'V1PutConnectorCorrelationConfigV1Request'] 
slug: /tools/sdk/go/connectors/models/put-connector-correlation-config-v1-request
tags: ['SDK', 'Software Development Kit', 'PutConnectorCorrelationConfigV1Request', 'V1PutConnectorCorrelationConfigV1Request']
---

# PutConnectorCorrelationConfigV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | ***os.File** | connector correlation config xml file | 

## Methods

### NewPutConnectorCorrelationConfigV1Request

`func NewPutConnectorCorrelationConfigV1Request(file *os.File, ) *PutConnectorCorrelationConfigV1Request`

NewPutConnectorCorrelationConfigV1Request instantiates a new PutConnectorCorrelationConfigV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutConnectorCorrelationConfigV1RequestWithDefaults

`func NewPutConnectorCorrelationConfigV1RequestWithDefaults() *PutConnectorCorrelationConfigV1Request`

NewPutConnectorCorrelationConfigV1RequestWithDefaults instantiates a new PutConnectorCorrelationConfigV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *PutConnectorCorrelationConfigV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PutConnectorCorrelationConfigV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PutConnectorCorrelationConfigV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.



