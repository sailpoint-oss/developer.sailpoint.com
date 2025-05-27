---
id: v2024-managed-client-status
title: ManagedClientStatus
pagination_label: ManagedClientStatus
sidebar_label: ManagedClientStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClientStatus', 'V2024ManagedClientStatus'] 
slug: /tools/sdk/go/v2024/models/managed-client-status
tags: ['SDK', 'Software Development Kit', 'ManagedClientStatus', 'V2024ManagedClientStatus']
---

# ManagedClientStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **map[string]interface{}** | ManagedClientStatus body information | 
**Status** | [**ManagedClientStatusCode**](managed-client-status-code) |  | 
**Type** | [**NullableManagedClientType**](managed-client-type) |  | 
**Timestamp** | **SailPointTime** | timestamp on the Client Status update | 

## Methods

### NewManagedClientStatus

`func NewManagedClientStatus(body map[string]interface{}, status ManagedClientStatusCode, type_ NullableManagedClientType, timestamp SailPointTime, ) *ManagedClientStatus`

NewManagedClientStatus instantiates a new ManagedClientStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClientStatusWithDefaults

`func NewManagedClientStatusWithDefaults() *ManagedClientStatus`

NewManagedClientStatusWithDefaults instantiates a new ManagedClientStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBody

`func (o *ManagedClientStatus) GetBody() map[string]interface{}`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *ManagedClientStatus) GetBodyOk() (*map[string]interface{}, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *ManagedClientStatus) SetBody(v map[string]interface{})`

SetBody sets Body field to given value.


### GetStatus

`func (o *ManagedClientStatus) GetStatus() ManagedClientStatusCode`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ManagedClientStatus) GetStatusOk() (*ManagedClientStatusCode, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ManagedClientStatus) SetStatus(v ManagedClientStatusCode)`

SetStatus sets Status field to given value.


### GetType

`func (o *ManagedClientStatus) GetType() ManagedClientType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ManagedClientStatus) GetTypeOk() (*ManagedClientType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ManagedClientStatus) SetType(v ManagedClientType)`

SetType sets Type field to given value.


### SetTypeNil

`func (o *ManagedClientStatus) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *ManagedClientStatus) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetTimestamp

`func (o *ManagedClientStatus) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ManagedClientStatus) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ManagedClientStatus) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.



