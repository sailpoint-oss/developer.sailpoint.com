---
id: v1-send-classify-machine-account-v1200-response
title: SendClassifyMachineAccountV1200Response
pagination_label: SendClassifyMachineAccountV1200Response
sidebar_label: SendClassifyMachineAccountV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendClassifyMachineAccountV1200Response', 'V1SendClassifyMachineAccountV1200Response'] 
slug: /tools/sdk/go/machineaccountclassify/models/send-classify-machine-account-v1200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountV1200Response', 'V1SendClassifyMachineAccountV1200Response']
---

# SendClassifyMachineAccountV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsMachine** | Pointer to **bool** | Indicates if account is classified as machine | [optional] [default to false]

## Methods

### NewSendClassifyMachineAccountV1200Response

`func NewSendClassifyMachineAccountV1200Response() *SendClassifyMachineAccountV1200Response`

NewSendClassifyMachineAccountV1200Response instantiates a new SendClassifyMachineAccountV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendClassifyMachineAccountV1200ResponseWithDefaults

`func NewSendClassifyMachineAccountV1200ResponseWithDefaults() *SendClassifyMachineAccountV1200Response`

NewSendClassifyMachineAccountV1200ResponseWithDefaults instantiates a new SendClassifyMachineAccountV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsMachine

`func (o *SendClassifyMachineAccountV1200Response) GetIsMachine() bool`

GetIsMachine returns the IsMachine field if non-nil, zero value otherwise.

### GetIsMachineOk

`func (o *SendClassifyMachineAccountV1200Response) GetIsMachineOk() (*bool, bool)`

GetIsMachineOk returns a tuple with the IsMachine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsMachine

`func (o *SendClassifyMachineAccountV1200Response) SetIsMachine(v bool)`

SetIsMachine sets IsMachine field to given value.

### HasIsMachine

`func (o *SendClassifyMachineAccountV1200Response) HasIsMachine() bool`

HasIsMachine returns a boolean if a field has been set.


