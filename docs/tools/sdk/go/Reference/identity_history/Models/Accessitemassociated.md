---
id: v1-accessitemassociated
title: Accessitemassociated
pagination_label: Accessitemassociated
sidebar_label: Accessitemassociated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessitemassociated', 'V1Accessitemassociated'] 
slug: /tools/sdk/go/identityhistory/models/accessitemassociated
tags: ['SDK', 'Software Development Kit', 'Accessitemassociated', 'V1Accessitemassociated']
---

# Accessitemassociated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**AccessItem** | [**AccessitemassociatedAccessItem**](accessitemassociated-access-item) |  | 
**GovernanceEvent** | [**NullableCorrelatedgovernanceevent**](correlatedgovernanceevent) |  | 
**AccessItemType** | Pointer to **string** | the access item type | [optional] 

## Methods

### NewAccessitemassociated

`func NewAccessitemassociated(accessItem AccessitemassociatedAccessItem, governanceEvent NullableCorrelatedgovernanceevent, ) *Accessitemassociated`

NewAccessitemassociated instantiates a new Accessitemassociated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessitemassociatedWithDefaults

`func NewAccessitemassociatedWithDefaults() *Accessitemassociated`

NewAccessitemassociatedWithDefaults instantiates a new Accessitemassociated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *Accessitemassociated) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *Accessitemassociated) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *Accessitemassociated) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *Accessitemassociated) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDateTime

`func (o *Accessitemassociated) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *Accessitemassociated) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *Accessitemassociated) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *Accessitemassociated) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetIdentityId

`func (o *Accessitemassociated) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *Accessitemassociated) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *Accessitemassociated) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *Accessitemassociated) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetAccessItem

`func (o *Accessitemassociated) GetAccessItem() AccessitemassociatedAccessItem`

GetAccessItem returns the AccessItem field if non-nil, zero value otherwise.

### GetAccessItemOk

`func (o *Accessitemassociated) GetAccessItemOk() (*AccessitemassociatedAccessItem, bool)`

GetAccessItemOk returns a tuple with the AccessItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItem

`func (o *Accessitemassociated) SetAccessItem(v AccessitemassociatedAccessItem)`

SetAccessItem sets AccessItem field to given value.


### GetGovernanceEvent

`func (o *Accessitemassociated) GetGovernanceEvent() Correlatedgovernanceevent`

GetGovernanceEvent returns the GovernanceEvent field if non-nil, zero value otherwise.

### GetGovernanceEventOk

`func (o *Accessitemassociated) GetGovernanceEventOk() (*Correlatedgovernanceevent, bool)`

GetGovernanceEventOk returns a tuple with the GovernanceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceEvent

`func (o *Accessitemassociated) SetGovernanceEvent(v Correlatedgovernanceevent)`

SetGovernanceEvent sets GovernanceEvent field to given value.


### SetGovernanceEventNil

`func (o *Accessitemassociated) SetGovernanceEventNil(b bool)`

 SetGovernanceEventNil sets the value for GovernanceEvent to be an explicit nil

### UnsetGovernanceEvent
`func (o *Accessitemassociated) UnsetGovernanceEvent()`

UnsetGovernanceEvent ensures that no value is present for GovernanceEvent, not even an explicit nil
### GetAccessItemType

`func (o *Accessitemassociated) GetAccessItemType() string`

GetAccessItemType returns the AccessItemType field if non-nil, zero value otherwise.

### GetAccessItemTypeOk

`func (o *Accessitemassociated) GetAccessItemTypeOk() (*string, bool)`

GetAccessItemTypeOk returns a tuple with the AccessItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemType

`func (o *Accessitemassociated) SetAccessItemType(v string)`

SetAccessItemType sets AccessItemType field to given value.

### HasAccessItemType

`func (o *Accessitemassociated) HasAccessItemType() bool`

HasAccessItemType returns a boolean if a field has been set.


