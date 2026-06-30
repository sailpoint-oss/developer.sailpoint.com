---
id: v1-connectorrulevalidationresponse-details-inner
title: ConnectorrulevalidationresponseDetailsInner
pagination_label: ConnectorrulevalidationresponseDetailsInner
sidebar_label: ConnectorrulevalidationresponseDetailsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConnectorrulevalidationresponseDetailsInner', 'V1ConnectorrulevalidationresponseDetailsInner'] 
slug: /tools/sdk/go/connectorrulemanagement/models/connectorrulevalidationresponse-details-inner
tags: ['SDK', 'Software Development Kit', 'ConnectorrulevalidationresponseDetailsInner', 'V1ConnectorrulevalidationresponseDetailsInner']
---

# ConnectorrulevalidationresponseDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Line** | **int32** | The line number where the issue occurred | 
**Column** | **int32** | the column number where the issue occurred | 
**Messsage** | Pointer to **string** | a description of the issue in the code | [optional] 

## Methods

### NewConnectorrulevalidationresponseDetailsInner

`func NewConnectorrulevalidationresponseDetailsInner(line int32, column int32, ) *ConnectorrulevalidationresponseDetailsInner`

NewConnectorrulevalidationresponseDetailsInner instantiates a new ConnectorrulevalidationresponseDetailsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectorrulevalidationresponseDetailsInnerWithDefaults

`func NewConnectorrulevalidationresponseDetailsInnerWithDefaults() *ConnectorrulevalidationresponseDetailsInner`

NewConnectorrulevalidationresponseDetailsInnerWithDefaults instantiates a new ConnectorrulevalidationresponseDetailsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLine

`func (o *ConnectorrulevalidationresponseDetailsInner) GetLine() int32`

GetLine returns the Line field if non-nil, zero value otherwise.

### GetLineOk

`func (o *ConnectorrulevalidationresponseDetailsInner) GetLineOk() (*int32, bool)`

GetLineOk returns a tuple with the Line field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine

`func (o *ConnectorrulevalidationresponseDetailsInner) SetLine(v int32)`

SetLine sets Line field to given value.


### GetColumn

`func (o *ConnectorrulevalidationresponseDetailsInner) GetColumn() int32`

GetColumn returns the Column field if non-nil, zero value otherwise.

### GetColumnOk

`func (o *ConnectorrulevalidationresponseDetailsInner) GetColumnOk() (*int32, bool)`

GetColumnOk returns a tuple with the Column field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumn

`func (o *ConnectorrulevalidationresponseDetailsInner) SetColumn(v int32)`

SetColumn sets Column field to given value.


### GetMesssage

`func (o *ConnectorrulevalidationresponseDetailsInner) GetMesssage() string`

GetMesssage returns the Messsage field if non-nil, zero value otherwise.

### GetMesssageOk

`func (o *ConnectorrulevalidationresponseDetailsInner) GetMesssageOk() (*string, bool)`

GetMesssageOk returns a tuple with the Messsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMesssage

`func (o *ConnectorrulevalidationresponseDetailsInner) SetMesssage(v string)`

SetMesssage sets Messsage field to given value.

### HasMesssage

`func (o *ConnectorrulevalidationresponseDetailsInner) HasMesssage() bool`

HasMesssage returns a boolean if a field has been set.


