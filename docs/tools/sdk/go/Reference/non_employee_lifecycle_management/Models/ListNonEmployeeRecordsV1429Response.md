---
id: v1-list-non-employee-records-v1429-response
title: ListNonEmployeeRecordsV1429Response
pagination_label: ListNonEmployeeRecordsV1429Response
sidebar_label: ListNonEmployeeRecordsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListNonEmployeeRecordsV1429Response', 'V1ListNonEmployeeRecordsV1429Response'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/list-non-employee-records-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListNonEmployeeRecordsV1429Response', 'V1ListNonEmployeeRecordsV1429Response']
---

# ListNonEmployeeRecordsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListNonEmployeeRecordsV1429Response

`func NewListNonEmployeeRecordsV1429Response() *ListNonEmployeeRecordsV1429Response`

NewListNonEmployeeRecordsV1429Response instantiates a new ListNonEmployeeRecordsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListNonEmployeeRecordsV1429ResponseWithDefaults

`func NewListNonEmployeeRecordsV1429ResponseWithDefaults() *ListNonEmployeeRecordsV1429Response`

NewListNonEmployeeRecordsV1429ResponseWithDefaults instantiates a new ListNonEmployeeRecordsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListNonEmployeeRecordsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListNonEmployeeRecordsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListNonEmployeeRecordsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListNonEmployeeRecordsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListNonEmployeeRecordsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListNonEmployeeRecordsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

