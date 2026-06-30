---
id: v1-list-privilege-criteria-v1401-response
title: ListPrivilegeCriteriaV1401Response
pagination_label: ListPrivilegeCriteriaV1401Response
sidebar_label: ListPrivilegeCriteriaV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListPrivilegeCriteriaV1401Response', 'V1ListPrivilegeCriteriaV1401Response'] 
slug: /tools/sdk/go/privilegecriteria/models/list-privilege-criteria-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListPrivilegeCriteriaV1401Response', 'V1ListPrivilegeCriteriaV1401Response']
---

# ListPrivilegeCriteriaV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListPrivilegeCriteriaV1401Response

`func NewListPrivilegeCriteriaV1401Response() *ListPrivilegeCriteriaV1401Response`

NewListPrivilegeCriteriaV1401Response instantiates a new ListPrivilegeCriteriaV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPrivilegeCriteriaV1401ResponseWithDefaults

`func NewListPrivilegeCriteriaV1401ResponseWithDefaults() *ListPrivilegeCriteriaV1401Response`

NewListPrivilegeCriteriaV1401ResponseWithDefaults instantiates a new ListPrivilegeCriteriaV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListPrivilegeCriteriaV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListPrivilegeCriteriaV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListPrivilegeCriteriaV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListPrivilegeCriteriaV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListPrivilegeCriteriaV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListPrivilegeCriteriaV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

