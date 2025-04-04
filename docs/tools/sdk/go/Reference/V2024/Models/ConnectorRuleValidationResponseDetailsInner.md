---
id: v2024-connector-rule-validation-response-details-inner
title: ConnectorRuleValidationResponseDetailsInner
pagination_label: ConnectorRuleValidationResponseDetailsInner
sidebar_label: ConnectorRuleValidationResponseDetailsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorRuleValidationResponseDetailsInner', 'V2024ConnectorRuleValidationResponseDetailsInner'] 
slug: /tools/sdk/go/v2024/models/connector-rule-validation-response-details-inner
tags: ['SDK', 'Software Development Kit', 'ConnectorRuleValidationResponseDetailsInner', 'V2024ConnectorRuleValidationResponseDetailsInner']
---

# ConnectorRuleValidationResponseDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Line** | **int32** | The line number where the issue occurred | 
**Column** | **int32** | the column number where the issue occurred | 
**Messsage** | Pointer to **string** | a description of the issue in the code | [optional] 

## Methods

### NewConnectorRuleValidationResponseDetailsInner

`func NewConnectorRuleValidationResponseDetailsInner(line int32, column int32, ) *ConnectorRuleValidationResponseDetailsInner`

NewConnectorRuleValidationResponseDetailsInner instantiates a new ConnectorRuleValidationResponseDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorRuleValidationResponseDetailsInnerWithDefaults

`func NewConnectorRuleValidationResponseDetailsInnerWithDefaults() *ConnectorRuleValidationResponseDetailsInner`

NewConnectorRuleValidationResponseDetailsInnerWithDefaults instantiates a new ConnectorRuleValidationResponseDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLine

`func (o *ConnectorRuleValidationResponseDetailsInner) GetLine() int32`

GetLine returns the Line field if non-nil, zero value otherwise.

### GetLineOk

`func (o *ConnectorRuleValidationResponseDetailsInner) GetLineOk() (*int32, bool)`

GetLineOk returns a tuple with the Line field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine

`func (o *ConnectorRuleValidationResponseDetailsInner) SetLine(v int32)`

SetLine sets Line field to given value.


### GetColumn

`func (o *ConnectorRuleValidationResponseDetailsInner) GetColumn() int32`

GetColumn returns the Column field if non-nil, zero value otherwise.

### GetColumnOk

`func (o *ConnectorRuleValidationResponseDetailsInner) GetColumnOk() (*int32, bool)`

GetColumnOk returns a tuple with the Column field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumn

`func (o *ConnectorRuleValidationResponseDetailsInner) SetColumn(v int32)`

SetColumn sets Column field to given value.


### GetMesssage

`func (o *ConnectorRuleValidationResponseDetailsInner) GetMesssage() string`

GetMesssage returns the Messsage field if non-nil, zero value otherwise.

### GetMesssageOk

`func (o *ConnectorRuleValidationResponseDetailsInner) GetMesssageOk() (*string, bool)`

GetMesssageOk returns a tuple with the Messsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMesssage

`func (o *ConnectorRuleValidationResponseDetailsInner) SetMesssage(v string)`

SetMesssage sets Messsage field to given value.

### HasMesssage

`func (o *ConnectorRuleValidationResponseDetailsInner) HasMesssage() bool`

HasMesssage returns a boolean if a field has been set.


