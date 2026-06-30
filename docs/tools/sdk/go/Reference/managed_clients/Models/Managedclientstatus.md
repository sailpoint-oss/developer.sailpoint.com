---
id: v1-managedclientstatus
title: Managedclientstatus
pagination_label: Managedclientstatus
sidebar_label: Managedclientstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclientstatus', 'V1Managedclientstatus'] 
slug: /tools/sdk/go/managedclients/models/managedclientstatus
tags: ['SDK', 'Software Development Kit', 'Managedclientstatus', 'V1Managedclientstatus']
---

# Managedclientstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **map[string]interface{}** | ManagedClientStatus body information | 
**Status** | [**Managedclientstatuscode**](managedclientstatuscode) |  | 
**Type** | [**NullableManagedclienttype**](managedclienttype) |  | 
**Timestamp** | **SailPointTime** | timestamp on the Client Status update | 

## Methods

### NewManagedclientstatus

`func NewManagedclientstatus(body map[string]interface{}, status Managedclientstatuscode, type_ NullableManagedclienttype, timestamp SailPointTime, ) *Managedclientstatus`

NewManagedclientstatus instantiates a new Managedclientstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclientstatusWithDefaults

`func NewManagedclientstatusWithDefaults() *Managedclientstatus`

NewManagedclientstatusWithDefaults instantiates a new Managedclientstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBody

`func (o *Managedclientstatus) GetBody() map[string]interface{}`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *Managedclientstatus) GetBodyOk() (*map[string]interface{}, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *Managedclientstatus) SetBody(v map[string]interface{})`

SetBody sets Body field to given value.


### GetStatus

`func (o *Managedclientstatus) GetStatus() Managedclientstatuscode`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Managedclientstatus) GetStatusOk() (*Managedclientstatuscode, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Managedclientstatus) SetStatus(v Managedclientstatuscode)`

SetStatus sets Status field to given value.


### GetType

`func (o *Managedclientstatus) GetType() Managedclienttype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Managedclientstatus) GetTypeOk() (*Managedclienttype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Managedclientstatus) SetType(v Managedclienttype)`

SetType sets Type field to given value.


### SetTypeNil

`func (o *Managedclientstatus) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *Managedclientstatus) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil
### GetTimestamp

`func (o *Managedclientstatus) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Managedclientstatus) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Managedclientstatus) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.



