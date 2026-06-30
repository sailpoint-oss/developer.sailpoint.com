---
id: v1-get-privilege-criteria-config-v1401-response
title: GetPrivilegeCriteriaConfigV1401Response
pagination_label: GetPrivilegeCriteriaConfigV1401Response
sidebar_label: GetPrivilegeCriteriaConfigV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPrivilegeCriteriaConfigV1401Response', 'V1GetPrivilegeCriteriaConfigV1401Response'] 
slug: /tools/sdk/go/privilegecriteriaconfiguration/models/get-privilege-criteria-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPrivilegeCriteriaConfigV1401Response', 'V1GetPrivilegeCriteriaConfigV1401Response']
---

# GetPrivilegeCriteriaConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPrivilegeCriteriaConfigV1401Response

`func NewGetPrivilegeCriteriaConfigV1401Response() *GetPrivilegeCriteriaConfigV1401Response`

NewGetPrivilegeCriteriaConfigV1401Response instantiates a new GetPrivilegeCriteriaConfigV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPrivilegeCriteriaConfigV1401ResponseWithDefaults

`func NewGetPrivilegeCriteriaConfigV1401ResponseWithDefaults() *GetPrivilegeCriteriaConfigV1401Response`

NewGetPrivilegeCriteriaConfigV1401ResponseWithDefaults instantiates a new GetPrivilegeCriteriaConfigV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetPrivilegeCriteriaConfigV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetPrivilegeCriteriaConfigV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetPrivilegeCriteriaConfigV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetPrivilegeCriteriaConfigV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetPrivilegeCriteriaConfigV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetPrivilegeCriteriaConfigV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

