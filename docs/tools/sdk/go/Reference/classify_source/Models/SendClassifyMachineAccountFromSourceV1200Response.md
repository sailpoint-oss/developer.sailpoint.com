---
id: v1-send-classify-machine-account-from-source-v1200-response
title: SendClassifyMachineAccountFromSourceV1200Response
pagination_label: SendClassifyMachineAccountFromSourceV1200Response
sidebar_label: SendClassifyMachineAccountFromSourceV1200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendClassifyMachineAccountFromSourceV1200Response', 'V1SendClassifyMachineAccountFromSourceV1200Response'] 
slug: /tools/sdk/go/classifysource/models/send-classify-machine-account-from-source-v1200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountFromSourceV1200Response', 'V1SendClassifyMachineAccountFromSourceV1200Response']
---

# SendClassifyMachineAccountFromSourceV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountsSubmittedForProcessing** | Pointer to **int32** | Returns the number of all the accounts from source submitted for processing. | [optional] 

## Methods

### NewSendClassifyMachineAccountFromSourceV1200Response

`func NewSendClassifyMachineAccountFromSourceV1200Response() *SendClassifyMachineAccountFromSourceV1200Response`

NewSendClassifyMachineAccountFromSourceV1200Response instantiates a new SendClassifyMachineAccountFromSourceV1200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendClassifyMachineAccountFromSourceV1200ResponseWithDefaults

`func NewSendClassifyMachineAccountFromSourceV1200ResponseWithDefaults() *SendClassifyMachineAccountFromSourceV1200Response`

NewSendClassifyMachineAccountFromSourceV1200ResponseWithDefaults instantiates a new SendClassifyMachineAccountFromSourceV1200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountsSubmittedForProcessing

`func (o *SendClassifyMachineAccountFromSourceV1200Response) GetAccountsSubmittedForProcessing() int32`

GetAccountsSubmittedForProcessing returns the AccountsSubmittedForProcessing field if non-nil, zero value otherwise.

### GetAccountsSubmittedForProcessingOk

`func (o *SendClassifyMachineAccountFromSourceV1200Response) GetAccountsSubmittedForProcessingOk() (*int32, bool)`

GetAccountsSubmittedForProcessingOk returns a tuple with the AccountsSubmittedForProcessing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsSubmittedForProcessing

`func (o *SendClassifyMachineAccountFromSourceV1200Response) SetAccountsSubmittedForProcessing(v int32)`

SetAccountsSubmittedForProcessing sets AccountsSubmittedForProcessing field to given value.

### HasAccountsSubmittedForProcessing

`func (o *SendClassifyMachineAccountFromSourceV1200Response) HasAccountsSubmittedForProcessing() bool`

HasAccountsSubmittedForProcessing returns a boolean if a field has been set.


