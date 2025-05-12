---
id: beta-managed-client-status-agg-response
title: ManagedClientStatusAggResponse
pagination_label: ManagedClientStatusAggResponse
sidebar_label: ManagedClientStatusAggResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClientStatusAggResponse', 'BetaManagedClientStatusAggResponse'] 
slug: /tools/sdk/go/beta/models/managed-client-status-agg-response
tags: ['SDK', 'Software Development Kit', 'ManagedClientStatusAggResponse', 'BetaManagedClientStatusAggResponse']
---

# ManagedClientStatusAggResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **map[string]interface{}** | ManagedClientStatus body information | 
**Status** | [**ManagedClientStatusEnum**](managed-client-status-enum) |  | 
**Type** | [**NullableManagedClientType**](managed-client-type) |  | 
**Timestamp** | **time.Time** | timestamp on the Client Status update | 

## Methods

### NewManagedClientStatusAggResponse

`func NewManagedClientStatusAggResponse(body map[string]interface{}, status ManagedClientStatusEnum, type_ NullableManagedClientType, timestamp time.Time, ) *ManagedClientStatusAggResponse`

NewManagedClientStatusAggResponse instantiates a new ManagedClientStatusAggResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClientStatusAggResponseWithDefaults

`func NewManagedClientStatusAggResponseWithDefaults() *ManagedClientStatusAggResponse`

NewManagedClientStatusAggResponseWithDefaults instantiates a new ManagedClientStatusAggResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBody

`func (o *ManagedClientStatusAggResponse) GetBody() map[string]interface{}`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *ManagedClientStatusAggResponse) GetBodyOk() (*map[string]interface{}, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *ManagedClientStatusAggResponse) SetBody(v map[string]interface{})`

SetBody sets Body field to given value.


### GetStatus

`func (o *ManagedClientStatusAggResponse) GetStatus() ManagedClientStatusEnum`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManagedClientStatusAggResponse) GetStatusOk() (*ManagedClientStatusEnum, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManagedClientStatusAggResponse) SetStatus(v ManagedClientStatusEnum)`

SetStatus sets Status field to given value.


### GetType

`func (o *ManagedClientStatusAggResponse) GetType() ManagedClientType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedClientStatusAggResponse) GetTypeOk() (*ManagedClientType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedClientStatusAggResponse) SetType(v ManagedClientType)`

SetType sets Type field to given value.


### SetTypeNil

`func (o *ManagedClientStatusAggResponse) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *ManagedClientStatusAggResponse) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetTimestamp

`func (o *ManagedClientStatusAggResponse) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ManagedClientStatusAggResponse) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ManagedClientStatusAggResponse) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.



