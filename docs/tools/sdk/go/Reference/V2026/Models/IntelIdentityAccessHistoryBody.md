---
id: v2026-intel-identity-access-history-body
title: IntelIdentityAccessHistoryBody
pagination_label: IntelIdentityAccessHistoryBody
sidebar_label: IntelIdentityAccessHistoryBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityAccessHistoryBody', 'V2026IntelIdentityAccessHistoryBody'] 
slug: /tools/sdk/go/v2026/models/intel-identity-access-history-body
tags: ['SDK', 'Software Development Kit', 'IntelIdentityAccessHistoryBody', 'V2026IntelIdentityAccessHistoryBody']
---

# IntelIdentityAccessHistoryBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Events** | **[]map[string]interface{}** | Each event is relayed from identity-history. Schema varies by event type; consumers should treat unknown fields as opaque using additionalProperties.  | 

## Methods

### NewIntelIdentityAccessHistoryBody

`func NewIntelIdentityAccessHistoryBody(events []map[string]interface{}, ) *IntelIdentityAccessHistoryBody`

NewIntelIdentityAccessHistoryBody instantiates a new IntelIdentityAccessHistoryBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityAccessHistoryBodyWithDefaults

`func NewIntelIdentityAccessHistoryBodyWithDefaults() *IntelIdentityAccessHistoryBody`

NewIntelIdentityAccessHistoryBodyWithDefaults instantiates a new IntelIdentityAccessHistoryBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvents

`func (o *IntelIdentityAccessHistoryBody) GetEvents() []map[string]interface{}`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *IntelIdentityAccessHistoryBody) GetEventsOk() (*[]map[string]interface{}, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *IntelIdentityAccessHistoryBody) SetEvents(v []map[string]interface{})`

SetEvents sets Events field to given value.



