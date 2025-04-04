---
id: v2024-connector-customizer-update-request
title: ConnectorCustomizerUpdateRequest
pagination_label: ConnectorCustomizerUpdateRequest
sidebar_label: ConnectorCustomizerUpdateRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorCustomizerUpdateRequest', 'V2024ConnectorCustomizerUpdateRequest'] 
slug: /tools/sdk/go/v2024/models/connector-customizer-update-request
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizerUpdateRequest', 'V2024ConnectorCustomizerUpdateRequest']
---

# ConnectorCustomizerUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Connector customizer name. | [optional] 

## Methods

### NewConnectorCustomizerUpdateRequest

`func NewConnectorCustomizerUpdateRequest() *ConnectorCustomizerUpdateRequest`

NewConnectorCustomizerUpdateRequest instantiates a new ConnectorCustomizerUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorCustomizerUpdateRequestWithDefaults

`func NewConnectorCustomizerUpdateRequestWithDefaults() *ConnectorCustomizerUpdateRequest`

NewConnectorCustomizerUpdateRequestWithDefaults instantiates a new ConnectorCustomizerUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ConnectorCustomizerUpdateRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ConnectorCustomizerUpdateRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ConnectorCustomizerUpdateRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ConnectorCustomizerUpdateRequest) HasName() bool`

HasName returns a boolean if a field has been set.


