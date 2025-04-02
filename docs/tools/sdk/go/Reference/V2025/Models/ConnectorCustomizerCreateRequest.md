---
id: connector-customizer-create-request
title: ConnectorCustomizerCreateRequest
pagination_label: ConnectorCustomizerCreateRequest
sidebar_label: ConnectorCustomizerCreateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizerCreateRequest', 'ConnectorCustomizerCreateRequest'] 
slug: /tools/sdk/go//models/connector-customizer-create-request
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerCreateRequest', 'ConnectorCustomizerCreateRequest']
---

# ConnectorCustomizerCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Connector customizer name. | [optional] 

## Methods

### NewConnectorCustomizerCreateRequest

`func NewConnectorCustomizerCreateRequest() *ConnectorCustomizerCreateRequest`

NewConnectorCustomizerCreateRequest instantiates a new ConnectorCustomizerCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorCustomizerCreateRequestWithDefaults

`func NewConnectorCustomizerCreateRequestWithDefaults() *ConnectorCustomizerCreateRequest`

NewConnectorCustomizerCreateRequestWithDefaults instantiates a new ConnectorCustomizerCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorCustomizerCreateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorCustomizerCreateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorCustomizerCreateRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectorCustomizerCreateRequest) HasName() bool`

HasName returns a boolean if a field has been set.


