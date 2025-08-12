---
id: v2025-send-classify-machine-account-from-source200-response
title: SendClassifyMachineAccountFromSource200Response
pagination_label: SendClassifyMachineAccountFromSource200Response
sidebar_label: SendClassifyMachineAccountFromSource200Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendClassifyMachineAccountFromSource200Response', 'V2025SendClassifyMachineAccountFromSource200Response'] 
slug: /tools/sdk/go/v2025/models/send-classify-machine-account-from-source200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountFromSource200Response', 'V2025SendClassifyMachineAccountFromSource200Response']
---

# SendClassifyMachineAccountFromSource200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountsSubmittedForProcessing** | Pointer to **int32** | Returns the number of all the accounts from source submitted for processing. | [optional] 

## Methods

### NewSendClassifyMachineAccountFromSource200Response

`func NewSendClassifyMachineAccountFromSource200Response() *SendClassifyMachineAccountFromSource200Response`

NewSendClassifyMachineAccountFromSource200Response instantiates a new SendClassifyMachineAccountFromSource200Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendClassifyMachineAccountFromSource200ResponseWithDefaults

`func NewSendClassifyMachineAccountFromSource200ResponseWithDefaults() *SendClassifyMachineAccountFromSource200Response`

NewSendClassifyMachineAccountFromSource200ResponseWithDefaults instantiates a new SendClassifyMachineAccountFromSource200Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountsSubmittedForProcessing

`func (o *SendClassifyMachineAccountFromSource200Response) GetAccountsSubmittedForProcessing() int32`

GetAccountsSubmittedForProcessing returns the AccountsSubmittedForProcessing field if non-nil, zero value otherwise.

### GetAccountsSubmittedForProcessingOk

`func (o *SendClassifyMachineAccountFromSource200Response) GetAccountsSubmittedForProcessingOk() (*int32, bool)`

GetAccountsSubmittedForProcessingOk returns a tuple with the AccountsSubmittedForProcessing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountsSubmittedForProcessing

`func (o *SendClassifyMachineAccountFromSource200Response) SetAccountsSubmittedForProcessing(v int32)`

SetAccountsSubmittedForProcessing sets AccountsSubmittedForProcessing field to given value.

### HasAccountsSubmittedForProcessing

`func (o *SendClassifyMachineAccountFromSource200Response) HasAccountsSubmittedForProcessing() bool`

HasAccountsSubmittedForProcessing returns a boolean if a field has been set.


