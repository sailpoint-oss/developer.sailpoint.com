---
id: v2025-summary-response
title: SummaryResponse
pagination_label: SummaryResponse
sidebar_label: SummaryResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SummaryResponse', 'V2025SummaryResponse'] 
slug: /tools/sdk/go/v2025/models/summary-response
tags: ['SDK', 'Software Development Kit', 'SummaryResponse', 'V2025SummaryResponse']
---

# SummaryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestedUri** | Pointer to **string** | The endpoint of a SailPoint API | [optional] 
**NumberOfCalls** | Pointer to **int64** | Number of calls made to a specific SailPoint API | [optional] 

## Methods

### NewSummaryResponse

`func NewSummaryResponse() *SummaryResponse`

NewSummaryResponse instantiates a new SummaryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSummaryResponseWithDefaults

`func NewSummaryResponseWithDefaults() *SummaryResponse`

NewSummaryResponseWithDefaults instantiates a new SummaryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestedUri

`func (o *SummaryResponse) GetRequestedUri() string`

GetRequestedUri returns the RequestedUri field if non-nil, zero value otherwise.

### GetRequestedUriOk

`func (o *SummaryResponse) GetRequestedUriOk() (*string, bool)`

GetRequestedUriOk returns a tuple with the RequestedUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedUri

`func (o *SummaryResponse) SetRequestedUri(v string)`

SetRequestedUri sets RequestedUri field to given value.

### HasRequestedUri

`func (o *SummaryResponse) HasRequestedUri() bool`

HasRequestedUri returns a boolean if a field has been set.

### GetNumberOfCalls

`func (o *SummaryResponse) GetNumberOfCalls() int64`

GetNumberOfCalls returns the NumberOfCalls field if non-nil, zero value otherwise.

### GetNumberOfCallsOk

`func (o *SummaryResponse) GetNumberOfCallsOk() (*int64, bool)`

GetNumberOfCallsOk returns a tuple with the NumberOfCalls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfCalls

`func (o *SummaryResponse) SetNumberOfCalls(v int64)`

SetNumberOfCalls sets NumberOfCalls field to given value.

### HasNumberOfCalls

`func (o *SummaryResponse) HasNumberOfCalls() bool`

HasNumberOfCalls returns a boolean if a field has been set.


