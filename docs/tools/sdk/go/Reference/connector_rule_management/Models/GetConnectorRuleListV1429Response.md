---
id: v1-get-connector-rule-list-v1429-response
title: GetConnectorRuleListV1429Response
pagination_label: GetConnectorRuleListV1429Response
sidebar_label: GetConnectorRuleListV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetConnectorRuleListV1429Response', 'V1GetConnectorRuleListV1429Response'] 
slug: /tools/sdk/go/connectorrulemanagement/models/get-connector-rule-list-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetConnectorRuleListV1429Response', 'V1GetConnectorRuleListV1429Response']
---

# GetConnectorRuleListV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetConnectorRuleListV1429Response

`func NewGetConnectorRuleListV1429Response() *GetConnectorRuleListV1429Response`

NewGetConnectorRuleListV1429Response instantiates a new GetConnectorRuleListV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetConnectorRuleListV1429ResponseWithDefaults

`func NewGetConnectorRuleListV1429ResponseWithDefaults() *GetConnectorRuleListV1429Response`

NewGetConnectorRuleListV1429ResponseWithDefaults instantiates a new GetConnectorRuleListV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetConnectorRuleListV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetConnectorRuleListV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetConnectorRuleListV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetConnectorRuleListV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetConnectorRuleListV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetConnectorRuleListV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

